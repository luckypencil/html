	var filter = "win16|win32|win64|mac";
	var genData = [	
			[1, 21, [2], "宕(탕) 隱庵(은암) 묘지(땅골)", ["配 光陽李氏 묘지(생비량→이장합봉)","",''],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.504640244875!2d128.00154431585415!3d35.41752718025672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c398c4cfcd%3A0xf7c487a0ea9d292f!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIDY3Nw!5e0!3m2!1sko!2skr!4v1500693762085" width=100% height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160208_140803.jpg']],
			[2, 22, [3], "尙 보(상보) 遠慕濟(원모제) 묘지(땅골)", ["配 咸安李氏 묘지(쌍봉)","",''],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.504640244875!2d128.00154431585415!3d35.41752718025672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c398c4cfcd%3A0xf7c487a0ea9d292f!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIDY3Nw!5e0!3m2!1sko!2skr!4v1500693762085" width=100% height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160208_141005.jpg']],
			[3, 23, [4], "坰(경) 松軒(송헌) 묘지(선조밑)", ["配 善山金氏 묘지(쌍봉)",''],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.504640244875!2d128.00154431585415!3d35.41752718025672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c398c4cfcd%3A0xf7c487a0ea9d292f!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIDY3Nw!5e0!3m2!1sko!2skr!4v1500693762085" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160208_141507.jpg']],
			[4, 24, [5], "以鍊(이련) 菊圃(국포) 묘지(땅골)" , ["配 順興安氏 묘지(옆)","",'',"配 安東權氏 묘지(항골)","20160208_150627.jpg",'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.102543990676!2d128.0218939158548!3d35.4522556802484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f08f9af67d92f%3A0x88521c563483033d!2z6rK97IOB64Ko64-EIO2VqeyynOq1sCDqsIDtmozrqbQg7Jik64-E66asIDYzMS0y!5e0!3m2!1sko!2skr!4v1500691797456" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.504640244875!2d128.00154431585415!3d35.41752718025672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c398c4cfcd%3A0xf7c487a0ea9d292f!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIDY3Nw!5e0!3m2!1sko!2skr!4v1500693762085" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160208_131728.jpg','20160208_131807.jpg']],
			[5, 25, [6], "珽漢(정한) 觀瀾軒(관란헌) 묘지(조부밑)" , ["配 星山李氏 묘지(쌍봉)","",''],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.504640244875!2d128.00154431585415!3d35.41752718025672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c398c4cfcd%3A0xf7c487a0ea9d292f!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIDY3Nw!5e0!3m2!1sko!2skr!4v1500693762085" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160915_131116.jpg','20160915_131157.jpg']],
			[6, 26, [7], "履一(이일) 梅湖(매호) 묘지(땅골 조모옆)" , ["配 晋陽河氏 묘지(쌍봉)","",''],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.517808314634!2d128.00303301585436!3d35.417200880256836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c47e652869%3A0x7376fbfa52196866!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIDY3Mg!5e0!3m2!1sko!2skr!4v1500694602999" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160208_131416.jpg','20160208_131426.jpg']],
			[7, 27, [8], "언        畏庵(외암) 묘지(땅골 선조밑)" , ["配 義城金氏 묘지(손항→이장합봉)","",''],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.517808314634!2d128.00303301585436!3d35.417200880256836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c47e652869%3A0x7376fbfa52196866!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIDY3Mg!5e0!3m2!1sko!2skr!4v1500694602999" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160208_130951.jpg']],
			[8, 28, [9,15], "基灝(기호) 黙軒(묵헌) 묘지(율현)" , ["配 草溪鄭氏 묘지(배사등)","20170924_153404.jpg",''],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.7287816811795!2d127.97155731585427!3d35.411972680257946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356fa828af954037%3A0x163d6936ae44d0ac!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Jyo7ZiE66asIDk1OA!5e0!3m2!1sko!2skr!4v1500687444672" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160207_172205.jpg','20160207_172250.jpg']],
			[9, 29, [10], "正錘(정추) 묘지(땅골 3분 쌍봉)" , ["配 晋陽姜氏 묘지(이교→이장합봉)",'',"","配 陜川李氏 묘지(청사돌)","",''],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.5178083146347!2d128.00303301585438!3d35.41720088025682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c47e652869%3A0x7376fbfa52196866!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIDY3Mg!5e0!3m2!1sko!2skr!4v1500687603801" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160915_124950.jpg','20160915_125005.jpg']],
			[10, 30, [11], "東淳(동순) 生父 秉鎰(병일) 묘지(간이)", ["海州鄭氏 묘지(항골)","20160208_144318.jpg",'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.1682132162104!2d128.01554821585492!3d35.45062978024879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f0859aec15d57%3A0x6559dc6608ea8a92!2z6rK97IOB64Ko64-EIO2VqeyynOq1sCDqsIDtmozrqbQg7KSR7LSM66asIDEwNDc!5e0!3m2!1sko!2skr!4v1500691387042" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.5900781527625!2d128.00239704506586!3d35.43486532128914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f08738c306ba5%3A0x8b8f8b6ef344e9e7!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIDMzNg!5e0!3m2!1sko!2skr!4v1500687942225" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160208_155301.jpg']],
			[11, 31, [12], "相郁(상욱) 晦川(회천) 生父 成淳(성순) 묘지(땅골)" , ["配 碧珍李氏 묘지(쌍봉)","",'',"配 南原梁氏 묘지(청사돌)","20160915_133850.jpg",'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.534467002635!2d128.00093751585422!3d35.41678808025691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c3c70128cb%3A0x1e7bb803384bb4f2!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIOyCsDUz!5e0!3m2!1sko!2skr!4v1500690907564" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.514095036366!2d128.00245206624098!3d35.417292894212125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c397fbbdbf%3A0xaeeecc03ec307303!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIOyCsDUy!5e0!3m2!1sko!2skr!4v1500688331461" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160208_132749.jpg']],
			[12, 32, [13,14,19], "錫熙(석희) 復庵(복암) 묘지(땅골)" , ["全義李氏 묘지(땅골 쌍봉)","",''],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.517808314634!2d128.00303301585436!3d35.417200880256836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c47e652869%3A0x7376fbfa52196866!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIDY3Mg!5e0!3m2!1sko!2skr!4v1500688437662" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160208_131908.jpg']],
			[13, 33, [], "聲培(성배) 묘지(땅골)" , [],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.517808314634!2d128.00303301585436!3d35.417200880256836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c47e652869%3A0x7376fbfa52196866!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIDY3Mg!5e0!3m2!1sko!2skr!4v1500688437662" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160208_130746.jpg']],
			[14, 33, [], "廉培(염배) 묘지(땅골)" , [],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.517808314634!2d128.00303301585436!3d35.417200880256836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c47e652869%3A0x7376fbfa52196866!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIDY3Mg!5e0!3m2!1sko!2skr!4v1500688437662" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20171009_104500.jpg']],
			[15, 29, [16], "秉鎰(병일) 석곡할아버지 묘지(둔철)" , ["配 鐵城李氏 묘지(간이)","20160208_160026.jpg",'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.7961936433335!2d128.00090411585472!3d35.43507838025242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f08738fc95747%3A0x70aafe80e26becaa!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIDMzNw!5e0!3m2!1sko!2skr!4v1500692513321" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7045.290210980148!2d127.94492598333659!3d35.37914247211088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356fa98c4138471b%3A0x9435513311264230!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6DslYjrqbQg7JWI67SJ66asIOyCsDM!5e0!3m2!1sko!2skr!4v1500689044341" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160207_163808.jpg','20160207_163920.jpg']],
			[16, 30, [17], "成淳(성순) 시만할아버지 묘지(간이)" , ["配 安東權氏(섬안할머니) 묘지(간이)","20160208_153752.jpg",'',"配 陽川許氏(덕산시만할머니) 묘지(청사돌)","20160208_135617.jpg",'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.5344670026356!2d128.00093751585422!3d35.41678808025689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c3c70128cb%3A0x1e7bb803384bb4f2!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIOyCsDUz!5e0!3m2!1sko!2skr!4v1500729039816" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5441.643638945397!2d127.99884798308956!3d35.43473495931847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f08738c306ba5%3A0x8b8f8b6ef344e9e7!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIDMzNg!5e0!3m2!1sko!2skr!4v1500689205665" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160208_153034.jpg']],
			[17, 31, [18], "昌柱(창주) 못안할아버지 묘지(청사돌)" , ["配 晋陽姜氏(못안할머니) 묘지(청사돌 합봉)","",''],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.534467002635!2d128.00093751585422!3d35.41678808025691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f07c3c70128cb%3A0x1e7bb803384bb4f2!2z6rK97IOB64Ko64-EIOyCsOyyreq1sCDsi6Drk7HrqbQg7Y-J7KeA66asIOyCsDUz!5e0!3m2!1sko!2skr!4v1500689318829" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20160208_133855.jpg']],
			[18, 32, [], "台熙(태희) 生父 相郁(상욱) 묘지(대전국립묘지)" , [],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.3031293982604!2d127.29120021527794!3d36.3776551800378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ab4b39598e2a7%3A0xc3cdc356ad015e04!2z64yA7KCE6rSR7Jet7IucIOycoOyEseq1rCDqsJHrj5kgMTYyLTM!5e0!3m2!1sko!2skr!4v1507512477196" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>',['20150223_150105.jpg','20171009_191600.jpg']],
			[19, 33, [], "泰均(태균) 묘지(서울)" , [],'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.4613188520147!2d126.90961551531097!3d37.5441936798021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f2ab2724ba7%3A0x30beff38e250cb29!2z7KCI65GQ7IKwIOyInOq1kCDshLHsp4A!5e0!3m2!1sko!2skr!4v1473998910667" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',['20171130_123100.png']]
		];
	var currentGen = 0;
	var map_exist = 0;

	function Start() {
		if(navigator.platform){
			var docStyle = document.getElementById("gen_tree_content");
			if(0 > filter.indexOf(navigator.platform.toLowerCase())){
				// Mobile
			}else{
				if(docStyle) docStyle.style.width = "1050px"; else alert("test");
			}
		}
		var doc = document.getElementById("dataP1");
		currentGen = 1;
		before = 1;
		setinfo(currentGen);
	}

	function SelectGen(gen) {
		clearData();
		setinfo(gen);
		document.getElementById("contentBody").style.display = "block";
		document.getElementById("gen_tree").style.display = "none";
	}

	function backGenTree() {
		document.body.scrollTop = 0;
		clearData();
		document.getElementById("contentBody").style.display = "none";
		document.getElementById("gen_tree").style.display = "block";
	}

	function backGen() {
		var doc2 = document.getElementById("dataP2");
		for(var i=0; i<genData.length;i++) {
			for(var j=0; j<genData[i][2].length; j++) {
				if(currentGen == genData[i][2][j]) {
					var inData2 = "<button id='"+genData[i][0]+"_back' onClick='clearData();setinfo("+genData[i][0]+")'>" + genData[i][1] + "世 "+ genData[i][3] + "</button><br><br>";
					doc2.innerHTML = inData2;
					return;
				}
			}
		}
		doc2.innerHTML = "";
	}

	function setMap(id, j)
	{
		if(genData[id][j]) map_exist = 1;
		else map_exist = 0;
		document.getElementById("map_data").innerHTML = genData[id][j];
	}

	function setWifeMap(id, wife, num)
	{
		if(genData[id][wife][num]) map_exist = 1;
		else map_exist = 0;
		document.getElementById("map_data").innerHTML = genData[id][wife][num];
	}

	function visibleMap()
	{
		if(map_exist == 0) return;
		document.body.scrollTop = 0;
		document.getElementById("contentBody").style.display = "none";
		document.getElementById("map_scr").style.display = "block";
	}

	function invisibleMap() 
	{
		document.getElementById("contentBody").style.display = "block";
		document.getElementById("map_scr").style.display = "none";
	}

	function clearData() {
		document.getElementById("dataP1").innerHTML = "";
		document.getElementById("dataP3").innerHTML = "";
		document.getElementById("dataP4").innerHTML = "";
	}
	
	function makeImage(gen_id) {
		for(var i=0; i<genData.length ; i++)
		{
			if(gen_id == genData[i][0])
			{
				var im = document.getElementById("dataP1");
				var img_array = genData[i][6];
				for(var j=0;j<img_array.length;j++) {
					var img_tag = "<div style='border: 1px height:50px;' onClick='setMap("+i+",5); visibleMap();''><img src='image/" + img_array[j] + "'></div>";
					im.innerHTML += img_tag;
				}
				return;
			}
		}
	}
	
	function makeWife(gen_id) {
		for(var i=0; i<genData.length ; i++)
		{
			if(gen_id == genData[i][0])
			{
				var doc3 = document.getElementById("dataP3");
				var wife = genData[i][4];
				if(wife==null || wife.length==0) {
					return;
				}
				for(var j=0;j<wife.length;j=j+3) {
					var inData3 = "<div id='"+gen_id+"_wife'>"+genData[i][4][j]+"</div>";
					var inData3_img;
					if(genData[i][4][j+1] != null && genData[i][4][j+1].length != 0) {
						inData3_img = "<div id='"+gen_id+"_wife_img' style='border: 1px height:50px;' onClick='setWifeMap("+i+",4,"+(j+2)+"); visibleMap();'><img src='image/" + genData[i][4][j+1] + "'></div>";
						doc3.innerHTML += inData3 + inData3_img+"<br>";
					} else {
						doc3.innerHTML += inData3 + "<br>";
					}
				}
				return;
			}
		}
	}
	
	function setinfo(gen_id)
	{
		for(var i=0; i<genData.length ; i++)
		{
			if(gen_id == genData[i][0])
			{
				currentGen = gen_id;
				var doc1 = document.getElementById("dataP1");
				var inData1 = "<div id='"+gen_id+"'>" + genData[i][1] + "世 "+ genData[i][3] + "</div>";
				doc1.innerHTML = inData1;

				makeWife(gen_id);
				makeImage(gen_id);
				backGen();				

				var doc4 = document.getElementById("dataP4");
				var next = genData[i][2];
				var len = next.length;
				if(len == 0) return;
				for(var n=0; n<len; n++) {
				
					for(var m=0; m<genData.length; m++)
					{
						if(next[n] == null || genData[m] == null || genData[m][0] == null) continue;
						if(next[n] == genData[m][0])
						{
							var inData4 = "<button id='"+genData[m][0]+"_next' onClick='clearData();setinfo("+genData[m][0]+")'>" + genData[m][1] + "世 "+ genData[m][3] + "</button><br>";
							doc4.innerHTML += inData4;
							break;
						}
					}
				}
				return;
			}
		}
	}
