"use strict";
window.StickyNinjaMission.state.load = {
    preload: function () {
        // we have preloaded assets required for Loading group objects in the Boot state
        var loadingGroup = mt.create("Loading");

        // loading has been deleted?
        // continue to load rest of the textures
        if (!loadingGroup) {
            mt.preload();
            return;
        }

        // get preload sprite
        //var preload = loadingGroup.mt.children.loading;
        // preload has been deleted?
        // continue to load rest of the textures
        //if(!preload){
        //	mt.preload();
        //	return;
        //}


        this.preloadBar = this.add.sprite(305, 320, 'loading');
        this.game.world.bringToTop(this.preloadBar);
        this.load.setPreloadSprite(this.preloadBar);
		//this.game.load.bitmapFont('BPreplayBold', 'assets/fonts/BPreplay.png', 'assets/fonts/BPreplay.fnt');
        this.load.image('titleBackdrop', "assets/menu/titleBackdrop.png");
        this.load.image('title', "assets/menu/title.png");
        this.load.image('titleImage', "assets/menu/title_Image.png");
        this.load.image('playBtn', "assets/menu/playBtn.png");
        this.load.image('creditsBtn', "assets/menu/creditsBtn.png");
        this.load.image('codeImage', "assets/menu/Component_Credits_LongAnimals.png");
        this.load.image('poweredBy', "assets/menu/Component_Credits_SnakeEngine.png");
        this.load.image('artBy', "assets/menu/Component_Credits_BiscuitLocker.png");
        this.load.image('audioBtn', "assets/menu/audioBtn.png");
        this.load.image('audioBtn1', "assets/menu/audioBtn1.png");
        this.load.image('selectDayBg', "assets/menu/selectDayBg.png");
        this.load.image('levels_star', "assets/menu/levels_star.png");
        this.load.image('backBtn', "assets/menu/backBtn.png");
        this.load.image('chooseaday', "assets/textimages/chooseaday.png");
		this.load.image('chooseamission', "assets/textimages/chooseamission.png");


		this.load.image('day1', "assets/textimages/day1.png");
		this.load.image('day2', "assets/textimages/day2.png");
		this.load.image('day3', "assets/textimages/day3.png");
		this.load.image('day4', "assets/textimages/day4.png");
		this.load.image('day5', "assets/textimages/day5.png");
		this.load.image('day6', "assets/textimages/day6.png");
		this.load.image('day7', "assets/textimages/day7.png");
		this.load.image('day8', "assets/textimages/day8.png");
		
		this.load.image('day1level1', "assets/textimages/day1level1.png");
		this.load.image('day1level2', "assets/textimages/day1level2.png");
		this.load.image('day1level3', "assets/textimages/day1level3.png");
		this.load.image('day1level4', "assets/textimages/day1level4.png");
		this.load.image('day1level5', "assets/textimages/day1level5.png");
		this.load.image('day2level1', "assets/textimages/day2level1.png");
		this.load.image('day2level2', "assets/textimages/day2level2.png");
		this.load.image('day2level3', "assets/textimages/day2level3.png");
		this.load.image('day2level4', "assets/textimages/day2level4.png");
		this.load.image('day2level5', "assets/textimages/day2level5.png");
		this.load.image('day3level1', "assets/textimages/day3level1.png");
		this.load.image('day3level2', "assets/textimages/day3level2.png");
		this.load.image('day3level3', "assets/textimages/day3level3.png");
		this.load.image('day3level4', "assets/textimages/day3level4.png");
		this.load.image('day3level5', "assets/textimages/day3level5.png");
		this.load.image('day4level1', "assets/textimages/day4level1.png");
		this.load.image('day4level2', "assets/textimages/day4level2.png");
		this.load.image('day4level3', "assets/textimages/day4level3.png");
		this.load.image('day4level4', "assets/textimages/day4level4.png");
		this.load.image('day4level5', "assets/textimages/day4level5.png");
		this.load.image('day5level1', "assets/textimages/day5level1.png");
		this.load.image('day5level2', "assets/textimages/day5level2.png");
		this.load.image('day5level3', "assets/textimages/day5level3.png");
		this.load.image('day5level4', "assets/textimages/day5level4.png");
		this.load.image('day5level5', "assets/textimages/day5level5.png");
		this.load.image('day6level1', "assets/textimages/day6level1.png");
		this.load.image('day6level2', "assets/textimages/day6level2.png");
		this.load.image('day6level3', "assets/textimages/day6level3.png");
		this.load.image('day6level4', "assets/textimages/day6level4.png");
		this.load.image('day6level5', "assets/textimages/day6level5.png");
		this.load.image('day7level1', "assets/textimages/day7level1.png");
		this.load.image('day7level2', "assets/textimages/day7level2.png");
		this.load.image('day7level3', "assets/textimages/day7level3.png");
		this.load.image('day7level4', "assets/textimages/day7level4.png");
		this.load.image('day7level5', "assets/textimages/day7level5.png");
		this.load.image('day8level1', "assets/textimages/day8level1.png");
		this.load.image('day8level2', "assets/textimages/day8level2.png");
		this.load.image('day8level3', "assets/textimages/day8level3.png");
		this.load.image('day8level4', "assets/textimages/day8level4.png");
		this.load.image('day8level5', "assets/textimages/day8level5.png");
		

        this.load.image('level_select_bg', "assets/menu/level_select_bg.png");
        this.load.image('level_gray_star', "assets/menu/level_gray_star.png");
        this.load.image('level_yellow_star', "assets/menu/level_yellow_star.png");
        this.load.image('menu_lock', "assets/menu/component_lock.png");
        this.load.image('level_award_gold', "assets/menu/Component_Level_Star_Large0004.png");
        this.load.image('level_award_silver', "assets/menu/Component_Level_Star_Large0003.png");
        this.load.image('level_award_bronze', "assets/menu/Component_Level_Star_Large0002.png");

        this.load.image('day_award_gold', "assets/menu/Component_Level_Star0004.png");
        this.load.image('day_award_silver', "assets/menu/Component_Level_Star0003.png");
        this.load.image('day_award_bronze', "assets/menu/Component_Level_Star0002.png");
        this.load.image('day_award_gray', "assets/menu/Component_Level_Star0001.png");
        
        this.load.spritesheet('level_icon', "assets/menu/level_icon.png", 80, 80, 5);

        this.load.image('levelButton', "assets/menu/levelButton.png");
        this.load.image('levelSelectButton', "assets/menu/levelButton.png");
        this.load.image('restartButton', "assets/menu/restartBtn.png");

        this.load.image('gameMenuBg', "assets/menu/Component_Background.png");

        this.load.image('component_gold', "assets/menu/component_gold.png");
        this.load.image('component_hud_heart', "assets/menu/component_hud_heart.png");
        this.load.image('jumpCounter0001', "assets/menu/component_hud_jumpCounter0001.png");

        this.load.image('hud_scoreBar', "assets/menu/hud_scoreBar.png");

        this.load.image('component_level_new', "assets/menu/component_level_new.png");
        this.load.text('levels', 'assets/menu/levelmenu.json');

        this.load.image('levelCompleteResultBg', "assets/menu/component_zone.png");
        this.load.image('backgroundImage', "assets/background/background1.png");
        this.load.image('missionbar_bg', "assets/menu/missionbar_bg.png");
		
		this.load.image('missionfailed', "assets/textimages/missionfailed.png");
		this.load.image('outoflives', "assets/textimages/outoflives.png");
		this.load.image('outoftime', "assets/textimages/outoftime.png");
		this.load.image('killedenemy', "assets/textimages/killedenemy.png");
		this.load.image('tryagain', "assets/textimages/tryagain.png");
		
        this.load.image('enemy_green', "assets/menu/enemy_green.png");
        this.load.image('obj_treasure', "assets/menu/obj_treasure.png");
        this.load.image('obj_smashes', "assets/menu/obj_smashes.png");
        this.load.image('obj_stealth', "assets/menu/obj_stealth.png");
        this.load.image('obj_time', "assets/menu/obj_time_tick.png");
        this.load.image('obj_kills_shuriken', "assets/menu/obj_kills_shuriken.png");
         this.load.image('obj_kills_combo', "assets/menu/obj_kills_combo.png");
		 this.load.image('playerBase', "assets/playeranimations/player_a_base.png");
		 this.load.spritesheet('obj_pathline', "assets/obj_pathline.png", 17, 17, 2);
		 this.load.image('enemy_tickmark', "assets/menu/ui_gfx_tick.png");

		 this.load.image('chainLink','assets/obj_chainlink_rotated.png');
		 this.load.image('obj_log','assets/obj_log_100x25.png');
		 this.load.image('obj_fixed_joint','assets/obj_fixed_joint.png');
		 this.load.image('chainLink2','assets/obj_chainlink.png');
		 this.load.image('tetsubishi','assets/obj_tetsubishi.png');

		 
		 
		 //Score images and exit direction images
		 this.load.image('objExitArrowIcon', "assets/scores/obj_exit_arrow_icon.png");
		 this.load.image('objExitArrow', "assets/scores/obj_exit_arrow.png");
		 this.load.image('score1', "assets/scores/ui_score_combo0002.png");
		 this.load.image('score2', "assets/scores/ui_score_combo0003.png");
		 this.load.image('score3', "assets/scores/ui_score_combo0004.png");
		 this.load.image('score4', "assets/scores/ui_score_combo0005.png");
		 this.load.image('score5', "assets/scores/ui_score_combo0006.png");
		 this.load.image('score6', "assets/scores/ui_score_combo0007.png");
		 this.load.image('score7', "assets/scores/ui_score_combo0008.png");
		 this.load.image('score8', "assets/scores/ui_score_combo0009.png");
		 this.load.image('score9', "assets/scores/ui_score_combo0010.png");
		 this.load.image('score10', "assets/scores/ui_score_combo0011.png");
		 this.load.image('score11', "assets/scores/ui_score_combo0012.png");
		 this.load.image('score12', "assets/scores/ui_score_combo0013.png");
		 this.load.image('score13', "assets/scores/ui_score_combo0014.png");
		 this.load.image('score14', "assets/scores/ui_score_combo0015.png");
		 this.load.image('score15', "assets/scores/ui_score_combo0016.png");
		 this.load.image('score16', "assets/scores/ui_score_combo0017.png");
		 this.load.image('score17', "assets/scores/ui_score_combo0018.png");
		 this.load.image('score18', "assets/scores/ui_score_combo0019.png");
		 this.load.image('score19', "assets/scores/ui_score_combo0020.png");
		 this.load.image('score20', "assets/scores/ui_score_combo0021.png");
		 this.load.image('score21', "assets/scores/ui_score_combo0022.png");

		 
		 //this.load.image('fixedBall', "assets/obj_ball_fixed.png");
		 this.load.image('fixedBall', "assets/obj_treasure_coin0001.png");
		 //player animations
		 this.load.spritesheet('playerIdle', "assets/playeranimations/player_idle.png", 61, 72, 4);
		 this.load.spritesheet('playerCharge', "assets/playeranimations/player_charge.png", 63, 72, 4);
		 this.load.spritesheet('playerFlyRight', "assets/playeranimations/player_fly_right.png", 81, 64, 4);
		 this.load.spritesheet('playerFlyLeft', "assets/playeranimations/player_fly_left.png", 81, 64, 4);
		 this.load.spritesheet('playerFlyUp', "assets/playeranimations/player_fly_up.png", 61, 80, 4);
		 this.load.spritesheet('playerFlyDown', "assets/playeranimations/player_flydown.png", 63, 75, 26);
		 this.load.spritesheet('playerExitAnim', "assets/playeranimations/player_exit.png", 64, 66, 4);
		 this.load.spritesheet('playerLookUp', "assets/playeranimations/player_look_up.png", 61, 72, 26);
		 this.load.spritesheet('playerKill', "assets/playeranimations/player_kill.png", 78, 78, 4);
		 this.load.spritesheet('playerKillFire', "assets/playeranimations/player_kill.png", 78, 78, 1);
		 
		 
		 //audio
		 this.game.load.audio('sfxExitEnter', "assets/audio/sfx_exit_enter.mp3");
		 this.game.load.audio('sfxExitOpen', "assets/audio/sfx_exit_open.mp3");
		 this.game.load.audio('sfxHitEnemy', "assets/audio/sfx_hit_enemy.m4a");
		 this.game.load.audio('sfxSmash1', "assets/audio/sfx_smash1.mp3");
		 this.game.load.audio('sfxSmash2', "assets/audio/sfx_smash2.mp3");
		 this.game.load.audio('sfxSmash3', "assets/audio/sfx_smash3.mp3");
		 this.game.load.audio('sfxPlayerDie1', "assets/audio/sfx_ninja_die1.mp3");
		 this.game.load.audio('sfxPlayerDie2', "assets/audio/sfx_ninja_die2.mp3");
		 this.game.load.audio('sfxTreasure', "assets/audio/sfx_treasure.mp3");
		 this.game.load.audio('sfxHitSticky', "assets/audio/jump_land_edited.m4a");
		 this.game.load.audio('sfxLaunch', "assets/audio/jump_jump_edited.m4a");
		 this.game.load.audio('gamePlayMusic', "assets/audio/music_ingame2.mp3");
		 this.game.load.audio('menusMusic', "assets/audio/menus_music.mp3");
		 this.game.load.audio('sfxSwitch', "assets/audio/sfx_switch.mp3");
		 this.game.load.audio('sfxHitBouncy', "assets/audio/sfx_hit_bouncy.mp3");
		 this.game.load.audio('sfxButtonClick', "assets/audio/sfx_click_new.m4a");
		 this.game.load.audio('sfxSmashWood1', "assets/audio/wood_debris_1_edited.mp3");
		 this.game.load.audio('sfxSmashWood2', "assets/audio/wood_debris_2_edited.mp3");
		 this.game.load.audio('sfxPlayerDie', "assets/audio/sfx_player_die1.mp3");
		 


        // set it as preload sprite
        // buid loading bar
        //this.load.setPreloadSprite(preload,0);

        // update group transform - so we can get correct bounds
        //loadingGroup.updateTransform();


        // get bounds
        var bounds = loadingGroup.getBounds();

        // move it to the center of the screen
        //loadingGroup.x = this.game.camera.width*0.5 - (bounds.width) * 0.5  - bounds.x;
        //loadingGroup.y = this.game.camera.height*0.5 - (bounds.height) - bounds.y;
        // load all assets
        mt.preload();
    },

    create: function () {
        // loading has finished - proceed to demo state
        this.game.state.start("menu");
    }
};