"use strict";
window.StickyNinjaMission.state.menu = {
	preload: function () {

		this.game.JSONData = JSON.parse(this.game.cache.getText('levels'));
		//console.log(this.game.JSONData);


	},

	create: function () {
		// you can create menu group in map editor and load it like this:
		// mt.create("menu");
		this.globalImages = new Array();
		this.game.menusMusic = this.game.add.audio('menusMusic');
		if (StickyNinjaGlobals.soundOn) {
			if (!this.game.menusMusic.isPlaying) {
				this.game.menusMusic.loopFull();
				this.game.menusMusic.volume = 0.2;
				
			}
			if (this.game.gamePlayMusic) {
				this.game.gamePlayMusic.stop();				
			}
		}
		
		this.playMenuGroup = this.game.add.group();
		this.playMenuGroup.fixedToCamera = true;
		this.right = 0;
		this.bottom = 0;

		this.yval = 0;
		this.levelIcon = "";

		this.visibleNewicon = "";
		this.visibleLevelNewicon = "";
		this.creditGroup = this.game.add.group();
		this.creditGroup.fixedToCamera = true;
		this.creditGroup.visible = false;
		this.chooseDayGroup = this.game.add.group();
		this.chooseDayGroup.visible = false;
		this.chooseDayGroup.fixedToCamera = true;
		this.chooseMissions = this.game.add.group();
		this.chooseMissions.visible = false;
		this.newIcon = "";
		this.levelCompleteResultGroup = this.game.add.group();
		this.levelCompleteResultGroup.fixedToCamera = true;
		this.levelCompleteResultGroup.visible = false;

		this.chooseMissions.fixedToCamera = true;

		this.SoundRestBtn = this.game.add.group();
		this.SoundRestBtn.fixedToCamera = true;
		this.SoundRestBtn.visible = false;

		this.levelmenuRows = 4;
		this.levelmenuRowsCols = 2;
		this.levelmenuItemWidth = 354;
		this.levelmenuItemHeight = 84;
		this.levelmenuItemSpacing = 5;

		this.currntDay = "";
		this.currntLevel = "";
		this.levelMenuState = 0;

		this.day1 = this.game.add.group();
		this.day1.fixedToCamera = true;
		this.day1.visible = false;
		this.day2 = this.game.add.group();
		this.day2.visible = false;
		this.day2.fixedToCamera = true;
		this.day3 = this.game.add.group();
		this.day3.visible = false;
		this.day3.fixedToCamera = true;
		this.day4 = this.game.add.group();
		this.day4.visible = false;
		this.day4.fixedToCamera = true;
		this.day5 = this.game.add.group();
		this.day5.visible = false;
		this.day5.fixedToCamera = true;
		this.day6 = this.game.add.group();
		this.day6.visible = false;
		this.day6.fixedToCamera = true;
		this.day7 = this.game.add.group();
		this.day7.visible = false;
		this.day7.fixedToCamera = true;
		this.day8 = this.game.add.group();
		this.day8.visible = false;
		this.day8.fixedToCamera = true;


		this.playMenu();
		this.chooseDay("direct");

		this.addSoundRestBtn();

		if(StickyNinjaGlobals.inMenuScreen){
			this.playMenuGroup.visible = false;
			this.chooseDayGroup.visible = true;
		}

	},

	playMenu: function () {

		this.menuBg = this.add.sprite(410, 300, 'titleBackdrop');
		this.menuBg.anchor.setTo(0.5, 0.5);

		this.title = this.add.sprite(415, 80, 'title');
		this.title.anchor.setTo(0.5, 0.5);
		this.title.width = 345;
		this.title.height = 124;
		this.titleImage = this.add.sprite(415, 260, 'titleImage');
		this.titleImage.anchor.setTo(0.5, 0.5);

		this.playBtn = this.game.add.button(355, 339, 'playBtn', this.menuBtnClicked, this);
		this.playBtn.width = 100;
		this.playBtn.height = 100;
		if (StickyNinjaGlobals.soundOn) {
			this.audioBtn = this.game.add.button(9, this.game.height - 82, 'audioBtn', this.menuBtnClicked, this);
		} else {
			this.audioBtn = this.game.add.button(9, this.game.height - 82, 'audioBtn1', this.menuSoundOn, this);
		}
		this.creditsBtn = this.game.add.button(this.game.width - 120, this.game.height - 70, 'creditsBtn', this.menuBtnClicked, this);
		//this.titleImage = this.add.sprite(275,165, 'titleImage');

		
		var style1 = {
			shadowColor : "#000",
			fill: "#ffffff",
			shadowOffsetX :2,
			shadowOffsetY : 2, 
			shadowBlur : 2,
			font :"700 18px BPreplayBold, Arial"
		};
		this.component_gold3 = this.game.add.sprite(92, this.game.height - 30, 'component_gold');
		this.goldCount3 = getTotalScore();//TODO need to make it dynamic
		this.goldCountText3 = this.game.add.text(this.component_gold3.x + 42, this.component_gold3.y+3.5, this.goldCount3, style1);
		

		this.playMenuGroup.add(this.menuBg);
		this.playMenuGroup.add(this.title);
		this.playMenuGroup.add(this.titleImage);
		this.playMenuGroup.add(this.playBtn);
		this.playMenuGroup.add(this.audioBtn);
		this.playMenuGroup.add(this.creditsBtn);
		this.playMenuGroup.add(this.component_gold3);
		this.playMenuGroup.add(this.goldCountText3);

	},

	creditGroupMenu: function () {
		this.creditGroupState = 1;
		this.creditBg = this.add.sprite(410, 300, 'titleBackdrop');
		this.creditBg.anchor.setTo(0.5, 0.5);

		this.codeImage = this.add.sprite(252, 220, 'codeImage');
		this.codeImage.anchor.setTo(0.5, 0.5);
		this.poweredByImage = this.add.sprite(406, 290, 'poweredBy');
		this.poweredByImage.anchor.setTo(0.5, 0.5);
		this.artbyImage = this.add.sprite(560, 220, 'artBy');
		this.artbyImage.anchor.setTo(0.5, 0.5);
		
		this.backBtn = this.game.add.button(this.game.width - 90, 20, 'backBtn',this.menuBtnClicked,this);	

		
		this.creditGroup.add(this.creditBg);
		this.creditGroup.add(this.backBtn);
		this.creditGroup.add(this.codeImage);
		this.creditGroup.add(this.poweredByImage);
		this.creditGroup.add(this.artbyImage);

	},

	addSoundRestBtn: function () {
		var style = {
			font: "18px BPreplayBold, Arial",
			fill: "#ffffff"
		};

		//var levelMissionText = this.game.add.text(300, 31, "CHOOSE A MISSION ", style);
		this.levelMissionText = this.game.add.sprite(300, 11, 'chooseamission');
		//this.levelMissionText = GameText.CreateBitmapText(this.game,"" ,"CHOOSE A MISSION ",300, 31,'strongtype_blue',22);
		var backBtn = this.game.add.button(this.game.width - 100, 30, 'backBtn',this.menuBtnClicked,this);
		if (StickyNinjaGlobals.soundOn) {
			this.missionAudioBtn = this.game.add.button(9, this.game.height - 82, 'audioBtn', this.menuBtnClicked, this);
		} else {
			this.missionAudioBtn = this.game.add.button(9, this.game.height - 82, 'audioBtn1', this.menuSoundOn, this);
		}
		this.SoundRestBtn.add(backBtn);
		this.SoundRestBtn.add(this.levelMissionText);
		this.SoundRestBtn.add(this.missionAudioBtn);


	},

	chooseDay: function (arg) {
		
		this.levelMenuState = 1;
		this.choosedayBg = this.game.add.button(410, 300, 'titleBackdrop');
		this.choosedayBg.anchor.setTo(0.5, 0.5);

		var getCompletedDay = window.getCompleted();
		var completedDay = getCompletedDay['completedDay'];
		var completedLevel = getCompletedDay['completedLevel'];
		

		var style = {
			shadowColor : "#000",
			fill: "#ffffff",
			shadowOffsetX :2,
			shadowOffsetY : 2, 
			shadowBlur : 2,
			font :"700 18px BPreplayBold, Arial"
		};


		//this.levelTitleText = this.game.add.text(300, 31, "CHOOSE A DAY ", style);
		this.levelTitleText = this.game.add.sprite(325, 41, 'chooseaday');

		//this.levelTitleText.setShadow(1, 2, 'rgba(0,0,0,0.5)', 2);

		this.backBtn = this.game.add.button(this.game.width - 90, 10, 'backBtn',this.menuBtnClicked,this);
		if (StickyNinjaGlobals.soundOn) {
			this.dayAudioBtn = this.game.add.button(9, this.game.height - 82, 'audioBtn', this.menuBtnClicked, this);
		} else {
			this.dayAudioBtn = this.game.add.button(9, this.game.height - 82, 'audioBtn1', this.menuSoundOn, this);
		}
		this.component_gold1 = this.game.add.sprite(92, this.game.height - 30, 'component_gold');
		this.goldCount1 = getTotalScore();//TODO need to make it dynamic
		this.goldCountText1 = this.game.add.text(this.component_gold1.x + 42, this.component_gold1.y+3.5, this.goldCount1, style);


		this.chooseDayGroup.add(this.choosedayBg);
		this.chooseDayGroup.add(this.levelTitleText);
		this.chooseDayGroup.add(this.backBtn);
		this.chooseDayGroup.add(this.dayAudioBtn);
		this.chooseDayGroup.add(this.component_gold1);
		this.chooseDayGroup.add(this.goldCountText1);
		if (StickyNinjaGlobals.showVersion) {
			this.versionNo = this.game.add.text(this.game.width - 80, this.game.height - 50, StickyNinjaGlobals.currentVersion, style);
			this.chooseDayGroup.add(this.versionNo);
		}

		var offsetX = 80;
		var offsetY = 90;
		var levelCount = 1;

		
		for (var j = 0; j < this.levelmenuRowsCols; j++) {
			for (var i = 0; i < this.levelmenuRows; i++) {
				var levelNumber = levelCount;

				//console.log(offsetX + j * (this.levelmenuItemWidth + this.levelmenuItemSpacing));
				this.levelThumb = this.game.add.button(offsetX + j * (this.levelmenuItemWidth + this.levelmenuItemSpacing), offsetY + i * (this.levelmenuItemHeight), "selectDayBg", this.menuBtnClicked, this);
				this.levelThumb.frame = 2;
				this.levelThumb.day = levelNumber;
				this.lockIcon = this.game.add.button(this.levelThumb.x + 44, this.levelThumb.y + 15, "menu_lock", this.menuBtnClicked, this);
				this.newIcon = this.add.sprite(this.levelThumb.x + 235, this.levelThumb.y - 15, "component_level_new");
				var x = this.newIcon.x;
				var y = this.newIcon.y;
				
			
				var style = {
					shadowColor : "#000",
					fill: "#ffffff",
					shadowOffsetX :2,
					shadowOffsetY : 1, 
					shadowBlur : 2,
					font :"normal 18px BPreplayBold, Arial"
				};
				if (levelNumber == 1 || levelNumber <= completedDay) {
					this.lockIcon.visible = false;
					this.levelThumb.daylocked = false;
					if(completedLevel!==5)
					this.newIcon.visible = true;
					else 
					this.newIcon.visible = false;	
				} else if(completedLevel ==5 && ((completedDay+1)==levelNumber)){
					this.lockIcon.visible = false;
					this.levelThumb.daylocked = false;
					this.newIcon.visible = true;	
				}else if(completedLevel<5 && (completedDay+1==levelNumber)){
					this.lockIcon.visible = false;
					this.levelThumb.daylocked = false;
					this.newIcon.visible = true;	
				}
				else {

					this.levelThumb.daylocked = true;
					this.newIcon.visible = false;
				}
				 
				if(completedDay==levelNumber){
					this.levelThumb.daylocked = false;
					this.newIcon.visible = false;
					this.lockIcon.visible = false;
				}

				this.lockIcon.width = 44;
				this.lockIcon.height = 53;

				//this.levelText = this.game.add.text(this.levelThumb.x + 24, this.levelThumb.y + 31, "DAY " + levelNumber, style);
				//this.levelnewIcon = this.add.sprite(this.levelbg.x + 245, this.levelbg.y - 15, "component_level_new");
				this.levelText = this.game.add.sprite(this.levelThumb.x + 27, this.levelThumb.y + 28, "day" + levelNumber, style);
				//this.levelText.setShadow(1, 1, 'rgba(0,0,0,0.5)', 2);
				this.chooseDayGroup.add(this.levelThumb);

				this.chooseDayGroup.add(this.levelText);
				this.chooseDayGroup.add(this.lockIcon);
				this.chooseDayGroup.add(this.newIcon);
				//console.log(this.newIcon.y+"here");
				//this.startBounceTween(this.newIcon);
				if(this.newIcon.visible){
					this.visibleNewicon = this.newIcon;
				}
				this.globalImages.push(this.newIcon);
				for (var m = 1; m <= 5; m++) {
					var aw = getAward(levelNumber, m);
					//console.log(aw);
					aw = (aw !== "") ? aw.toLowerCase() : '';
					var awardType = 'day_award_gray';
					if (aw === 'gold') {
						awardType = 'day_award_gold';
					} else if (aw === 'silver') {
						awardType = 'day_award_silver';
					} else if (aw === 'bronze') {
						awardType = 'day_award_bronze';
					}
					this.levels_star = this.add.sprite(this.levelThumb.x + 115 + (22 * m), this.levelThumb.y + 30, awardType);
					this.chooseDayGroup.add(this.levels_star);
				}

				levelCount++;
			}
		}

//this.startBounceTween();
		this.bflag = 0;
		if (this.visibleNewicon!== '') {
			this.beforeY = this.visibleNewicon.y;
			this.beforeMinusY = this.visibleNewicon.y - 10;
			this.beforePlusY = this.visibleNewicon.y;
		}	
	this.game.time.events.loop(0, this.bounceIocn, this);

	},
	bounceIocn: function () {
		if(this.visibleNewicon==''){
			return;
		}
		if (this.visibleNewicon.y < this.beforePlusY && this.bflag == 0) {		
			this.visibleNewicon.y += 0.18;
		}
		if (this.visibleNewicon.y >= this.beforePlusY || this.bflag == 1) {
			this.bflag = 1;
			this.visibleNewicon.y -= 0.18;
			if (this.visibleNewicon.y <= this.beforeMinusY) {
				this.bflag = 0;
			}
		}
	},

	chooseaMission: function () {

	
		this.chooseaMissionBg = this.game.add.button(410, 300, 'titleBackdrop');
		this.chooseaMissionBg.anchor.setTo(0.5, 0.5);


		this.chooseMissions.add(this.chooseaMissionBg);

		var levelbgWidth = 270;
		var levelbgHeight = 70;
		var xVal = 0;
		var currentDay = window.getDay();
		var getCompletedLevel = window.getCompleted();
		var completedDay = getCompletedLevel['completedDay'];
		var completedLevel = getCompletedLevel['completedLevel'];

		for (var i = 0; i < 5; i++) {

			if (i % 2 === 0) {
				xVal = 100;

			} else {
				xVal = levelbgWidth + 130;
			}


			this.levelbg = this.game.add.button(xVal, levelbgHeight * (i + 1), "level_select_bg", this.menuBtnClicked, this);
			//this.levelThumb.frame = 2;
			this.levelbg.level = i + 1;
			this.levelbg.day = currentDay
			this.levellockIcon = this.game.add.button(this.levelbg.x + 125, this.levelbg.y + 45, "menu_lock", this.menuBtnClicked, this);


			this.levelnewIcon = this.add.sprite(this.levelbg.x + 225, this.levelbg.y - 15, "component_level_new");
			this.levelbg.levelLocked = true;
			//alert("level : "+this.levelbg.level+" :completedLevel :  "+completedLevel);
			if (this.levelbg.level == 1) {
				if (this.levelbg.level > completedLevel) {
					this.levelnewIcon.visible = true;				
				} else {
					this.levelnewIcon.visible = false;
					
				}
				//this.levellockIcon.visible = false;
				this.levelbg.levelLocked = false;
			} else if (this.levelbg.level <= completedLevel + 1) {
				if (this.levelbg.level == completedLevel + 1) {
					this.levelnewIcon.visible = true;					
				} else {
					this.levelnewIcon.visible = false;					
				}
				//this.levellockIcon.visible = false;
				//this.levelbg.levelLocked = false;

			} else {
				this.levelnewIcon.visible = false;
				
			}
			//alert("this.levelbg.level : "+this.levelbg.level);
			//alert("cday : "+currentDay);
			//alert("completed day: "+completedDay);

			if(completedDay==currentDay || currentDay< completedDay){
				 this.levellockIcon.visible = false;
				 this.levelnewIcon.visible = false;
				 this.levelbg.levelLocked = false;
			}    
			if(completedDay+1 == currentDay && completedLevel==5){
				 if(this.levelbg.level==1){
					this.levelnewIcon.visible = true;
					this.levellockIcon.visible = false;	
					this.levelbg.levelLocked = false;
				 }
					 		
			}
			else if(completedDay+1 == currentDay && completedLevel<5){
				//alert("ss : completedLevel: "+completedLevel + "this.levelbg.level: "+this.levelbg.level);
				 if(completedLevel+1>=this.levelbg.level){					 
						this.levellockIcon.visible = false;	
						this.levelbg.levelLocked = false;
						if(completedLevel+1==this.levelbg.level)
						this.levelnewIcon.visible = true;				
					}else{						
						this.levellockIcon.visible = true;	
						this.levelbg.levelLocked = true;
					}
			}
			var style = {
				shadowColor : "#000",
				fill: "#ffffff",
				shadowOffsetX :2,
				shadowOffsetY : 1, 
				shadowBlur : 2,
				font :"normal 13.5px BPreplayBold, Arial"
			};


			//this.levelText = this.game.add.text(this.levelbg.x + 17, this.levelbg.y + 31, this.game.JSONData.days[this.currntDay - 1].levels[i].title, style);
			//this.levelText.setShadow(1, 2, 'rgba(0,0,0,0.5)', 2);

			this.levelText = this.game.add.sprite(this.levelbg.x + 13, this.levelbg.y + 23, this.game.JSONData.days[this.currntDay - 1].levels[i].title);
			//this.level_gray_star = this.add.sprite(this.levelbg.x + 22, this.levelbg.y + 51,'level_gray_star');

			var aw = getAward(currentDay, this.levelbg.level);
			
			aw = (aw !== "") ? aw.toLowerCase() : '';
			var awardType = 'level_gray_star';
			if (aw === 'gold') {
				awardType = 'level_award_gold';
			} else if (aw === 'silver') {
				awardType = 'level_award_silver';
			} else if (aw === 'bronze') {
				awardType = 'level_award_bronze';
			}
			this.level_gray_star = this.add.sprite(this.levelbg.x + 22, this.levelbg.y + 51, awardType);



			this.levelIcon = this.add.sprite(this.levelbg.x + 187, this.levelbg.y + 22, 'level_icon');
			this.levelIcon.frame = this.game.JSONData.days[this.currntDay - 1].levels[i].iconframe;
			var style1 = {
				shadowColor : "#000",
				fill: "#ffffff",
				shadowOffsetX :2,
				shadowOffsetY : 1, 
				shadowBlur : 2,
				font :"700 18px BPreplayBold, Arial"
			};
			
			this.component_gold2 = this.game.add.sprite(92, this.game.height - 30, 'component_gold');
			this.goldCount2 = getTotalScore();//TODO need to make it dynamic
			this.goldCountText2 = this.game.add.text(this.component_gold2.x + 42, this.component_gold2.y+3.5, this.goldCount2, style1);
			if(this.levelnewIcon.visible){
				this.visibleLevelNewicon = this.levelnewIcon;
			}
			this.chooseMissions.add(this.levelbg);
			this.chooseMissions.add(this.levelText);
			this.chooseMissions.add(this.level_gray_star);
			this.chooseMissions.add(this.levelIcon);
			this.chooseMissions.add(this.levellockIcon);
			this.chooseMissions.add(this.levelnewIcon);
			this.chooseMissions.add(this.component_gold2);
			this.chooseMissions.add(this.goldCountText2);
		}
		//this.day1

		this.bflag1 = 0;
		if(this.visibleLevelNewicon!==''){
			this.beforeY1 = this.visibleLevelNewicon.y;	
			this.beforeMinusY1 = this.visibleLevelNewicon.y-10;
			this.beforePlusY1 = this.visibleLevelNewicon.y;
		}
	
	
	this.game.time.events.loop(0, this.bounceIocn1, this);

	},
	bounceIocn1: function () {
		if(this.visibleLevelNewicon==''){
			return false;
		}		
		if (this.visibleLevelNewicon.y < this.beforePlusY1 && this.bflag1 == 0) {		
			this.visibleLevelNewicon.y += 0.35;
		}
		if (this.visibleLevelNewicon.y >= this.beforePlusY1 || this.bflag1 == 1) {
			this.bflag1 = 1;
			this.visibleLevelNewicon.y -= 0.35;
			if (this.visibleLevelNewicon.y <= this.beforeMinusY1) {
				this.bflag1 = 0;
			}
		}
	},

	menuBtnClicked: function (button) {
		//alert(button.key);
		this.game.buttonClick = this.game.add.audio('sfxButtonClick');
		if (StickyNinjaGlobals.soundOn) {
			this.game.buttonClick.play();
			this.game.buttonClick.volume = 0.5;
		}
		if (button.key && button.key == 'playBtn') {

			if (this.levelCompleteResultGroup.visible){
				//this.levelCompleteResultGroup.visible = false;
				this.game.state.start("menu");
				StickyNinjaGlobals.inMenuScreen = true;
			}
			this.playMenuGroup.visible = false;
			this.chooseDay();
			this.chooseDayGroup.visible = true;


		} else if (button.key && button.key == 'creditsBtn') {
			this.playMenuGroup.visible = false;
			this.creditGroupMenu();
			this.creditGroup.visible = true;
		
		}else if (button.key && button.key == 'backBtn') {
			
			if (this.levelMenuState == 1) {

				this.playMenuGroup.visible = true;
				this.chooseDayGroup.visible = false;
				this.SoundRestBtn.visible = false;
				this.levelMenuState = 0;
			} else if (this.levelMenuState == 2) {
				this.chooseDayGroup.visible = true;
				this.chooseMissions.visible = false;
				this.SoundRestBtn.visible = false;
				this.levelMenuState = 1;
			}
			if(this.creditGroupState == 1){
				this.playMenuGroup.visible = true;
				this.creditGroup.visible = false;
			}

		}
		else if (button.key && button.key == 'selectDayBg') {
			if(button.daylocked){
				//return false;
			}
			this.levelMenuState = 2;
			this.chooseDayGroup.visible = false;
			this.chooseMissions.visible = true;
			this.SoundRestBtn.visible = true;		 
			this.currntDay = button.day;
			window.updateDay(button.day);
			this.chooseaMission();

		}

		else if (button.key && button.key == 'level_select_bg') {	
			StickyNinjaGlobals.menuOn = false;
			if(button.levelLocked){
				//return false;
			}
			this.levelMenuState = 3;
			this.chooseDayGroup.visible = false;
			this.chooseMissions.visible = false;
			this.currntLevel = button.level;
			window.updateLevel(button.level);
			this.game.state.start("play");
		}
		else if (button.key && button.key == 'restartButton') {
			this.game.state.start("play");
		}
		else if (button.key && button.key == 'audioBtn') {
			//console.log("menu audioBtn clicked");
			this.audioBtn1 = this.game.add.button(9, this.game.height - 82, 'audioBtn1', this.menuSoundOn, this);
			this.missionAudioBtn1 = this.game.add.button(9, this.game.height - 82, 'audioBtn1', this.menuSoundOn, this);
			this.dayAudioBtn1 = this.game.add.button(9, this.game.height - 82, 'audioBtn1', this.menuSoundOn, this);
			this.levelAudioBtn1 = this.game.add.button(9, this.game.height - 82, 'audioBtn1', this.menuSoundOn, this);
			StickyNinjaGlobals.soundOn = false;
			this.game.sound.pauseAll();
			this.playMenuGroup.add(this.audioBtn1);
			this.chooseDayGroup.add(this.dayAudioBtn1);
			this.levelCompleteResultGroup.add(this.levelAudioBtn1);
			this.SoundRestBtn.add(this.missionAudioBtn1);
		}

	},
	menuSoundOn: function (button) {
		//console.log("in menu sound on function");
		this.audioBtn = this.game.add.button(9, this.game.height - 82, 'audioBtn', this.menuBtnClicked, this);
		this.missionAudioBtn = this.game.add.button(9, this.game.height - 82, 'audioBtn', this.menuBtnClicked, this);
		this.dayAudioBtn = this.game.add.button(9, this.game.height - 82, 'audioBtn', this.menuBtnClicked, this);
		this.levelAudioBtn = this.game.add.button(9, this.game.height - 82, 'audioBtn', this.menuBtnClicked, this);
		StickyNinjaGlobals.soundOn = true;
		this.game.sound.resumeAll();
		if (this.game.gamePlayMusic) {
			this.game.gamePlayMusic.stop();
		}
		if (!this.game.menusMusic.isPlaying) {
			this.game.menusMusic.loopFull();
			this.game.menusMusic.volume = 0.2;
		}
		this.playMenuGroup.add(this.audioBtn);
		this.chooseDayGroup.add(this.dayAudioBtn);
		this.levelCompleteResultGroup.add(this.levelAudioBtn);
		this.SoundRestBtn.add(this.missionAudioBtn);
	},

	levelCompleteResult: function (status) {

		this.levelCompleteResultGroup.visible = true;
		if (StickyNinjaGlobals.soundOn) {
			if (this.game.menusMusic.isPlaying) {
				this.game.menusMusic.stop();
				//this.game.menusMusic.loopFull();
				//this.game.menusMusic.volume = 0.2;
				
			}
		}
		var Currentday = window.getDay();
		var Currentlevel = window.getLevel();

		var currentJump = window.getJumps(Currentday, Currentlevel);
		var bestJump = window.getBestJumps(Currentday, Currentlevel);


		this.resultBgScreen = this.add.sprite(410, 300, 'titleBackdrop');
		this.resultBgScreen.anchor.setTo(0.5, 0.5);

		this.game.time.events.loop(0, this.backgroundrotate, this);

		this.resultBgScreenBg = this.add.sprite(145, 90, 'levelCompleteResultBg');

		this.levelCompleteResultGroup.add(this.resultBgScreen);
		this.levelCompleteResultGroup.add(this.resultBgScreenBg);

		//this.resultBgScreenBg.angle = -360;

		//this.game.add.tween(this.resultBgScreenBg).to( { angle: 0 }, 2000, Phaser.Easing.Linear.None, true);
		//this.game.add.tween(this.resultBgScreenBg.scale).to( { x: 145, y: 90 }, 2000, Phaser.Easing.Linear.None, true);

		var style = {
			
			shadowColor : "#000",
			fill: "#ffffff",
			shadowOffsetX :2,
			shadowOffsetY : 2, 
			shadowBlur : 2,
			font :"700 18px BPreplayBold, Arial"	
	
		};

		if (status === 'levelFailedTimer') {

			var titleTxt = this.game.add.sprite(this.resultBgScreenBg.x + 170, this.resultBgScreenBg.y + 27, 'missionfailed');
			//var titleTxt = this.game.add.text(this.resultBgScreenBg.x + 162, this.resultBgScreenBg.y + 32, "MISSION FAILED!", style);
			//titleTxt.setShadow(1, 2, 'rgba(0,0,0,0.5)', 2);
			
			var ranout = this.game.add.sprite(this.resultBgScreenBg.x + 131, this.resultBgScreenBg.y + 100, 'outoftime');
			//var ranout = this.game.add.text(this.resultBgScreenBg.x + 145, this.resultBgScreenBg.y + 110, "YOU RAN OUT OF TIME", style);
			//ranout.setShadow(1, 2, 'rgba(0,0,0,0.5)', 2);

			var tryagain = this.game.add.sprite(this.resultBgScreenBg.x + 200, this.resultBgScreenBg.y + 254, "tryagain");
			//var tryagain = this.game.add.text(this.resultBgScreenBg.x + 212, this.resultBgScreenBg.y + 262, "Try Again", style);
			//tryagain.setShadow(1, 2, 'rgba(0,0,0,0.5)', 2);

			this.levelCompleteResultGroup.add(titleTxt);
			this.levelCompleteResultGroup.add(ranout);
			this.levelCompleteResultGroup.add(tryagain);


		} else if (status === 'levelComplete') {

			var titleTxt = this.game.add.text(this.resultBgScreenBg.x + 162, this.resultBgScreenBg.y + 32, "MISSION COMPLETE!", style);
			//titleTxt.setShadow(1, 2, 'rgba(0,0,0,0.5)', 2);

			var jumpTxt = this.game.add.text(this.resultBgScreenBg.x + 186, this.resultBgScreenBg.y + 78, "Level Jumps :" + currentJump, style);
			var bestjumpTxt = this.game.add.text(this.resultBgScreenBg.x + 160, this.resultBgScreenBg.y + 111, "Best Level Jumps :" + bestJump, style);
			var awardsArray = StickyNinjaGlobals.awardScore[Currentday][Currentlevel];
			var goldCont = parseInt((awardsArray[0].split(","))[0]);
			var silverCOnt = parseInt((awardsArray[0].split(","))[1]);
			var awardReceived = "";

			if (bestJump <= goldCont) {
				awardReceived = "Gold";
			} else if (bestJump <= silverCOnt) {
				awardReceived = "Silver";
			} else {
				awardReceived = "Bronze";
			}

			updateAward(Currentday, Currentlevel, awardReceived);

			var awards = this.game.add.text(this.resultBgScreenBg.x + 160, this.resultBgScreenBg.y + 171, "Jump Award : " + awardReceived, style);
			var awardstype = this.game.add.text(this.resultBgScreenBg.x + 124, this.resultBgScreenBg.y + 201, "(Gold=" + goldCont + ", Silver=" + silverCOnt + " or fewer)", style);
			var cashEarned = this.game.add.text(this.resultBgScreenBg.x + 137, this.resultBgScreenBg.y + 264, "Level Cash Earned:$1000", style);


			this.levelCompleteResultGroup.add(titleTxt);
			this.levelCompleteResultGroup.add(jumpTxt);
			this.levelCompleteResultGroup.add(bestjumpTxt);
			this.levelCompleteResultGroup.add(awards);
			this.levelCompleteResultGroup.add(awardstype);
			this.levelCompleteResultGroup.add(cashEarned);
		} else if (status === 'levelFailedEnemyKilled') {
			
			var titleTxt = this.game.add.sprite(this.resultBgScreenBg.x + 170, this.resultBgScreenBg.y + 27, 'missionfailed');
			//var titleTxt = this.game.add.text(this.resultBgScreenBg.x + 162, this.resultBgScreenBg.y + 32, "MISSION FAILED!", style);
			//titleTxt.setShadow(1, 2, 'rgba(0,0,0,0.5)', 2);
			
			var ranout = this.game.add.sprite(this.resultBgScreenBg.x + 131, this.resultBgScreenBg.y + 100, 'killedenemy');
			//var ranout = this.game.add.text(this.resultBgScreenBg.x + 145, this.resultBgScreenBg.y + 110, "YOU KILLED AN ENEMY", style);
			//ranout.setShadow(1, 2, 'rgba(0,0,0,0.5)', 2);

			var tryagain = this.game.add.sprite(this.resultBgScreenBg.x + 200, this.resultBgScreenBg.y + 254, "tryagain");
			//var tryagain = this.game.add.text(this.resultBgScreenBg.x + 212, this.resultBgScreenBg.y + 262, "Try Again", style);
			//tryagain.setShadow(1, 2, 'rgba(0,0,0,0.5)', 2);

			this.levelCompleteResultGroup.add(titleTxt);
			this.levelCompleteResultGroup.add(ranout);
			this.levelCompleteResultGroup.add(tryagain);
		} else if (status === 'levelFailedLife') {
			/*if (StickyNinjaGlobals.soundOn) {
				if (this.game.gamePlayMusic) {
					this.game.sfxPlayerDie.stop();
					//gameGlobal.sfxPlayerDie.play();
				}		
			}*/
			var titleTxt = this.game.add.sprite(this.resultBgScreenBg.x + 170, this.resultBgScreenBg.y + 27, 'missionfailed');
			//var titleTxt = this.game.add.text(this.resultBgScreenBg.x + 162, this.resultBgScreenBg.y + 32, "MISSION FAILED!", style);
			//titleTxt.setShadow(1, 2, 'rgba(0,0,0,0.5)', 2);
		
			var ranout = this.game.add.sprite(this.resultBgScreenBg.x + 131, this.resultBgScreenBg.y + 100, 'outoflives');
			//var ranout = this.game.add.text(this.resultBgScreenBg.x + 145, this.resultBgScreenBg.y + 110, "YOU RAN OUT OF LIVES", style);
			//ranout.setShadow(1, 2, 'rgba(0,0,0,0.5)', 2);

			var tryagain = this.game.add.sprite(this.resultBgScreenBg.x + 200, this.resultBgScreenBg.y + 254, "tryagain");
			//var tryagain = this.game.add.text(this.resultBgScreenBg.x + 212, this.resultBgScreenBg.y + 262, "Try Again", style);
			//tryagain.setShadow(1, 2, 'rgba(0,0,0,0.5)', 2);

			this.levelCompleteResultGroup.add(titleTxt);
			this.levelCompleteResultGroup.add(ranout);
			this.levelCompleteResultGroup.add(tryagain);

		}

		this.restartButton = this.game.add.button(this.game.width - 225, this.game.height - 105, 'restartButton', this.menuBtnClicked, this);
		this.playBtn = this.game.add.button(this.game.width - 115, this.game.height - 105, 'playBtn', this.menuBtnClicked, this);

		if (StickyNinjaGlobals.soundOn) {
			this.levelAudioBtn = this.game.add.button(9, this.game.height - 82, 'audioBtn', this.menuBtnClicked, this);
		} else {
			this.levelAudioBtn = this.game.add.button(9, this.game.height - 82, 'audioBtn1', this.menuSoundOn, this);
		}
		this.component_gold = this.game.add.sprite(92, this.game.height - 30, 'component_gold');
		this.goldCount = getTotalScore();//TODO need to make it dynamic
		this.goldCountText = this.game.add.text(this.component_gold.x + 42, this.component_gold.y + 3.5, this.goldCount, style);

		this.levelCompleteResultGroup.add(this.levelAudioBtn);
		this.levelCompleteResultGroup.add(this.component_gold);
		this.levelCompleteResultGroup.add(this.goldCountText);

		this.levelCompleteResultGroup.add(this.restartButton);
		this.levelCompleteResultGroup.add(this.playBtn);






	},

	backgroundrotate: function () {
		this.resultBgScreen.angle += 0.1;
	},

	update: function () {
		this.menuBg.angle += 0.1;
		this.choosedayBg.angle += 0.1;
		/*for (var index=0;index<this.globalImages.length;index++) {
			this.startBounceTween(this.globalImages[index]);
		}*/
		if (this.chooseaMissionBg !== undefined){
			this.chooseaMissionBg.angle += 0.1;
		}
		
		if (this.title.angle < 2 && this.right == 0) {
			this.title.angle += 0.07;
		}

		if (this.title.angle >= 2 || this.right == 1) {
			this.right = 1;
			this.title.angle -= 0.07;
			if (this.title.angle <= -2) {
				this.right = 0;
			}
		}

		if (this.titleImage.angle < 2 && this.bottom == 0) {
			this.titleImage.angle += 0.07;
		}

		if (this.titleImage.angle >= 2 || this.bottom == 1) {
			this.bottom = 1;
			this.titleImage.angle -= 0.07;
			if (this.titleImage.angle <= -2) {
				this.bottom = 0;
			}
		}

	},
	openLevelMenu: function () {
		this.create();
		this.playMenuGroup.visible = false;
		this.chooseDay();
		this.chooseDayGroup.visible = true;
		stn.shutdown();
	},
	openResultScreen: function (status) {
		stn.shutdown();
		this.create();
		this.playMenuGroup.visible = false;
		this.chooseDayGroup.visible = false;
		this.levelCompleteResult(status);

		//alert("openResultScreen");
	}
};
