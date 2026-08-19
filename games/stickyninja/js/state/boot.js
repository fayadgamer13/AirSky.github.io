"use strict";
window.StickyNinjaMission.state.boot = {
	preload: function(){
		// set world size
		this.game.physics.startSystem(Phaser.Physics.BOX2D);
        this.game.physics.box2d.gravity.y = 500;
        this.game.physics.box2d.friction = 0.8;
		this.game.world.setBounds(0, 0, mt.data.map.worldWidth, mt.data.map.worldHeight);
		
		this.enableScaling();
		
		//init mt helper
		mt.init(this.game);
		
		//set background color - true (set also to document.body)
		mt.setBackgroundColor(true);
		
		this.load.image('loading', "assets/Loading/loading.png");
		
		// load assets for the Loading group ( if exists )
		mt.loadGroup("Loading");
	},
	create: function(){
		// add all game states
		for(var stateName in window.StickyNinjaMission.state){
			this.game.state.add(stateName, window.StickyNinjaMission.state[stateName]);
		}
		var gameWidth = 800;
		var gameHeight = 512;
		var gameObject = this;
		var deviceWidth;
		var deviceHeight;
        this.game.stage.backgroundColor = '#000000';
        this.game.stage.disableVisibilityChange = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		if (!this.game.device.desktop) {	
			console.log("device");
			deviceWidth = window.innerWidth;
			deviceHeight = window.innerHeight;
			if(deviceHeight>deviceWidth){
				document.getElementById('orientation').style.width = deviceWidth + "px";
                document.getElementById('orientation').style.height = deviceHeight + "px";				
			}		
		}
        if (this.game.device.desktop) {
            //	If you have any desktop specific settings, they can go in here
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.minWidth = gameWidth / 2;
            this.game.scale.minHeight = gameHeight / 2;
            this.game.scale.maxWidth = gameWidth;
            this.game.scale.maxHeight = gameHeight;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = false;
        } else {
            //	Same goes for mobile settings.
            //	In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"

            //scaling options
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.minWidth = gameWidth / 2;
            this.game.scale.minHeight = gameHeight / 2;
            this.game.scale.maxWidth = 2048;
            // IPad change
            var gameObj = this;
            //You can change this to gameWidth*2.5 if needed      
            //this.scale.maxHeight = 1228;

            if (gameObj.game.device.iPad === true) {
                this.game.scale.maxHeight = 1228;
            } else {
                this.game.scale.maxHeight = 736;
            }
            //Make sure these values are proportional to the gameWidth and gameHeight    
            //this.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            //var gameObj = this;

            this.game.scale.forceOrientation(true, false);
            this.game.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.game.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);

            this.game.scale.refresh();
            if (this.game.scale.isLandscape) {
                this.leaveIncorrectOrientation();
            } else {
                this.enterIncorrectOrientation();
            }
            if (this.game.scale.isLandscape && (gameObj.game.device.iPhone === true || gameObj.game.device.iPad === true)) {
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            }
            window.addEventListener("orientationchange", function() {
				
                if (screen.width < screen.height) {
                    gameObj.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
					//document.getElementById('orientation').style.width = document.width + "px";
					//document.getElementById('orientation').style.height = document.height + "px";
					console.log(document.documentElement.clientHeight);
					document.getElementById('orientation').style.width = "100%";
					document.getElementById('orientation').style.height = "100%";
					
                    gameObj.enterIncorrectOrientation();
					
                } else {
                    gameObj.leaveIncorrectOrientation();
					
			
                    gameObj.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                }
                if (gameObj.game.device.iPhone === true || gameObj.game.device.iPad === true) {
                    if (window.matchMedia("(orientation: portrait)").matches) {
                        // you're in PORTRAIT mode
                        gameObj.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                        gameObj.enterIncorrectOrientation();
                     
					
                    }

                    if (window.matchMedia("(orientation: landscape)").matches) {
                        // you're in LANDSCAPE mode
                        gameObj.leaveIncorrectOrientation();
                        gameObj.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
						
                    }
                }
            });
        }
		// goto load state
		this.game.state.start("load");
	},
	enableScaling: function(){
		var game = this.game;
		game.scale.parentIsWindow = (game.canvas.parentNode == document.body);
		game.scale.scaleMode = Phaser.ScaleManager[mt.data.map.scaleMode];
	},
	 enterIncorrectOrientation: function() {
        this.game.scale.refresh();
		
         document.getElementById('orientation').style.display = 'block';
			console.log("leave incorrect");
			
    },
    leaveIncorrectOrientation: function() {
		
			document.getElementById('orientation').style.display = 'none';
		console.log("incorrect");
    }
};