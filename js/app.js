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
    var matches = genData.filter(function (person) {
      return !keyword || person[3].toLocaleLowerCase("ko").indexOf(keyword) !== -1 || String(person[1]).indexOf(keyword) !== -1;
    });
    var generations = {};
    matches.forEach(function (person) {
      if (!generations[person[1]]) generations[person[1]] = [];
      generations[person[1]].push(person);
    });
    var keys = Object.keys(generations).sort(function (a, b) { return Number(a) - Number(b); });
    if (!keys.length) {
      list.innerHTML = '<div class="empty-state"><strong>검색 결과가 없습니다.</strong><br>다른 이름이나 호를 입력해 보세요.</div>';
      return;
    }
    list.innerHTML = keys.map(function (generation) {
      var cards = generations[generation].map(function (person) {
        return '<button class="person-card" type="button" onclick="showPerson(' + person[0] + ')"><span class="person-name">' + escapeHtml(cleanName(person[3])) + '</span><span class="person-meta">' + generation + '世 · 기록 보기</span></button>';
      }).join("");
      return '<div class="generation-row"><div class="generation-label"><span>' + generation + '世</span></div><div class="person-group">' + cards + '</div></div>';
    }).join("");
  }

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
    if (history.state && history.state.view === "detail") {
      pendingArchiveTarget = "lineage";
      history.back();
      return;
    }
    history.replaceState({ view: "archive" }, "", location.pathname + location.search + "#lineage");
    renderArchive("lineage");
  };

  window.showPerson = function (id) {
    var person = getPerson(id);
    if (!person) return;
    var parent = getParent(id);
    var children = person[2].map(getPerson).filter(Boolean);
    var photos = person[6] || [];
    var spouses = person[4] || [];
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

    document.getElementById("personDetail").innerHTML = '<div class="detail-hero"><div><span class="generation-badge">' + person[1] + '世 기록</span><p class="eyebrow">ANCESTOR RECORD</p><h1>' + escapeHtml(cleanName(person[3])) + '</h1><p class="section-note">' + escapeHtml(person[3]) + '</p></div>' + (person[5] ? '<button class="map-button" type="button" onclick="openMap(' + id + ')">⌖ 묘역 지도 보기</button>' : '') + '</div><div class="detail-grid"><section class="panel"><h2>묘역 사진</h2><div class="photo-grid">' + photoHtml + '</div></section><aside><section class="panel"><h2>배우자 기록</h2><div class="relative-list">' + spouseHtml + '</div><h2>세대 연결</h2><div class="family-nav">' + navHtml + '</div></section></aside></div>';
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
