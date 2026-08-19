"use strict";
window.StickyNinjaMission.state.play = {
	
	preload: function(){
		console.log("loading play state");
		
		var day = window.getDay();
		var level = window.getLevel(); 
		
		console.log(level,"::",day);
		//var day = 1;
		//var level = 1; 
		var jsonName = "day"+day+"level"+level+".json";	
		
		//Destroying the objects created during game play
			for(var index=0;index<StickyNinjaGlobals.garbageToCollect.length;index++) {
				var objToDel = StickyNinjaGlobals.garbageToCollect[index];
				if(objToDel) {
					if(objToDel.sprite){
						objToDel.sprite.destroy();
					}
					objToDel.destroy();
				}
			}
			for(var index=0;index<StickyNinjaGlobals.objectsToDestroy.length;index++) {
				var objToDel = StickyNinjaGlobals.objectsToDestroy[index];
				if(objToDel) {
					if(objToDel.sprite){
						objToDel.sprite.destroy();
					}
					objToDel.destroy();
				}
			}
			StickyNinjaGlobals.garbageToCollect=[];
			StickyNinjaGlobals.objectsToDestroy=[];
			StickyNinjaGlobals.trapdoor =[];
			StickyNinjaGlobals.shurikenEnemies = [];
			StickyNinjaGlobals.enemieslist=[];
			StickyNinjaGlobals.Subwaycar = [];
			
		console.log("jsonName: "+jsonName);
		this.game.load.reset();
		this.game.load.removeAll();
		this.game.load.tilemap('map', 'js/leveldata/'+jsonName, null, Phaser.Tilemap.TILED_JSON);
		this.game.load.physics('physicsData', 'assets/physics.json');
		var path = "assets/background/day"+day+"/background"+level+".png";
		
		
		this.game.load.image('backgroundImage1', path);
		//this.game.load.tilemap('map', 'js/StickyNinjalevel1objectsjson.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('dragandrelease', 'assets/Help10003.png');
		this.game.load.image('guide1', 'assets/guideimages/TexturePage_9.png');
		this.game.load.image('guide2', 'assets/guideimages/TexturePage_22.png');
		this.game.load.image('guide3', 'assets/guideimages/TexturePage_18.png');
		this.game.load.image('guide4', 'assets/guideimages/TexturePage_12.png');
		this.game.load.image('guide5', 'assets/guideimages/TexturePage_11.png');
		this.game.load.image('guide6', 'assets/guideimages/TexturePage_21.png');
		this.game.load.image('guide7', 'assets/guideimages/TexturePage_15.png'); 
		
		this.game.load.image('redcircle', 'assets/Help10001.png');
		this.game.load.image('clickandhold', 'assets/Help10002.png');
		this.game.load.image('circleselected', 'assets/gfx_ui_cursor_circle_selected.png');
		this.game.load.image('Component', 'assets/Component_Hud_Mission_BG.png');
		this.game.load.image('combo', 'assets/combo.png');
		this.game.load.image('dontdefeat', 'assets/dont-defeat.png');
		this.game.load.image('getalltreasure', 'assets/getalll-treasure.png');
		this.game.load.image('score', 'assets/score.png');
		this.game.load.image('timer30s', 'assets/timer-30s.png');
		
		this.game.load.image('woodslice1', 'assets/slices/wood/fragment_wood0001.png');
		this.game.load.image('woodslice2', 'assets/slices/wood/fragment_wood0002.png');
		this.game.load.image('woodslice3', 'assets/slices/wood/fragment_wood0003.png');
		this.game.load.image('woodslice4', 'assets/slices/wood/fragment_wood0004.png');
		this.game.load.image('woodslice5', 'assets/slices/wood/fragment_wood0005.png');
		this.game.load.image('woodslice6', 'assets/slices/wood/fragment_wood0006.png');
		
		
		this.game.load.image('arcadeslice1', 'assets/slices/arcade/fragment_dark0001.png');
		this.game.load.image('arcadeslice2', 'assets/slices/arcade/fragment_dark0002.png');
		this.game.load.image('arcadeslice3', 'assets/slices/arcade/fragment_dark0003.png');
		this.game.load.image('arcadeslice4', 'assets/slices/arcade/fragment_dark0004.png');
		this.game.load.image('arcadeslice5', 'assets/slices/arcade/fragment_dark0005.png');
		this.game.load.image('arcadeslice6', 'assets/slices/arcade/fragment_dark0006.png');
		
		this.game.load.image('glassslice1', 'assets/slices/glass/fragment_glass0001.png');
		this.game.load.image('glassslice2', 'assets/slices/glass/fragment_glass0002.png');
		this.game.load.image('glassslice3', 'assets/slices/glass/fragment_glass0003.png');
		this.game.load.image('glassslice4', 'assets/slices/glass/fragment_glass0004.png');
		this.game.load.image('glassslice5', 'assets/slices/glass/fragment_glass0005.png');
		this.game.load.image('glassslice6', 'assets/slices/glass/fragment_glass0006.png');
		
	},
	
	create: function(){
		console.log("starting play state");
		this.game.camera.x = (this.game.width * -0.5);
    	this.game.camera.y = (this.game.height * -0.5);
		this.game.world.setBounds(0,0, 100000, 100000);
		this.map = this.game.add.tilemap("map");
		StickyNinjaGlobals.tileMapJSON = this.map;
		console.log(StickyNinjaGlobals.tileMapJSON);
		//this.game.scale.setGameSize(window.innerWidth, window.innerHeight); 
		
		//this.game.load.image('backgroundImage', "assets/background/background1.png");

		/*var day = window.getDay();
		var level = window.getLevel(); 
		var path = "assets/background/"+day+"/background"+level+".png";
		
		
		this.game.load.image('backgroundImage1', path);*/
		this.backgroundImage = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'backgroundImage1');
		this.backgroundImage.tileScale.set(1);
		this.backgroundImage.fixedToCamera = true;
		

		//Loading TexturePage images dynamically based on json
		if(this.map.tilesets && this.map.tilesets.length > 0){
			for (var i = 0, len = this.map.tilesets.length; i < len; i++) {
				var texureName = this.map.tilesets[i].name;		
				this.map.addTilesetImage(texureName,"/"+texureName+".png");
			}
		}
		
		this.foreground = this.map.createLayer('foreground');
		
		this.cursors = this.game.input.keyboard.createCursorKeys();
		
		// Car and wheels need to be cleared before each level starts
		StickyNinjaGlobals.car = "";
		StickyNinjaGlobals.wheels=[];
        StickyNinjaGlobals.doors = [];		
		if(typeof this.map.objects.staticobjects !== undefined);
		this.staticobjects = stn.createStatic(this.game, this.map);
		
		if(typeof this.map.objects.enemyobjects !== undefined);
		this.Enemies = stn.createEnemies(this.game, this.map);	
		
		if(typeof this.map.objects.breakableobjects!== undefined);		
		this.Breakables = stn.createBreakables(this.game, this.map);
		
		if(typeof this.map.objects.interactingobjects !== undefined);		
		this.interctingobjects = stn.createInteraction(this.game, this.map);
		
		if(typeof this.map.objects.treasureobjects !== undefined){
		this.treasureobjects = stn.createTreasure(this.game, this.map);
			console.log(this.map.objects.treasureobjects);
		}
		//this.platform = this.map.createLayer('platform');		

		this.lowerPlatform = stn.createGround(this.game, this.map, "lowerground");
		this.upperPlatform = stn.createGround(this.game, this.map, "upperground");
		
		this.upperPlatform1 = stn.createGround(this.game, this.map, "upperground1");
		this.upperPlatform2 = stn.createGround(this.game, this.map, "upperground2");
                
		this.redWall = stn.createredWall(this.game, this.map, "redwall");
		this.redWall1 = stn.createredWall1(this.game, this.map, "redwall1");
		this.redWall2 = stn.createredWall2(this.game, this.map, "redwall2");
		
		
		this.water = stn.createWater(this.game, this.map, "water");
		this.yellowWall = stn.createYellowWall(this.game, this.map, "yellowwall");
		this.yellowWall2 = stn.createYellowWall2(this.game, this.map, "yellowwall2");
		this.yellowWall3 = stn.createYellowWall3(this.game, this.map, "yellowwall3");
		this.yellowWall4 = stn.createYellowWall4(this.game, this.map, "yellowwall4");
		
		this.redwall = stn.createRedWall(this.game, this.map, "redwall");
		this.redwall1 = stn.createRedWall1(this.game, this.map, "redwall");
		
		this.slider1 = stn.createSlider1(this.game, this.map, "slider");
		this.slider2 = stn.createSlider2(this.game, this.map, "slider");
		this.slider21 = stn.createSliderWallLayer2(this.game, this.map, "slider");
		this.slider3 = stn.createSlider3(this.game, this.map, "slider");
		this.slider4 = stn.createSlider4(this.game, this.map, "slider");
		this.slider5 = stn.createSlider5(this.game, this.map, "slider");
		this.slider6 = stn.createSlider6(this.game, this.map, "slider");
		this.slider7 = stn.createSlider7(this.game, this.map, "slider");
		this.slider8 = stn.createSlider8(this.game, this.map, "slider");
		
		this.platform = this.map.createLayer('platform');
        this.game.platform = this.platform; 
		this.platform.x = 215;

		//this.box = this.game.add.sprite(1000,1000,"/launcher.png");
		var day = window.getDay();
		var level = window.getLevel(); 
		if(day==1 && level==1) {
			this.box = new HumanPlayer(485, 700, this.game);
		} else if(day==1 && level==2) {
			this.box = new HumanPlayer(520, 950, this.game);
		} else if(day==1 && level==3) {
			this.box = new HumanPlayer(790, 1170, this.game);
		} else if(day==1 && level==4) {
			this.box = new HumanPlayer(505, 780, this.game);
        } else if(day==1 && level==5) {
			this.box = new HumanPlayer(835, 1150, this.game);
		} else if(day==2 && level==1) {
			this.box = new HumanPlayer(740, 1150, this.game);
		} else if(day==2 && level==2) {
			this.box = new HumanPlayer(900, 1250, this.game);
		} else if(day==2 && level==3) {
			this.box = new HumanPlayer(790, 1170, this.game);
		} else if(day==2 && level==4) {
            this.box = new HumanPlayer(885, 1280, this.game);
        } else if(day==2 && level==5) {
			this.box = new HumanPlayer(760, 1200, this.game);
		} else if(day==3 && level==1) {
			this.box = new HumanPlayer(900, 1250, this.game);
		} else if(day==3 && level==2) {
            this.box = new HumanPlayer(495, 1050, this.game);
        } else if(day==3 && level==3) {
            this.box = new HumanPlayer(513, 950, this.game);
        } else if(day==3 && level==4) {
            this.box = new HumanPlayer(1680, 2500, this.game);
        } else if(day==3 && level==5) {
            this.box = new HumanPlayer(740, 1280, this.game);
        } else if(day==4 && level==1) {
			this.box = new HumanPlayer(505, 650, this.game);
        } else if(day==4 && level==2) {
			this.box = new HumanPlayer(440, 900, this.game);
		} else if(day==4 && level==3) {
			this.box = new HumanPlayer(495, 1050, this.game);
		} else if(day==4 && level==4) {
			this.box = new HumanPlayer(1430, 1500, this.game);
        } else if(day==4 && level==5) {
			this.box = new HumanPlayer(760, 1200, this.game);
        } else if(day==5 && level==1) {
			this.box = new HumanPlayer(835, 1150, this.game);
		} else if(day==5 && level==2) {
			this.box = new HumanPlayer(685, 1950, this.game);
		} else if(day==5 && level==3) {
			this.box = new HumanPlayer(450, 1200, this.game);
		} else if(day==5 && level==4) {
			this.box = new HumanPlayer(900, 1250, this.game);
		} else if(day==5 && level==5) {
			this.box = new HumanPlayer(685, 1950, this.game);
		} else if(day==6 && level==1) {
			this.box = new HumanPlayer(760, 600, this.game);
		} else if(day==6 && level==2) {
			this.box = new HumanPlayer(760, 600, this.game);
		} else if(day==6 && level==3) {
			this.box = new HumanPlayer(760, 600, this.game);
		} else if(day==6 && level==4) {
			this.box = new HumanPlayer(560, 900, this.game);
		} else if(day==6 && level==5) {
			this.box = new HumanPlayer(640, 850, this.game);
		} else if(day==7 && level==1) {
			this.box = new HumanPlayer(685, 1950, this.game);
		} else if(day==7 && level==2) {
			this.box = new HumanPlayer(661, 1950, this.game);
		} else if(day==7 && level==3) {
			this.box = new HumanPlayer(690, 7280, this.game);
		} else if(day==7 && level==4) {
			this.box = new HumanPlayer(560, 900, this.game);
		} else if(day==7 && level==5) {
			this.box = new HumanPlayer(2500, 2650, this.game);
		} else if(day==8 && level==1) {
			this.box = new HumanPlayer(2450, 850, this.game);
		}

		
		this.box.create();
		//this.platform = this.map.createLayer('platform');
		//this.platform.x = 215;
	//	this.platform.y = ;
		this.box.inputEnabled = true;
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.game.camera.follow(this.box.getSprite());
		//this.game.camera.follow(this.box);
		
		stn.gameMenu(this.game); 
	},
	
	update: function(){
		this.box.update();
		//this.backgroundImage.x=this.game.camera.x*0.1; 
		//this.backgroundImage.y=this.game.camera.y*0.1; 
		/*if (this.cursors.up.isDown) this.box.y -= 4;
        if (this.cursors.down.isDown) this.box.y += 4;
        if (this.cursors.right.isDown) this.box.x += 4;
        if (this.cursors.left.isDown) this.box.x -= 4;*/
		
		
	},
	render: function(){
		   // this.game.physics.box2d.debugDraw.shapes = true;
        this.game.physics.box2d.debugDraw.joints = true; 
        //this.game.physics.box2d.debugDraw.aabbs = true; 
        //this.game.physics.box2d.debugDraw.pairs = true;
        //this.game.physics.box2d.debugDraw.centerOfMass = true;
		if (StickyNinjaGlobals.enabledebugMode) {
			this.game.debug.box2dWorld();
		}
    
	}
};