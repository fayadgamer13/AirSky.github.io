window.stn = {
	findPlatform: function (map, layer) {
		var result = new Array();
		if (map.objects[layer]) {
			map.objects[layer].forEach(function (element) {
				//console.log(element);
				if (element.type === "platform") {
					//Phaser uses top left, Tiled bottom left so we have to adjust
					//also keep in mind that the cup images are a bit smaller than the tile which is 16x16
					//so they might not be placed in the exact position as in Tiled
					// element.y -= map.tileHeight;
					result.push(element);
				}
			});
		}
		return result;
	},

	createEnemies: function (game, map) {
		var result = this.findObjectsByType("enemyobject", map, 'enemyobjects');
		result.forEach(function (element) {
			this.findEnemy(element, game, true);
		}, this);

	},
	createBreakables: function (game, map) {
		var result = this.findObjectsByType("breakableobject", map, 'breakableobjects');
		result.forEach(function (element) {
			this.createFromTiledObject(element, game, true);
		}, this);

	},
	createInteraction: function (game, map) {
		var result = this.findObjectsByType("interactingobject", map, 'interactingobjects');
		this.mm = 0;
		this.pointObj;
		this.lastChainObj = "";
		this.lastRope = "";
		this.lastObj = "";
		this.ropeCount = 1;
		result.forEach(function (element) {
			this.createFromTiledObject(element, game, true);
		}, this);

	},
	createTreasure: function (game, map) {
		var result = this.findObjectsByType("treasureobject", map, 'treasureobjects');
		result.forEach(function (element) {
			this.createFromTiledObject(element, game, true);
		}, this);

	},
	createStatic: function (game, map) {
		var result = this.findObjectsByType("staticobject", map, 'staticobjects');
		result.forEach(function (element) {
			this.createFromTiledObject(element, game, false);
		}, this);

	},
	createGround: function (game, map, type) {
		var result = this.findPlatform(type, map, 'physicslayer');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(2);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);

		//this.groundBody2 = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);    
		//this.groundBody2.setChain(result);
		//this.groundBody2.static = true;
		// this.groundBody.sensor = true;
		//console.log(result);
	},

	createWater: function (game, map, type) {
		var result = this.findPlatform(type, map, 'waterlayer');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//this.groundBody.setCollisionCategory(8);
		//console.log(result);
	},

	createYellowWall: function (game, map, type) {
		var result = this.findPlatform(type, map, 'yellowlayer1');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(8);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//console.log(result);
	},

	createYellowWall2: function (game, map, type) {
		var result = this.findPlatform(type, map, 'yellowlayer2');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(8);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//console.log(result);
	},

	createYellowWall3: function (game, map, type) {
		var result = this.findPlatform(type, map, 'yellowlayer3');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(8);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//console.log(result);
	},

	createYellowWall4: function (game, map, type) {
		var result = this.findPlatform(type, map, 'yellowlayer4');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(8);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//console.log(result);
	},

	createRedWall: function (game, map, type) {
		var result = this.findPlatform(type, map, 'redlayer');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(2);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//console.log(result);
	},

	createRedWall1: function (game, map, type) {
		var result = this.findPlatform(type, map, 'redlayer1');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(2);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//console.log(result);
	},

	createredWall: function (game, map, type) {
		var result = this.findPlatform(type, map, 'redlayer');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//this.groundBody.setCollisionCategory(8);
		//console.log(result);
	},


	createredWall1: function (game, map, type) {
		var result = this.findPlatform(type, map, 'redlayer1');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//this.groundBody.setCollisionCategory(8);
		//console.log(result);
	},
	createredWall2: function (game, map, type) {
		var result = this.findPlatform(type, map, 'redlayer2');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//this.groundBody.setCollisionCategory(8);
		//console.log(result);
	},

	createSlider1: function (game, map, type) {
		var result = this.findPlatform(type, map, 'sliderwalllayer1');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(15);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//console.log(result);
	},

	createSlider2: function (game, map, type) {
		var result = this.findPlatform(type, map, 'sliderwalllayer2');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(15);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//this.groundBody.setCollisionCategory(8);
		//console.log(result);
	},

	createSliderWallLayer2: function (game, map, type) {
		var result = this.findPlatform(type, map, 'slidingwalllayer2');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(15);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//this.groundBody.setCollisionCategory(8);
		//console.log(result);
	},


	createSlider3: function (game, map, type) {
		var result = this.findPlatform(type, map, 'sliderwalllayer3');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(15);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//this.groundBody.setCollisionCategory(8);
		//console.log(result);
	},

	createSlider4: function (game, map, type) {
		var result = this.findPlatform(type, map, 'sliderwalllayer4');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(15);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//this.groundBody.setCollisionCategory(8);
		//console.log(result);
	},

	createSlider5: function (game, map, type) {
		var result = this.findPlatform(type, map, 'sliderwalllayer5');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(15);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//this.groundBody.setCollisionCategory(8);
		//console.log(result);
	},

	createSlider6: function (game, map, type) {
		var result = this.findPlatform(type, map, 'sliderwalllayer6');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(15);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//this.groundBody.setCollisionCategory(8);
		//console.log(result);
	},

	createSlider7: function (game, map, type) {
		var result = this.findPlatform(type, map, 'sliderwalllayer7');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(15);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//this.groundBody.setCollisionCategory(8);
		//console.log(result);
	},

	createSlider8: function (game, map, type) {
		var result = this.findPlatform(type, map, 'slidingwalllayer3');
		this.groundBody = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
		this.groundBody.setChain(result);
		this.groundBody.static = true;
		this.groundBody.setCollisionCategory(15);
		StickyNinjaGlobals.garbageToCollect.push(this.groundBody);
		//this.groundBody.setCollisionCategory(8);
		//console.log(result);
	},

	//find objects in a Tiled layer that containt a property called "type" equal to a certain value
	findObjectsByType: function (type, map, layer) {
		var result = new Array();
		if (map.objects[layer]) {
			map.objects[layer].forEach(function (element) {
				//console.log(element);
				if (element.type === type) {
					//Phaser uses top left, Tiled bottom left so we have to adjust
					//also keep in mind that the cup images are a bit smaller than the tile which is 16x16
					//so they might not be placed in the exact position as in Tiled
					// element.y -= map.tileHeight;
					result.push(element);
				}
			});
		}
		return result;
	},
	findPlatform: function (type, map, layer) {
		var result = new Array();
		if (map.objects[layer]) {
			map.objects[layer].forEach(function (element) {
				//console.log(element);
				if (element.type === type) {
					//Phaser uses top left, Tiled bottom left so we have to adjust
					//also keep in mind that the cup images are a bit smaller than the tile which is 16x16
					//so they might not be placed in the exact position as in Tiled
					// element.y -= map.tileHeight;
					result.push(element.x);
					result.push(element.y);
					//result.push(element);
				}
			});
		}
		return result;
	},

	strtonum: function (str) {
		var a = str.split(',');
		for (var i = 0; i < a.length; i++) {
			a[i] = parseInt(a[i]);
		}
		return a;
	},

	//create a sprite from an object
	createFromTiledObject: function (element, game, offset) {
		var lastChain = "";
		var cdayval = getDay();
		var clevelVal = getLevel();
		if (((cdayval == 2 && clevelVal == 2) || (cdayval == 3 && clevelVal == 1)) && element.name == "obj_log_100x25") {
			return;
		}
		if (((cdayval == 2 && clevelVal == 2) || (cdayval == 3 && clevelVal == 1)) && (element.name == "obj_fixed_joint" || (element.name == "obj_chainlink" && element.x < 2000))) {
			if (element.name == "obj_chainlink") {
				return;
			}

			if (element.name == "obj_fixed_joint") {
				yAnchor = element.y;
				y = yAnchor;
				//sprite = game.add.sprite(element.x, y, "/" + element.name + ".png",0);
			}

			sprite1 = game.add.sprite(element.x, y, "/" + element.name + ".png", 0);

			game.physics.box2d.enable(sprite1);
			sprite1.body.static = true;
			sprite1.body.sensor = true
			console.log(sprite1);
			var xAnchor = element.x;
			var yAnchor = element.y + 28;
			var lastRect;
			var height = 40;

			for (var i = 0; i < 4; i++) {
				var x = xAnchor;
				var y = yAnchor + (i * height);
				sprite = game.add.sprite(x, y, 'chainLink');
				game.physics.box2d.enable(sprite, false);
				sprite.body.static = false;
				if (i == 0) {
					game.physics.box2d.revoluteJoint(sprite1, sprite);
					StickyNinjaGlobals.chainObjects[i] = sprite;
				}
				else {
					StickyNinjaGlobals.chainObjects[i] = sprite;
					//sprite.body.velocity.x = 150;
					//	sprite.body.mass =50*i; 
				}
				if (i == 3) {

					var obj_log = game.add.sprite(element.x - 50, 1121, "obj_log");

					game.physics.box2d.enable(obj_log);
					obj_log.body.static = true;
					StickyNinjaGlobals.chainObjects[i + 1] = obj_log;
					sprite.bringToTop();
					obj_log.body.setCollisionCategory(23);
					StickyNinjaGlobals.Logd2l2 = obj_log;
					game.physics.box2d.revoluteJoint(obj_log, sprite, 50, 5, 0, 20);

				}
				//  After the first rectangle is created we can add the constraint
				if (lastRect) {
					game.physics.box2d.revoluteJoint(lastRect, sprite, 0, 25, 0, -10);
				}

				lastRect = sprite;
			}

		} else {

			var sprite = game.add.sprite(element.x, element.y, "/" + element.name + ".png");
			StickyNinjaGlobals.objectsToLevelWise.push(sprite);
		}



		if (offset) {
			sprite.anchor.set(0.5);
			//sprite.angle = element.rotation;
		}
		if (element.properties && element.properties.isPhysics) {
			if (element.name == "obj_wheel_large") {
				sprite.scale.x = 0.6;
				sprite.scale.y = 0.6;
			} if (element.name == "obj_car_b") {
				sprite.scale.x = 0.95;
				sprite.scale.y = 0.95;
			}
			if (element.name == "obj_trapdoor1") {
				sprite.scale.x = 0.5;
				sprite.scale.y = 0.5;
			}
			if (element.name == "obj_plank_fixed1") {
				sprite.scale.x = 0.7;
				sprite.scale.y = 0.9;
			}
			if (element.name == "fire_ball") {
				sprite.scale.x = 0.5;
				sprite.scale.y = 0.5;
			}
			if (element.name == "obj_lift") {
				sprite.scale.x = 0.5;
				sprite.scale.y = 0.9;
			}
			if (element.name == "obj_exit" || element.name == "obj_exit_back" || element.name == "obj_exit_opened" || element.name == "obj_exit_closed" || element.name == "obj_exit_anim") {
				var cday = getDay();
				var clevel = getLevel();

				if ((element.name == "obj_exit" && cday == 2 && clevel == 5) || (element.name == "obj_exit" && cday == 3 && clevel == 1)) {
					StickyNinjaGlobals.triggerExitDoor = 1;
					game.physics.box2d.enable(sprite);
					sprite.body.sensor = true;
					sprite.body.setCollisionCategory(5);
				}

			} else {
				game.physics.box2d.enable(sprite);
			}

			StickyNinjaGlobals.garbageToCollect.push(sprite.body);

			if (element.properties.static && sprite.body) {
				sprite.body.static = true;
			}
			if (sprite.body)
				sprite.body.angle = element.rotation;
			if (element.name && sprite.body)
				sprite.body.nature = element.name;
			if (element.type && sprite.body)
				sprite.body.type = element.type;

			if (element.name == "obj_exit" || element.name == "obj_exit_back" || element.name == "obj_exit_opened" || element.name == "obj_exit_closed" || element.name == "obj_exit_anim") {
				//	console.log("EXIT DOOR COLLISION CALLBACK");

				// sprite.body.sensor=true;
				//sprite.body.setCollisionCategory(5);
				//console.log("inside: " + element.name);
				//	console.log(sprite);
				if (element.name == "obj_exit")
					StickyNinjaGlobals.exitdoorOpen = sprite;
				if (element.name == "obj_exit_anim")
					StickyNinjaGlobals.exitdoorAnim = sprite;
				if (element.name == "obj_exit_back")
					StickyNinjaGlobals.exitdoorBack = sprite;
				if (element.name == "obj_exit_closed")
					StickyNinjaGlobals.exitdoor = sprite;
				//sprite.body.destroy();


				console.log(StickyNinjaGlobals.exitdoorOpen);
			}
			/* else if (element.name == "obj_mushroom_bouncy" || element.name == "obj_capstan_bouncy0005" || element.name == "obj_spring_bouncy0001") {
				console.log("obj_mushroom_bouncy");
				sprite.body.setCollisionCategory(17);
				sprite.body.static = true;
			} */
			else if (element.name == "obj_mushroom_bouncy" || element.name == "obj_capstan_bouncy0005") {
				console.log("obj_mushroom_bouncy");
				sprite.body.setCircle(sprite.width * 0.50);
				sprite.body.restitution = 0.7;
				sprite.body.setCollisionCategory(17);
				sprite.body.static = true;
			} else if (element.name == "obj_spring_bouncy0001") {
				console.log("obj_mushroom_bouncy");
				sprite.body.setCircle(sprite.width * 0.45, 0, 5);
				sprite.body.restitution = 0.7;
				sprite.body.setCollisionCategory(17);
				sprite.body.static = true;
			} else if (element.name == "obj_container_front") {
				sprite.body.setCollisionCategory(2);
				sprite.body.static = false;
				sprite.body.mass = 1;
				sprite.body.friction = 0.5;
			}
			else if (element.name == "obj_switch0001") {
				sprite.body.clearFixtures();
				sprite.body.setRectangle(sprite.width * 0.5, sprite.height * 0.5);
				sprite.body.static = true;
				sprite.body.sensor = true;

				if (element.properties && element.properties.switchNo) {
					if (element.properties.switchNo == 1) {
						sprite.body.setCollisionCategory(14);
					}
					if (element.properties.switchNo == 2) {
						sprite.body.setCollisionCategory(29);
					}
				} else {
					sprite.body.setCollisionCategory(14);
				}
			} else if (element.name == "obj_switch0002") {
				sprite.body.clearFixtures();
				sprite.body.setRectangle(sprite.width * 0.5, sprite.height * 0.5);
				sprite.body.static = true;
				sprite.body.sensor = true;
				sprite.visible = false;
				if (element.properties && element.properties.switchNo) {
					if (element.properties.switchNo == 1) {
						StickyNinjaGlobals.switchOn = sprite;
					}
					if (element.properties.switchNo == 2) {
						StickyNinjaGlobals.switchOn1 = sprite;
					}
				} else {
					StickyNinjaGlobals.switchOn = sprite;
				}

			} else if (element.name == "obj_shuriken_player1") {
				sprite.body.setRectangle(sprite.width * 0.6, sprite.height * 0.6);
				sprite.body.setCollisionCategory(27);
			}

			else if (element.type == "breakableobject") {
				sprite.body.setCollisionCategory(3);
				sprite.body.static = false;
				sprite.body.mass = 0.1;
				var cday = getDay();
				var clevel = getLevel();
				if (element.name == "obj_plank_fixed" || element.name == "obj_glasspane") {
					sprite.body.static = true;
					if (cday == 1 && clevel == 4) {
						sprite.body.static = true;
						sprite.body.setCollisionCategory(3);
					}
					if (((cday == 2 && clevel == 2) || (cday == 3 && clevel == 1)) && element.name == "obj_plank_fixed") {
						sprite.body.y = sprite.body.y + 20;
					}
				}
				if (element.name == "obj_crate_wood" || element.name == "obj_fence_wood") {
					sprite.body.clearFixtures();
					sprite.body.setRectangle(sprite.width * 0.95, sprite.height * 0.96);
					sprite.body.setCollisionCategory(3);
				}
				if (cday == 3 && clevel == 2 && element.name == "obj_barrel_wood") {
					sprite.body.clearFixtures();
					sprite.body.setRectangle(sprite.width * 0.95, sprite.height * 0.96);
					sprite.body.setCollisionCategory(3);
				}

				if (element.name == "obj_glasspane_tall1") {
					sprite.body.clearFixtures();
					sprite.body.setRectangle(sprite.width * 0.99, sprite.height * 0.97);
					sprite.body.setCollisionCategory(3);
				}



			} else if (element.name == "obj_treasure_diamond") {
				sprite.body.setCollisionCategory(6);
				sprite.body.sensor = true;
			} else if (element.name == "obj_block_deadlyelse" || element.name == "obj_blade_spinning" || element.name == "obj_spikebar" || element.name == "obj_block_deadly" || element.name == "obj_spikebar_small") {
				//console.log("DEADLY OBJECT");
				sprite.body.clearFixtures();
				sprite.body.setRectangle(sprite.width * 0.65, sprite.height * 0.65);
				sprite.body.setCollisionCategory(7);
				if (element.name == "obj_spikebar" || element.name == "obj_spikebar_small") {
					//console.log("DEADLY OBJECT");
					sprite.body.clearFixtures();
					sprite.body.setRectangle(sprite.width * 0.95, sprite.height * 0.65);
					sprite.body.setCollisionCategory(7);
				}
				if (element.name == "obj_blade_spinning") {
					//console.log("DEADLY OBJECT");					
					sprite.body.clearFixtures();
					//sprite.body.setRectangle(sprite.width * 0.95, sprite.height * 0.65);
					sprite.body.setCircle(sprite.width/2.8);
					  game.time.events.loop(0, function(){        
			            sprite.body.angle+=5.9; 
			          }, this); 
					sprite.body.setCollisionCategory(7);
				}
			} else if (element.name == "obj_lifebuoy") {
				//console.log("Rubber Tube");
				sprite.body.mass = 10.0;
				sprite.body.friction = 0.9;
				sprite.body.linearDamping = 0.3;
				sprite.body.setCircle(sprite.width * 0.50);
				sprite.body.setCollisionCategory(9);

			} else if (element.name == "obj_boat") {
				console.log(sprite.body.x);
				console.log(sprite.body.y);
				sprite.body.clearFixtures();
				sprite.body.loadPolygon('physicsData', "boat", sprite);
				sprite.body.static = false;
				sprite.body.mass = 10;
				console.log("obj_boat");
				var x1 = sprite.body.x + 1000;
				sprite.body.setCollisionCategory(28);
				var boattween = game.add.tween(sprite).to({ x: x1 }, 15000, Phaser.Easing.Linear.None, false, 0);
				boattween.onComplete.add(function () {
					var boattween1 = game.add.tween(sprite).to({ x: x1 - 1000 }, 15000, Phaser.Easing.Linear.None, false, 0);
					boattween1.onComplete.add(function () {
						boattween.start();
					}, this);
				}, this);

			} else if (element.name == "obj_skateboard") {
				sprite.body.static = false;
				sprite.body.mass = 5;
				sprite.body.friction = 0;
				StickyNinjaGlobals.skateBoard = sprite;
				sprite.body.setCollisionCategory(10);
			} else if (element.name == "fire_block" || element.name == "fire_ball" || element.name == "fire_spawner" || element.name == "water_block" || element.name == "obj_track_long") {
				sprite.body.setCollisionCategory(11);
				sprite.body.sensor = true;
				if (element.name == "fire_block" || element.name == "fire_ball" || element.name == "fire_spawner") {
					sprite.body.clearFixtures();
					sprite.body.setRectangle(sprite.width * 1.0, sprite.height * 0.1, 0, 12);
					sprite.body.setCollisionCategory(11);
				}
				/*if (element.name == "water_block" ) {
					sprite.body.clearFixtures();
					sprite.body.setRectangle(sprite.width * 0.9, sprite.height * 0.2, 0, 15);
					sprite.body.setCollisionCategory(11);
					//sprite.scale.x = 1.0;
					sprite.scale.y = 1.5;
				}*/
				var cday = getDay();
				var clevel = getLevel();
				if (cday == 1 && clevel == 4 && element.name == "water_block") {
					sprite.body.clearFixtures();
					sprite.body.setRectangle(sprite.width * 1, sprite.height * 0.1, 0, 19);
					sprite.body.setCollisionCategory(11);
					//sprite.scale.x = 1.0;
					sprite.scale.y = 1;
				}
				if (((cday == 2 && clevel == 4) || (cday == 3 && clevel == 5)) && element.name == "water_block") {
					sprite.body.clearFixtures();
					sprite.body.setRectangle(sprite.width * 1.9, sprite.height * 0.1, 4, 2);
					sprite.body.setCollisionCategory(11);
					//sprite.scale.x = 1.0;
					sprite.scale.y = 1;
				}

				if(cday == 4 && clevel == 3 && element.name == "water_block"){
					sprite.body.clearFixtures();
					sprite.body.setRectangle(sprite.width * 1.9, sprite.height * 0.1, 4,10);
					sprite.body.setCollisionCategory(11);
				}

				if (element.name == "fire_ball") {
					sprite.body.static = true;
					/* sprite.body.setCategoryContactCallback(2, this.fireBlockHitWalls); 
					 StickyNinjaGlobals.fireball=sprite.body;
					 StickyNinjaGlobals.fireball.originalY=sprite.body.y;
					 sprite.body.sensor=false;
					 //game.add.tween(sprite).to({y:sprite.body.y-5}, 15000, Phaser.Easing.Linear.None,false,0);
					 sprite.body.gravityScale=0.8;
					 sprite.body.applyForce(0, -200);*/
				}
			} else if (element.name == "obj_trapdoor1") {
				sprite.body.mass = 0.001;
			} else if (element.name == "obj_log_100x10") {
				if (cdayval == 2 && clevelVal == 4 && sprite.body.x < 3386 || cdayval == 3 && clevelVal == 5 && sprite.body.x < 3386) {
					sprite.body.static = false;
					sprite.body.mass = 20;
					sprite.body.clearFixtures();
					sprite.body.setRectangle(sprite.width, sprite.height);
					//console.log(sprite);		
					var sp1 = game.add.sprite(element.x + 60, element.y - 2, 'obj_fixed_joint');
					game.physics.box2d.enable(sp1);
					sp1.body.static = true;
					sp1.body.sensor = true;
					var ax = 56;
					var ay = 0;
					var bx = 0;
					var by = -1;
					var motorSpeed = 0;
					var motorTorque = 40;
					var motorEnabled = false;
					var lowerLimit = -180;
					var upperLimit = 180;
					game.physics.box2d.revoluteJoint(sprite, sp1, ax, ay, bx, by, motorSpeed, motorTorque, motorEnabled, lowerLimit, upperLimit, true);
					//bodyA, bodyB, ax, ay, bx, by, motorSpeed, motorTorque, motorEnabled, lowerLimit, upperLimit, limitEnabled
					sprite.body.setCollisionCategory(25);

					if (sprite.body.x > 3379 && sprite.body.y >= 1400) {
						sp1.scale.x = 1.5;
						sp1.scale.y = 1.5;

					}
				}


			}

			else if (element.name == "obj_ball_spiky") {
				sprite.body.static = true;
				sprite.body.clearFixtures();
				sprite.body.setCircle(26, 0, 0);
				sprite.body.gravityScale = 1;
				sprite.body.friction = 0.1;
				//sprite.body.mass = 4;
				sprite.body.applyForce(0, -300);
				StickyNinjaGlobals.objBallSpiky = sprite;
				if ((cdayval == 2 && clevelVal == 2) || (cdayval == 3 && clevelVal == 1) && this.lastObj) {
					StickyNinjaGlobals.chainObjects2[this.mm + 1] = sprite;
					game.physics.box2d.revoluteJoint(this.lastObj, sprite, 0, 10, 0, -10);
				}

				sprite.body.setCollisionCategory(7);
				//	alert("s");

			} else if (element.name == "obj_trapdoor") {
				sprite.body.setCollisionCategory(18);
				sprite.body.static = true;
				sprite.body.indexNum = StickyNinjaGlobals.trapdoor.length;
				StickyNinjaGlobals.trapdoor.push(sprite.body);

				var sprite1 = game.add.sprite(element.x + 10, element.y + 100, "/" + element.name + ".png");
				sprite1.scale.x = 0.3;
				sprite1.scale.y = 0.3;
				game.physics.box2d.enable(sprite1);
				sprite1.body.sensor = true;
				sprite1.body.static = true;
				sprite1.visible = false;
				if (sprite.body.indexNum == 0) {
					StickyNinjaGlobals.trapdoorshape1 = sprite.body.addRectangle(95, 5, -50, 10);
					StickyNinjaGlobals.trapdoorshape2 = sprite.body.addRectangle(95, 5, 50, 10);
					StickyNinjaGlobals.trapdoorshape3 = sprite.body.addRectangle(200, 5, 0, -10);

					StickyNinjaGlobals.trapdoorshape1.SetSensor(true);
					StickyNinjaGlobals.trapdoorshape2.SetSensor(true);
					StickyNinjaGlobals.trapdoorshape3.SetSensor(true);
					game.physics.box2d.revoluteJoint(sprite, sprite1, 100, -20, 24, 0, 0, 0, 0, 360, 100, true);
				}
				else if (sprite.body.indexNum == 1) {
					game.physics.box2d.revoluteJoint(sprite, sprite1, 100, 0, -20, -14, 0, 0, 0, -360, 100, true);
				}

			}
			else if (element.name == "obj_car_b") {
				sprite.body.clearFixtures();
				sprite.body.loadPolygon('physicsData', "car", sprite);
				sprite.body.static = false;
				sprite.body.sensor = false;
				sprite.body.mass = 20;
				sprite.body.setCollisionCategory(16);

				//StickyNinjaGlobals.carrightObj = sprite.body.addRectangle(5,40,105,15);
				//StickyNinjaGlobals.carleftObj= sprite.body.addRectangle(5,40,-95,15);
				//StickyNinjaGlobals.cartopObj= sprite.body.addRectangle(55,5,0,-37);
				//StickyNinjaGlobals.cartopLeftObj= sprite.body.addCircle(25, -37, -15);
				//StickyNinjaGlobals.cartopRightObj= sprite.body.addCircle(25, 20, -15);

				//StickyNinjaGlobals.carbackTop= sprite.body.addRectangle(40,5,-75,-10);
				//StickyNinjaGlobals.carfrontTop= sprite.body.addRectangle(50,5,75,-10);

				//StickyNinjaGlobals.carrightObj.SetSensor(true);
				//StickyNinjaGlobals.carleftObj.SetSensor(true);
				//StickyNinjaGlobals.cartopObj.SetSensor(true);
				//StickyNinjaGlobals.cartopLeftObj.SetSensor(true);
				//StickyNinjaGlobals.cartopRightObj.SetSensor(true);
				//StickyNinjaGlobals.carbackTop.SetSensor(true);
				//StickyNinjaGlobals.carfrontTop.SetSensor(true);
				//sprite.body.setCollisionCategory(4);			
				StickyNinjaGlobals.car = sprite.body;
			} else if (element.name == "obj_wheel_large") {
				//sprite.body.clearFixtures();
				//sprite.body.loadPolygon('physicsData', "tyrebig", sprite);
				sprite.body.setCircle(sprite.width / 2.8);
				sprite.body.static = false;
				sprite.body.mass = 2;
				StickyNinjaGlobals.wheels.push(sprite.body);
			}
			else if (element.name == "obj_waterwheel") {
				sprite.body.clearFixtures();
				sprite.body.setCircle(sprite.width * 0.45);
				  game.time.events.loop(0, function(){        
			            sprite.body.angle+=2; 
			          }, this);
				StickyNinjaGlobals.waterWheel = sprite;
				sprite.body.setCollisionCategory(24);

			}
			else if (element.name == "obj_pipe_slide_45") {
				sprite.body.clearFixtures();
				sprite.body.loadPolygon('physicsData', "sliderleft", sprite);
				sprite.body.setCollisionCategory(15);
				//sprite.body.static=true;
				//sprite.body.friction=0;
			} else if (element.name == "obj_pipe_slide_45_fliped") {
				sprite.body.clearFixtures();
				sprite.body.loadPolygon('physicsData', "sliderright", sprite);
				sprite.body.setCollisionCategory(15);
				//sprite.body.static=true;
				//sprite.body.friction=0;
			} else if (element.name == "obj_pipe_slide") {

				sprite.body.clearFixtures();
				sprite.body.setRectangle(sprite.width, sprite.height);
				sprite.body.setCollisionCategory(15);
				//sprite.body.static=true;
				//sprite.body.friction=0;
			} else if (element.name == "obj_steps_wood") {
				sprite.body.clearFixtures();
				sprite.body.loadPolygon('physicsData', "stepsleft", sprite);
				sprite.body.setCollisionCategory(12);
			} else if (element.name == "obj_steps_wood_fliped") {
				sprite.body.clearFixtures();
				sprite.body.loadPolygon('physicsData', "stepsright", sprite);
				sprite.body.setCollisionCategory(12);
			} else if (element.name == "obj_chainlink") {
				sprite.body.sensor = false;
				sprite.body.static = true;
				if (this.mm == 0) {
					sprite.body.sensor = true;
					if (!this.pointObj) {
						this.pointObj = game.add.sprite(element.x + 20, element.y, "obj_fixed_joint");
						game.physics.box2d.enable(this.pointObj);
						this.pointObj.body.static = true;
						this.pointObj.visible = false;
						this.pointObj.body.sensor = true;
						this.pointObj.anchor.set(0.5);
					}
					if (this.pointObj)
						game.physics.box2d.revoluteJoint(sprite, this.pointObj, 0, -10, -5, 13);

				}

				if ((cdayval == 2 && clevelVal == 2) || (cdayval == 3 && clevelVal == 1)) {
					//console.log(StickyNinjaGlobals.chainObjects2);
					StickyNinjaGlobals.chainObjects2[this.mm] = sprite;
					if (this.lastChainObj) {
						game.physics.box2d.revoluteJoint(this.lastChainObj, sprite, 0, 25, 0, -10);

					}


					if (this.mm == 3) {
						this.lastObj = sprite;
					}
					this.mm++;

				}

				this.lastChainObj = sprite;

			} else if (element.name == "obj_rope") {
				sprite.body.static = false;
				if (!this.obj_fixed_joint) {
					this.obj_fixed_joint = game.add.sprite(element.x, element.y - 15, "obj_fixed_joint");
					game.physics.box2d.enable(this.obj_fixed_joint);
					this.obj_fixed_joint.body.static = true;
					this.obj_fixed_joint.visible = false;
					this.obj_fixed_joint.body.sensor = true;
					this.obj_fixed_joint.anchor.set(0.5);

					//this.obj_fixed_joint.body.mass = 3;	
				}
				if (this.lastRope) {
					//console.log("roope joint");
					game.physics.box2d.revoluteJoint(this.lastRope, sprite, 0, 30, 0, -22, 0, 0, 360, 100, true);

				} else {
					game.physics.box2d.revoluteJoint(this.obj_fixed_joint, sprite, 0, 18, 0, -22, 0, 0, 360, 100, true);
				}
				//this.obj_fixed_joint.body.velocity.x = 100;
				sprite.body.velocity.x = 100;
				sprite.body.mass = 4 / this.ropeCount;

				this.ropeCount++;
				this.lastRope = sprite;
			}
			else if (element.name == "obj_wheel_tyre") {
				sprite.body.static = true;
				sprite.body.mass = 2;
				if (this.lastRope)
					game.physics.box2d.revoluteJoint(this.lastRope, sprite, 0, 10, 0, -22);

				sprite.body.setCollisionCategory(26);

			} else if(element.name == "obj_subwaycar"){
				sprite.body.static = false;				
				
				sprite.indexNo = StickyNinjaGlobals.Subwaycar.length;
				StickyNinjaGlobals.Subwaycar.push(sprite);

				sprite.body.setCollisionCategory(30);
				this.moveSubwaycar(sprite,game);
			}

			/*else if(element.name=='obj_platform_metal' || element.name=='obj_platform_metal_x4' ||  element.name=='obj_floor_wood' || element.name=='obj_platform_stone' || element.name=='obj_floor_wood_long'){
        sprite.body.setCollisionCategory(20);
        sprite.body.static=true;
      }*/
			else {

				sprite.body.setCollisionCategory(2);
			}
		} else if (element.rotation) {

			sprite.angle = element.rotation;
		}


		// Day 1 Level 2 -- No physics required for these objects
		if (element.name == "obj_block_vanish") {
			if (sprite.body)
				sprite.body.sensor = false;
			if (cdayval == 1 && clevelVal == 2) {
				StickyNinjaGlobals.doors.push(sprite);
			}
			if (cdayval == 2 && clevelVal == 2) {
				//console.log(sprite.body);
				StickyNinjaGlobals.doors1.push(sprite);
			}
			if (cdayval == 3 && clevelVal == 3) {
				//console.log(sprite.body);
				StickyNinjaGlobals.doors2.push(sprite);
			}
			if (cdayval == 3 && clevelVal == 4) {
				sprite.scale.x = 1;
				//sprite.scale.y = 1.45;
				if (element.properties && element.properties.block) {
					if (element.properties.block == 2) {
						StickyNinjaGlobals.doors3.push(sprite);
					}
					if (element.properties.block == 1) {
						StickyNinjaGlobals.doors4.push(sprite);
					}
				}
				//console.log(sprite.body);

			}

		}

		if (element.properties && element.properties.waves) {
			sprite.animations.add("waves", this.strtonum(element.properties.waves), 5, true);
			sprite.animations.play("waves");
		}
		if (element.properties && element.properties.fireblock) {
			sprite.animations.add("fireblock", this.strtonum(element.properties.fireblock), 12, true);
			sprite.animations.play("fireblock", 12, true);
		}
		if (element.properties && element.properties.gemstone) {
			sprite.animations.add("gemstone", this.strtonum(element.properties.gemstone), 15, true);
			sprite.animations.play("gemstone");
		}

		if (element.properties && element.properties.treasure) {
			sprite.animations.add("treasure", this.strtonum(element.properties.treasure), 15, true);
			sprite.animations.play("treasure");
		}
		if (element.properties && element.properties.shuriken) {
			sprite.animations.add("shuriken", this.strtonum(element.properties.shuriken), 15, true);
			sprite.animations.play("shuriken");
		}

		//sprite.angle = element.angle;

		//copy all properties to the sprite
		/* Object.keys(element.properties).forEach(function(key){
		   sprite[key] = element.properties[key];
		 });*/
	},

	fireBlockHitWalls: function (body1, body2, fixture1, fixture2, begin) {
		if (!begin) {
			body1.angle = body1.angle + 90;
		}
	},

	hitCar: function (body1, body2, fixture1, fixture2, begin) {
		if (!begin) {
			score = score + 400;
			goldCountText.setText(score);
		}

		if (body2.sprite) {
			body2.sprite.animations.play("hit");
		}

		body2.destroy();
	},

	findEnemy: function (element, game, offset) {
		var sprite = game.add.sprite(element.x, element.y, "/" + element.name + ".png");
		if (offset) {
			sprite.anchor.set(0.5);
			//sprite.angle = element.rotation;
		}
		if (element.properties && element.properties.isPhysics) {
			game.physics.box2d.enable(sprite);
			//sprite.body.setRectangle(sprite.width *0.9, sprite.height * 0.9);
			sprite.body.setRectangle(sprite.width * 0.5,  sprite.height * 0.7, 0, 10);
			StickyNinjaGlobals.garbageToCollect.push(sprite.body);
			if (element.properties.static) {
				//sprite.body.static = true;
			}
			if (element.properties.shuriken) {
				StickyNinjaGlobals.shurikenEnemies.push(sprite);
			} else {
				StickyNinjaGlobals.OthershurikenEnemies.push(sprite);
			}

			//YELLOW ENEMIES
			if (element.name == "enemy_b_idle") {
				sprite.body.angle = element.rotation;
				sprite.body.mass = 0.1;
				sprite.body.setCollisionCategory(4);
				sprite.body.nature = "enemy_b_idle";
				sprite.body.type = "enemy";
				StickyNinjaGlobals.enemieslist1.push(sprite);
			} else if (element.name == "enemy_c_idle") {
				sprite.body.nature = "enemy_c_idle";
				sprite.body.type = "enemy";
				sprite.body.angle = element.rotation;
				sprite.body.mass = 0.1;
				StickyNinjaGlobals.enemieslist.push(sprite);
				sprite.body.setCollisionCategory(22);

				//sprite.body.setCollisionCategory(7);
			} else {
				sprite.body.angle = element.rotation;
				sprite.body.mass = 0.1;
				sprite.body.setCollisionCategory(4);
				sprite.body.nature = "enemy";
				sprite.body.type = "enemy";
			}
		} else if (element.rotation) {
			sprite.angle = element.rotation



		}

		if (element.properties && element.properties.isAnim) {
			sprite.animations.add("idle", this.strtonum(element.properties.idle), 7, true);
			//sprite.animations.add("right",this.strtonum(element.properties.right),5, true );
			//sprite.animations.add("left", this.strtonum(element.properties.hit), 5, true);
			var anim = sprite.animations.add("hit", this.strtonum(element.properties.hit), 5, false);
			anim.killOnComplete = true;
			//sprite.animations.play("left", true);	
			sprite.animations.play("idle", true);
			//sprite.animations.play("right", true);	


			if (element.properties && element.properties.enemy_a_fly) {
				sprite.body.static = true;
				sprite.animations.add("fly", this.strtonum(element.properties.fly), 10, true);
				sprite.animations.play("fly");
			}

		}

		//sprite.angle = element.angle;

		//copy all properties to the sprite
		/* Object.keys(element.properties).forEach(function(key){
		   sprite[key] = element.properties[key];
		 });*/
	},
	moveSubwaycar : function(sprite,game){
			 console.log("moveSubwaycar");
			 if(sprite.indexNo==0){
				var tweenTo = game.add.tween(sprite.body).to( { x: sprite.body.x + 1470 }, 12000, Phaser.Easing.Linear.None, true);
				tweenTo.onComplete.add(function(){
				 console.log("moveSubwaycar tween on complete");
				 var tweenFrom = game.add.tween(sprite.body).to( { x: sprite.body.x - 1620 },12000, Phaser.Easing.Linear.None, true);
				
				 tweenFrom.onComplete.add(function(){
					 tweenTo.start();
				 });
			 }, this);
			 }else{
				var tweenTo = game.add.tween(sprite.body).to( { x: sprite.body.x + 1480 }, 12000, Phaser.Easing.Linear.None, true);
				tweenTo.onComplete.add(function(){
				 console.log("moveSubwaycar tween on complete");
				 var tweenFrom = game.add.tween(sprite.body).to( { x: sprite.body.x - 1410 },12000, Phaser.Easing.Linear.None, true);
				
				 tweenFrom.onComplete.add(function(){
					 tweenTo.start();
				 });
			 }, this);
			 }
			
	},
	gameMenu: function (game) {

		this.game = game;

		this.gameMenuGroup = game.add.group();
		this.gameMenuGroup.fixedToCamera = true;

		this.missionbarGroup = game.add.group();
		this.missionbarGroup.fixedToCamera = true;
		this.missionbarGroup.enemyObj = 0;
		this.missionbarGroup.timerObj = 0;
		if (StickyNinjaGlobals.soundOn) {
			this.audioBtn = game.add.button(game.width - 117, 10, 'audioBtn', this.gamemenuBtnClicked, this);
			this.audioBtn.scale.x = 0.7;
			this.audioBtn.scale.y = 0.7;
		} else {
			this.audioBtn = game.add.button(game.width - 117, 10, 'audioBtn1', this.soundOn, this);
			this.audioBtn.width = this.audioBtn.height = 54;
		}
		this.levelButton = game.add.button(game.width - 55, 10, 'levelButton', this.gamemenuBtnClicked, this);

		this.levelButton.width = this.levelButton.height = 54;


		this.component_gold = game.add.sprite(game.width - 273, game.height - 35, 'component_gold');
		this.component_hud_heart = game.add.sprite(game.width - 160, game.height - 40, 'component_hud_heart');
		this.jumpCounter0001 = game.add.sprite(game.width - 80, game.height - 45, 'jumpCounter0001');
		this.hud_scoreBar = game.add.sprite(game.width - 287, game.height - 48, 'hud_scoreBar');


		var style = {
			font: "22px arial",
			fill: "#ffffff",
			fontWeight: "bold"
		};
		this.goldCount = 0;//TODO need to make it dynamic
		goldCountText = this.game.add.text(this.component_gold.x + 50, this.component_gold.y, this.goldCount, style);


		this.heartValueCount = 3;//TODO need to make it dynamic
		heartValueCountText = this.game.add.text(this.component_hud_heart.x + 40, this.component_hud_heart.y + 5, this.heartValueCount, style);

		this.jumpCount = 0;//TODO need to make it dynamic
		jumpCountText = this.game.add.text(this.jumpCounter0001.x + 45, this.jumpCounter0001.y + 10, this.jumpCount, style);


		this.missionbar_bg = game.add.sprite(5, game.height - 48, 'missionbar_bg');


		this.enemykilled = 0;//TODO need to make it dynamic
		this.totalenemy = 0;//TODO need to make it dynamic
		comboText = "";
		var day = getDay();
		var level = getLevel() - 1;
		enemykilledText = this.game.add.text(this.missionbar_bg.x + 65, this.missionbar_bg.y + 10, this.enemykilled + "/" + this.totalenemy, style);
		enemykilledText.setText("0/" + StickyNinjaGlobals.enemiesToBeKilled[day][level]);

		var missions = StickyNinjaGlobals.levelCompletionConditions[day][getLevel()];

		for (var index = 0; index < missions.length; index++) {

			if (missions[index].indexOf("treasuries") >= 0) {

				this.treasuries_bg = game.add.sprite(5, game.height - 100, 'missionbar_bg');
				obj_treasure = game.add.sprite(15, game.height - 95, 'obj_treasure');
				obj_treasure.width = obj_treasure.height = 35;
				this.missionbarGroup.add(this.treasuries_bg);
				this.missionbarGroup.add(obj_treasure);

				treasuriesText = this.game.add.text(this.treasuries_bg.x + 65, this.treasuries_bg.y + 10, "0/5", style);
				this.missionbarGroup.add(treasuriesText);
			}
			if (missions[index].indexOf("enemies") >= 0) {
				this.missionbarGroup.add(this.missionbar_bg);				
				this.missionbarGroup.enemyObj = 1;
				if (!StickyNinjaGlobals.allEnemieskilled) {
					enemy_green = game.add.sprite(15, game.height - 43, 'enemy_green');
					this.missionbarGroup.add(enemy_green);
					enemy_tickmark = this.game.add.sprite(enemy_green.x + 20, enemy_green.y + 5, 'enemy_tickmark');
					//enemy_tickmark = this.game.add.sprite(enemy_green.x+20,enemy_green.y,  'enemy_tickmark');
					enemy_tickmark.scale.x = 0.6;
					enemy_tickmark.scale.y = 0.6;
					enemy_tickmark.visible = false;
					this.missionbarGroup.add(enemy_tickmark);

					StickyNinjaGlobals.tickmark = enemy_tickmark;
				} else {
					enemy_green1 = game.add.sprite(15, game.height - 43, 'obj_treasure');
					this.missionbarGroup.add(enemy_green1);
				}


				this.missionbarGroup.add(enemykilledText);

			}
			if (missions[index].indexOf("timer") >= 0) {
				if (this.missionbarGroup.enemyObj == 1) {
					this.timer_bg = game.add.sprite(5, game.height - 95, 'missionbar_bg');
				}
				else {
					this.timer_bg = game.add.sprite(5, game.height - 48, 'missionbar_bg');
				}

				this.missionbarGroup.add(this.timer_bg);
				obj_time = game.add.sprite(this.timer_bg.x+10, this.timer_bg.y+5, 'obj_time');
				obj_time.width = 48;
				obj_time.height = 35;
				var currentTimer = parseInt((missions[index].split(","))[1]);
				timerText = this.game.add.text(this.timer_bg.x + 65, this.timer_bg.y + 10, "0 / "+currentTimer, style);
				this.missionbarGroup.add(obj_time);
				this.missionbarGroup.add(timerText);
			}
			if (missions[index].indexOf("dontkill") >= 0) {

				this.stealth_bg = game.add.sprite(15, game.height - 48, 'missionbar_bg');
				this.missionbarGroup.add(this.stealth_bg);
				obj_stealth = game.add.sprite(25, game.height - 43, 'obj_stealth');
				obj_stealth.width = obj_stealth.height = 35;
				stealthText = this.game.add.text(this.stealth_bg.x + 65, this.stealth_bg.y + 10, "Stealth", style);
				this.missionbarGroup.add(stealthText);
				this.missionbarGroup.add(obj_stealth);
			}

			if (missions[index].indexOf("smashall") >= 0) {

				this.smashes_bg = game.add.sprite(5, game.height - 100, 'missionbar_bg');
				this.missionbarGroup.add(this.smashes_bg);
				obj_smashes = game.add.sprite(15, game.height - 95, 'obj_smashes');
				obj_smashes.width = obj_smashes.height = 35;
				smashesText = this.game.add.text(this.smashes_bg.x + 55, this.smashes_bg.y + 10, "0 / 11", style);
				this.missionbarGroup.add(smashesText);
				this.missionbarGroup.add(obj_smashes);
			}
			if (missions[index].indexOf("score") >= 0) {

				this.score_bg = game.add.sprite(5, game.height - 48, 'missionbar_bg');
				this.missionbarGroup.add(this.score_bg);
				obj_kills_shuriken = game.add.sprite(15, game.height - 43, 'obj_kills_shuriken');
				obj_kills_shuriken.width = obj_kills_shuriken.height = 35;
				scoreText = this.game.add.text(this.score_bg.x + 55, this.score_bg.y + 10, "0 / 2000", style);
				this.missionbarGroup.add(scoreText);
				this.missionbarGroup.add(obj_kills_shuriken);
			}
			if (missions[index].indexOf("combo") >= 0) {

				this.score_bg = game.add.sprite(5, game.height - 48, 'missionbar_bg');
				this.missionbarGroup.add(this.score_bg);
				obj_kills_combo = game.add.sprite(15, game.height - 43, 'obj_kills_combo');
				obj_kills_combo.width = obj_kills_combo.height = 35;
				comboText = this.game.add.text(this.score_bg.x + 55, this.score_bg.y + 10, "0/8", style);
				this.missionbarGroup.add(comboText);
				this.missionbarGroup.add(obj_kills_combo);
			}
		}

		this.gameMenuGroup.add(this.hud_scoreBar);
		this.gameMenuGroup.add(this.audioBtn);
		this.gameMenuGroup.add(this.levelButton);
		this.gameMenuGroup.add(this.component_gold);
		this.gameMenuGroup.add(goldCountText);
		this.gameMenuGroup.add(this.component_hud_heart);
		this.gameMenuGroup.add(heartValueCountText);
		this.gameMenuGroup.add(this.jumpCounter0001);
		this.gameMenuGroup.add(jumpCountText);
		StickyNinjaGlobals.gameMenu = this.gameMenuGroup;


		this.gameMenuPopupGroup = game.add.group();
		this.gameMenuPopupGroup.visible = false;

		this.gameMenuBg = game.add.sprite(0, 0, 'gameMenuBg');
		this.gameMenuBg.fixedToCamera = true;

		this.levelSelectBtn = game.add.button(232, 203, 'levelSelectButton', this.gamemenuBtnClicked, this);
		this.levelSelectBtn.fixedToCamera = true;
		//this.levelButton.width = this.levelButton.height = 78;

		this.restartButton = game.add.button(348, 203, 'restartButton', this.gamemenuBtnClicked, this);
		this.restartButton.fixedToCamera = true;

		this.playBtn = game.add.button(464, 203, 'playBtn', this.gamemenuBtnClicked, this);
		this.playBtn.fixedToCamera = true;

		this.gameMenuPopupGroup.add(this.gameMenuBg);
		this.gameMenuPopupGroup.add(this.levelSelectBtn);
		this.gameMenuPopupGroup.add(this.restartButton);
		this.gameMenuPopupGroup.add(this.playBtn);
		StickyNinjaGlobals.gameMenuPopupGroup = this.gameMenuPopupGroup;
	},

	gamemenuBtnClicked: function (button) {
		this.game.buttonClick = this.game.add.audio('sfxButtonClick');
		if (StickyNinjaGlobals.soundOn) {
			this.game.buttonClick.play();
		}
		if (button.key && button.key == 'levelButton') {
			StickyNinjaGlobals.menuOn = true;
			this.gameMenuPopupGroup.visible = true;
		}
		else if (button.key && button.key == 'restartButton') {
			this.gameMenuPopupGroup.visible = false;
			StickyNinjaGlobals.menuOn = false;
			//Destroying the objects created during game play
			for (var index = 0; index < StickyNinjaGlobals.garbageToCollect.length; index++) {
				var objToDel = StickyNinjaGlobals.garbageToCollect[index];
				if (objToDel) {
					if (objToDel.sprite) {
						objToDel.sprite.destroy();
					}
					objToDel.destroy();
				}
			}
			for (var index = 0; index < StickyNinjaGlobals.objectsToDestroy.length; index++) {
				var objToDel = StickyNinjaGlobals.objectsToDestroy[index];
				if (objToDel) {
					if (objToDel.sprite) {
						objToDel.sprite.destroy();
					}
					objToDel.destroy();
				}
			}
			StickyNinjaGlobals.garbageToCollect = [];
			StickyNinjaGlobals.objectsToDestroy = [];
			if (gameGlobal.gamePlayMusic.isPlaying) {
				this.game.gamePlayMusic.stop();
			}
			this.game.state.start("play");
		}
		else if (button.key && button.key == 'playBtn') {
			this.gameMenuPopupGroup.visible = false;
			StickyNinjaGlobals.menuOn = false;
		}
		else if (button.key && button.key == 'levelSelectButton') {
			stn.shutdown();
			this.game.state.start("menu");
			//this.gameMenuPopupGroup.visible = false;
			//window.StickyNinjaMission.state.menu.openLevelMenu();
			StickyNinjaGlobals.inMenuScreen = true;

		}
		else if (button.key && button.key == 'audioBtn') {
			//console.log("audioBtn clicked");
			this.audioBtn1 = this.game.add.button(this.game.width - 117, 10, 'audioBtn1', this.soundOn, this);
			this.audioBtn1.scale.x = 0.7;
			this.audioBtn1.scale.y = 0.7;

			StickyNinjaGlobals.soundOn = false;
			gameGlobal.sound.pauseAll();
			this.gameMenuGroup.add(this.audioBtn1);

		}

	},
	soundOn: function (button) {
		//console.log("in sound on function");
		this.audioBtn = this.game.add.button(this.game.width - 117, 10, 'audioBtn', this.gamemenuBtnClicked, this);
		this.audioBtn.scale.x = 0.7;
		this.audioBtn.scale.y = 0.7;
		StickyNinjaGlobals.soundOn = true;
		gameGlobal.sound.resumeAll();
		if (this.game.menusMusic.isPlaying) {
			this.game.menusMusic.stop();
			//console.log("in soundon 111");
		}
		if (!gameGlobal.gamePlayMusic.isPlaying) {
			this.game.gamePlayMusic.loopFull();
			this.game.gamePlayMusic.volume = 0.4;
		}
		this.gameMenuGroup.add(this.audioBtn);
	},
  createWeldJoint : function(obejctBody,playerObj){
		console.log("createWeldJoint");
		var pointA = new  box2d.b2Vec2();
		var pointB = new  box2d.b2Vec2();
		obejctBody.toLocalPoint(pointA,new box2d.b2Vec2(playerObj.x,playerObj.y));
		playerObj.body.toLocalPoint(pointB, new box2d.b2Vec2(playerObj.x,playerObj.y));

	   return gameGlobal.physics.box2d.weldJoint(obejctBody.sprite,playerObj,pointA.x, pointA.y,pointB.x,pointB.y); 
		
	},
	createRevoluteJoint : function(obejctBody,playerObj){
		console.log("createRevoluteJoint");
		var pointA = new  box2d.b2Vec2();
		var pointB = new  box2d.b2Vec2();
		obejctBody.toLocalPoint(pointA,new box2d.b2Vec2(playerObj.x,playerObj.y));
		playerObj.body.toLocalPoint(pointB, new box2d.b2Vec2(playerObj.x,playerObj.y));

	   return gameGlobal.physics.box2d.revoluteJoint(obejctBody.sprite,playerObj,pointA.x, pointA.y,pointB.x,pointB.y); 
		
	},
	shutdown: function () {
		console.log("shutdown");
		if (StickyNinjaGlobals.objectsToLevelWise && StickyNinjaGlobals.objectsToLevelWise.length > 0) {
			for (var i in StickyNinjaGlobals.objectsToLevelWise) {
				if (StickyNinjaGlobals.objectsToLevelWise[i].key)
					//console.log("Destroying sprite images : " + StickyNinjaGlobals.objectsToLevelWise[i].key);
					StickyNinjaGlobals.objectsToLevelWise[i].destroy();
			}
		}
		this.game.tweens.removeAll();
	}
	
};