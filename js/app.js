(function () {
  "use strict";

  var lastFocused = null;
  var pendingArchiveTarget = null;

  function getPerson(id) {
    return genData.find(function (person) { return person[0] === Number(id); });
  }

  function getParent(id) {
    return genData.find(function (person) { return person[2].indexOf(Number(id)) !== -1; });
  }

  function getAncestorPath(id) {
    var path = [];
    var current = getPerson(id);
    while (current) {
      path.unshift(current);
      current = getParent(current[0]);
    }
    return path;
  }

  function cleanName(value) {
    return value.replace(/\s*묘지.*$/, "").trim();
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char];
    });
  }

  function renderLineage(query) {
    var list = document.getElementById("lineageList");
    var keyword = (query || "").trim().toLocaleLowerCase("ko");
    var matchIds = genData.filter(function (person) {
      return !keyword || person[3].toLocaleLowerCase("ko").indexOf(keyword) !== -1 || String(person[1]).indexOf(keyword) !== -1;
    }).map(function (person) { return person[0]; });

    if (keyword && !matchIds.length) {
      list.innerHTML = '<div class="empty-state"><strong>검색 결과가 없습니다.</strong><br>다른 이름이나 호를 입력해 보세요.</div>';
      return;
    }

    function renderBranch(person) {
      var children = person[2].map(getPerson).filter(Boolean);
      var isMatch = !keyword || matchIds.indexOf(person[0]) !== -1;
      var cardClass = "tree-person" + (keyword ? (isMatch ? " search-match" : " search-muted") : "");
      var childClass = children.length > 1 ? "branch-group" : "single-line";
      var childHtml = children.length ? '<ul class="' + childClass + '">' + children.map(renderBranch).join("") + '</ul>' : "";
      return '<li><button class="' + cardClass + '" type="button" onclick="showPerson(' + person[0] + ')"><span class="tree-generation">' + person[1] + '世</span><span class="tree-name">' + escapeHtml(cleanName(person[3])) + '</span><span class="tree-action">기록 보기 <span aria-hidden="true">→</span></span></button>' + childHtml + '</li>';
    }

    var roots = genData.filter(function (person) { return !getParent(person[0]); });
    var mobileGenerations = {};
    genData.forEach(function (person) {
      if (!mobileGenerations[person[1]]) mobileGenerations[person[1]] = [];
      mobileGenerations[person[1]].push(person);
    });
    var mobileFlow = Object.keys(mobileGenerations).sort(function (a, b) { return Number(a) - Number(b); }).map(function (generation) {
      var cards = mobileGenerations[generation].map(function (person) {
        var parent = getParent(person[0]);
        var isMatch = !keyword || matchIds.indexOf(person[0]) !== -1;
        var cardClass = "mobile-flow-card" + (keyword ? (isMatch ? " search-match" : " search-muted") : "");
        var parentLabel = parent ? '<span class="mobile-parent">' + escapeHtml(cleanName(parent[3])) + '의 다음 세대</span>' : '<span class="mobile-parent mobile-origin">계보의 시작</span>';
        return '<button class="' + cardClass + '" type="button" onclick="showPerson(' + person[0] + ')"><span class="tree-name">' + escapeHtml(cleanName(person[3])) + '</span>' + parentLabel + '<span class="tree-action">기록 보기 <span aria-hidden="true">→</span></span></button>';
      }).join("");
      return '<div class="mobile-generation-row"><div class="mobile-generation-label"><span>' + generation + '世</span></div><div class="mobile-generation-cards">' + cards + '</div></div>';
    }).join("");
    var resultNote = keyword ? '<div class="tree-search-result"><span>검색 결과 <strong>' + matchIds.length + '</strong>명을 계보 안에 표시했습니다.</span><button type="button" onclick="focusSearchResult()">결과 위치 보기 <span aria-hidden="true">↓</span></button></div>' : '<p class="tree-gesture-hint"><span aria-hidden="true">↓</span> 위에서 아래로 세대가 이어지며, 갈라지는 선은 계통의 분기를 나타냅니다.</p>';
    list.innerHTML = resultNote + '<div class="tree-scroll" tabindex="0" aria-label="상산김씨 세대 연결도"><div class="family-tree"><ul>' + roots.map(renderBranch).join("") + '</ul></div></div><div class="mobile-lineage-flow" aria-label="상산김씨 모바일 세대 흐름">' + mobileFlow + '</div>';

    requestAnimationFrame(function () {
      var scroller = list.querySelector(".tree-scroll");
      var target = keyword ? list.querySelector(".search-match") : list.querySelector(".family-tree > ul > li > .tree-person");
      if (!scroller || !target) return;
      var scrollerRect = scroller.getBoundingClientRect();
      var targetRect = target.getBoundingClientRect();
      var targetCenter = targetRect.left - scrollerRect.left + scroller.scrollLeft + (targetRect.width / 2);
      scroller.scrollLeft = Math.max(0, targetCenter - (scroller.clientWidth / 2));
    });
  }

  window.focusSearchResult = function () {
    var target = window.matchMedia("(max-width: 640px)").matches ? document.querySelector(".mobile-flow-card.search-match") : document.querySelector(".tree-person.search-match");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  };

  function renderArchive(target) {
    closeMap();
    document.getElementById("archiveView").hidden = false;
    document.getElementById("detailView").hidden = true;
    if (target === "lineage") {
      requestAnimationFrame(function () {
        document.getElementById("explorerTitle").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  window.showArchive = function () {
    if (history.state && history.state.view === "detail") {
      pendingArchiveTarget = "top";
      history.back();
      return;
    }
    history.replaceState({ view: "archive" }, "", location.pathname + location.search);
    renderArchive("top");
  };

  window.showLineage = function () {
    if (window.matchMedia("(max-width: 640px)").matches) {
      openLineageGraph();
      return;
    }
    if (history.state && history.state.view === "detail") {
      pendingArchiveTarget = "lineage";
      history.back();
      return;
    }
    history.replaceState({ view: "archive" }, "", location.pathname + location.search + "#lineage");
    renderArchive("lineage");
  };

  window.showPerson = function (id) {
    closeMap();
    var person = getPerson(id);
    if (!person) return;
    var parent = getParent(id);
    var children = person[2].map(getPerson).filter(Boolean);
    var photos = person[6] || [];
    var spouses = person[4] || [];
    var ancestorPath = getAncestorPath(id);
    var pathHtml = ancestorPath.map(function (ancestor, index) {
      var label = '<span class="path-generation">' + ancestor[1] + '世</span>' + escapeHtml(cleanName(ancestor[3]));
      var node = ancestor[0] === person[0] ? '<span class="path-current">' + label + '</span>' : '<button type="button" onclick="showPerson(' + ancestor[0] + ')">' + label + '</button>';
      return (index ? '<span class="path-arrow" aria-hidden="true">›</span>' : '') + node;
    }).join("");
    var breadcrumbHtml = ancestorPath.length > 1 ? '<nav class="lineage-path" aria-label="현재 인물까지의 계보">' + pathHtml + '</nav>' : "";
    var photoHtml = photos.length ? photos.map(function (photo) {
      return '<button class="photo-button" type="button" onclick="openImage(\'' + photo + '\', \'' + escapeHtml(cleanName(person[3])) + '\')"><img src="image/' + encodeURIComponent(photo) + '" alt="' + escapeHtml(cleanName(person[3])) + ' 묘역 사진" loading="lazy"></button>';
    }).join("") : '<div class="no-photo">등록된 사진이 없습니다.</div>';
    var spouseHtml = "";
    for (var i = 0; i < spouses.length; i += 3) {
      spouseHtml += '<div class="relative-item"><strong>' + escapeHtml(spouses[i]) + '</strong>';
      if (spouses[i + 1]) spouseHtml += '<span class="person-meta">사진 기록 있음</span>';
      if (spouses[i + 2]) spouseHtml += '<button type="button" onclick="openMapForSpouse(' + id + ',' + i + ')">묘역 지도 보기</button>';
      spouseHtml += '</div>';
    }
    if (!spouseHtml) spouseHtml = '<p class="person-meta">등록된 배우자 기록이 없습니다.</p>';
    var navHtml = "";
    if (parent) navHtml += '<button class="nav-card" type="button" onclick="showPerson(' + parent[0] + ')"><small>이전 세대 · ' + parent[1] + '世</small>' + escapeHtml(cleanName(parent[3])) + '</button>';
    children.forEach(function (child) { navHtml += '<button class="nav-card" type="button" onclick="showPerson(' + child[0] + ')"><small>다음 세대 · ' + child[1] + '世</small>' + escapeHtml(cleanName(child[3])) + '</button>'; });
    if (!navHtml) navHtml = '<p class="person-meta">연결된 앞·뒤 세대가 없습니다.</p>';

    document.getElementById("personDetail").innerHTML = breadcrumbHtml + '<div class="detail-hero"><div><span class="generation-badge">' + person[1] + '世 기록</span><p class="eyebrow">ANCESTOR RECORD</p><h1>' + escapeHtml(cleanName(person[3])) + '</h1><p class="section-note">' + escapeHtml(person[3]) + '</p></div>' + (person[5] ? '<button class="map-button" type="button" onclick="openMap(' + id + ')"><span class="map-pin" aria-hidden="true"></span>묘역 지도 보기</button>' : '') + '</div><div class="detail-grid"><section class="panel"><h2>묘역 사진</h2><div class="photo-grid">' + photoHtml + '</div></section><aside><section class="panel"><h2>배우자 기록</h2><div class="relative-list">' + spouseHtml + '</div><h2>세대 연결</h2><div class="family-nav">' + navHtml + '</div></section></aside></div>';
    document.getElementById("archiveView").hidden = true;
    document.getElementById("detailView").hidden = false;
    if (history.state && history.state.view === "detail") {
      history.replaceState({ view: "detail", personId: id }, "", "#person-" + id);
    } else {
      history.pushState({ view: "detail", personId: id }, "", "#person-" + id);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function showModal(title, content) {
    lastFocused = document.activeElement;
    document.getElementById("mapTitle").textContent = title;
    document.getElementById("mapContent").innerHTML = content;
    document.getElementById("mapModal").hidden = false;
    document.body.style.overflow = "hidden";
    document.querySelector(".icon-button").focus();
  }

  window.openMap = function (id) { var person = getPerson(id); if (person && person[5]) showModal("묘역 위치", person[5]); };
  window.openMapForSpouse = function (id, index) { var person = getPerson(id); if (person && person[4][index + 2]) showModal("배우자 묘역 위치", person[4][index + 2]); };
  window.openImage = function (photo, title) { showModal(title + " 사진", '<img src="image/' + encodeURIComponent(photo) + '" alt="' + escapeHtml(title) + ' 묘역 사진" style="width:100%;max-height:72vh;object-fit:contain;background:#111">'); };
  window.openLineageGraph = function () {
    var source = document.querySelector("#lineageList .family-tree");
    if (!source) return;
    showModal("전체 계보", '<div class="lineage-popup-intro">두 손가락이나 한 손가락으로 그래프를 이동해 전체 계보를 확인하세요.</div><div class="lineage-popup-scroll">' + source.outerHTML + '</div>');
    requestAnimationFrame(function () {
      var scroller = document.querySelector(".lineage-popup-scroll");
      var root = scroller && scroller.querySelector(".family-tree > ul > li > .tree-person");
      if (!scroller || !root) return;
      var rootRect = root.getBoundingClientRect();
      var scrollRect = scroller.getBoundingClientRect();
      scroller.scrollLeft = Math.max(0, rootRect.left - scrollRect.left + scroller.scrollLeft + (rootRect.width / 2) - (scroller.clientWidth / 2));
    });
  };
  window.closeMap = function () {
    var modal = document.getElementById("mapModal");
    if (!modal || modal.hidden) return;
    modal.hidden = true; document.getElementById("mapContent").innerHTML = ""; document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  };

  document.addEventListener("DOMContentLoaded", function () {
    renderLineage("");
    document.getElementById("personSearch").addEventListener("input", function (event) { renderLineage(event.target.value); });
    document.addEventListener("keydown", function (event) { if (event.key === "Escape") closeMap(); });
    var match = location.hash.match(/^#person-(\d+)$/);
    if (match) {
      var personId = Number(match[1]);
      history.replaceState({ view: "archive" }, "", location.pathname + location.search);
      showPerson(personId);
    } else {
      history.replaceState({ view: "archive" }, "", location.pathname + location.search + (location.hash === "#lineage" ? "#lineage" : ""));
      if (location.hash === "#lineage") renderArchive("lineage");
    }
  });

  window.addEventListener("popstate", function (event) {
    if (event.state && event.state.view === "detail") {
      showPerson(event.state.personId);
      return;
    }
    var target = pendingArchiveTarget || (location.hash === "#lineage" ? "lineage" : "top");
    pendingArchiveTarget = null;
    renderArchive(target);
  });
})();
