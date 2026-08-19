

StickyNinjaGlobals={};

StickyNinjaGlobals.objectsToDestroy=[];
StickyNinjaGlobals.objectsToLevelWise=[];

StickyNinjaGlobals.garbageToCollect=[];

StickyNinjaGlobals.gameMenu = "";
StickyNinjaGlobals.gameMenuPopupGroup = "";
StickyNinjaGlobals.tileMapJSON={};
StickyNinjaGlobals.trapdoor=[];
StickyNinjaGlobals.trapdoorshape1="";
StickyNinjaGlobals.trapdoorshape2="";
StickyNinjaGlobals.trapdoorshape3="";
StickyNinjaGlobals.trapdoorshape4="";
StickyNinjaGlobals.trapdoorshape5="";
StickyNinjaGlobals.trapdoorshape6="";

StickyNinjaGlobals.Subwaycar=[];

StickyNinjaGlobals.tickmark="";
StickyNinjaGlobals.doors=[];
StickyNinjaGlobals.doors1=[];
StickyNinjaGlobals.doors2=[];
StickyNinjaGlobals.doors3=[];
StickyNinjaGlobals.doors4=[];
StickyNinjaGlobals.doors4=[];
StickyNinjaGlobals.switchNum=[];
StickyNinjaGlobals.switchOn="";
StickyNinjaGlobals.switchOn1="";
StickyNinjaGlobals.exitdoor="";
StickyNinjaGlobals.exitdoorOpen = "";
StickyNinjaGlobals.exitdoorAnim = "";
StickyNinjaGlobals.exitdoorBack = "";
StickyNinjaGlobals.objBallSpiky = "";
StickyNinjaGlobals.obj_ball_spiky= "";

StickyNinjaGlobals.shurikenEnemies=[];
StickyNinjaGlobals.OthershurikenEnemies=[];
StickyNinjaGlobals.enemieslist =[];
StickyNinjaGlobals.enemieslist1 =[];
StickyNinjaGlobals.wheels = new Array();
StickyNinjaGlobals.car="";
StickyNinjaGlobals.soundOn = true;
StickyNinjaGlobals.allEnemieskilled = false;
StickyNinjaGlobals.inMenuScreen = false;
StickyNinjaGlobals.menuOn = false;
StickyNinjaGlobals.Logd2l2 = "";
StickyNinjaGlobals.skateBoard = "";
StickyNinjaGlobals.waterWheel  = "";
StickyNinjaGlobals.doorLog = '';

StickyNinjaGlobals.carleftObj = "";
StickyNinjaGlobals.carrightObj = "";
StickyNinjaGlobals.cartopObj = "";
StickyNinjaGlobals.cartopLeftObj = "";
StickyNinjaGlobals.cartopRightObj = "";
StickyNinjaGlobals.carbackTop ="";
StickyNinjaGlobals.carfrontTop = "";

StickyNinjaGlobals.levelCompleted=0;
StickyNinjaGlobals.gameCompleted=0;
StickyNinjaGlobals.triggerExitDoor=0;
StickyNinjaGlobals.playerLifes=3;

StickyNinjaGlobals.chainObjects = {};
StickyNinjaGlobals.chainObjects2 = {};

StickyNinjaGlobals.cloudImages={};
StickyNinjaGlobals.cloudImages["1,1"] = [{'x':770,'key':'guide1','shown':false},{'x':1400,'key':'guide2','shown':false}];
StickyNinjaGlobals.cloudImages["1,2"] = [{'x':2130,y:640,'key':'guide3','shown':false}];
StickyNinjaGlobals.cloudImages["1,3"] = [{'x':880,'key':'guide4','shown':false},{'x':1500,'y':1100,'key':'guide5','shown':false}];
StickyNinjaGlobals.cloudImages["1,5"] = [{'x':1750,y:1000,'key':'guide6','shown':false,'yinverse':true}];
StickyNinjaGlobals.cloudImages["2,2"] = [{'x':1000,'key':'guide7','shown':false}];
StickyNinjaGlobals.cloudImages["2,3"] = [{'x':880,'key':'guide4','shown':false},{'x':1500,'y':1100,'key':'guide5','shown':false}];
StickyNinjaGlobals.cloudImages["3,3"] = [{'x':2330,y:640,'key':'guide3','shown':false}];



StickyNinjaGlobals.enemiesToBeKilled={};
StickyNinjaGlobals.enemiesToBeKilled["1"]=[2,5,4,5,5];
StickyNinjaGlobals.enemiesToBeKilled["2"]=[5,11,4,8,8];
StickyNinjaGlobals.enemiesToBeKilled["3"]=[0,8,0,3,8];
StickyNinjaGlobals.enemiesToBeKilled["4"]=[0,11,8,3,4];
StickyNinjaGlobals.enemiesToBeKilled["5"]=[5,9,12,11,5];
StickyNinjaGlobals.enemiesToBeKilled["6"]=[9,0,0,4,6];
StickyNinjaGlobals.enemiesToBeKilled["7"]=[0,9,9,0,16];
StickyNinjaGlobals.enemiesToBeKilled["8"]=[2,5,4,5,5];

StickyNinjaGlobals.treasury={};
StickyNinjaGlobals.treasury["2,3"]=5;
StickyNinjaGlobals.treasury["4,1"]=5;
StickyNinjaGlobals.treasury["5,1"]=5;
StickyNinjaGlobals.treasury["6,2"]=4;
StickyNinjaGlobals.treasury["7,1"]=5;
StickyNinjaGlobals.treasury["7,4"]=5;

StickyNinjaGlobals.smashall={};
StickyNinjaGlobals.smashall["4,5"]=11;
StickyNinjaGlobals.smashall["5,1"]=12;

// For positions of traget messages like Defeat All Enemies
StickyNinjaGlobals.targetMessagePositions={};
StickyNinjaGlobals.targetMessagePositions["1"]={};
StickyNinjaGlobals.targetMessagePositions["1"]["1"]={'key':'Component','x':-175,'y':-200};
StickyNinjaGlobals.targetMessagePositions["1"]["2"]={'key':'Component','x':-150,'y':-200};
StickyNinjaGlobals.targetMessagePositions["1"]["3"]={'key':'Component','x':-220,'y':-150};
StickyNinjaGlobals.targetMessagePositions["1"]["4"]={'key':'Component','x':-180,'y':-150};
StickyNinjaGlobals.targetMessagePositions["1"]["5"]={'key':'Component','x':-200,'y':-20};

StickyNinjaGlobals.targetMessagePositions["2"]={};
StickyNinjaGlobals.targetMessagePositions["2"]["1"]={'key':'Component','x':-180,'y':-155};
StickyNinjaGlobals.targetMessagePositions["2"]["2"]={'key':'Component','x':-220,'y':-150};
StickyNinjaGlobals.targetMessagePositions["2"]["3"]={'key':'Component','x':-220,'y':-150};
StickyNinjaGlobals.targetMessagePositions["2"]["4"]={'key':'Component','x':-200,'y':-170};
StickyNinjaGlobals.targetMessagePositions["2"]["5"]={'key':'timer30s','x':-220,'y':-200};

StickyNinjaGlobals.targetMessagePositions["3"]={};
StickyNinjaGlobals.targetMessagePositions["3"]["1"]={'key':'dontdefeat','x':-165,'y':-185};
StickyNinjaGlobals.targetMessagePositions["3"]["2"]={'key':'Component','x':-180,'y':-145};
StickyNinjaGlobals.targetMessagePositions["3"]["3"]={'key':'score','x':-165,'y':-188};
StickyNinjaGlobals.targetMessagePositions["3"]["4"]={'key':'Component','x':-165,'y':-188};
StickyNinjaGlobals.targetMessagePositions["3"]["5"]={'key':'combo','x':-180,'y':-170};


StickyNinjaGlobals.levelCompletionConditions={};
//Day 1
StickyNinjaGlobals.levelCompletionConditions["1"]={};
StickyNinjaGlobals.levelCompletionConditions["1"]["1"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["1"]["2"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["1"]["3"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["1"]["4"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["1"]["5"]=["enemies"];
//Day 2
StickyNinjaGlobals.levelCompletionConditions["2"]={};
StickyNinjaGlobals.levelCompletionConditions["2"]["1"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["2"]["2"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["2"]["3"]=["enemies","treasuries"];
StickyNinjaGlobals.levelCompletionConditions["2"]["4"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["2"]["5"]=["timer,35"];
//Day 3
StickyNinjaGlobals.levelCompletionConditions["3"]={};
StickyNinjaGlobals.levelCompletionConditions["3"]["1"]=["dontkill"];//means dont kill anyenemies
StickyNinjaGlobals.levelCompletionConditions["3"]["2"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["3"]["3"]=["score,2000"];
StickyNinjaGlobals.levelCompletionConditions["3"]["4"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["3"]["5"]=["combo"];
//Day 4
StickyNinjaGlobals.levelCompletionConditions["4"]={};
StickyNinjaGlobals.levelCompletionConditions["4"]["1"]=["timer,50","treasuries"];//means dont kill anyenemies
StickyNinjaGlobals.levelCompletionConditions["4"]["2"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["4"]["3"]=["enemies","timer,120"];
StickyNinjaGlobals.levelCompletionConditions["4"]["4"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["4"]["5"]=["enemies", "smashall"];

//TODO -- REMAINING 4 Days
StickyNinjaGlobals.levelCompletionConditions["5"]={};
StickyNinjaGlobals.levelCompletionConditions["5"]["1"]=["enemies", "treasuries", "smashall"];
StickyNinjaGlobals.levelCompletionConditions["5"]["2"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["5"]["3"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["5"]["4"]=["enemies","timer,35"];
StickyNinjaGlobals.levelCompletionConditions["5"]["5"]=["timer,70"];

StickyNinjaGlobals.levelCompletionConditions["6"]={};
StickyNinjaGlobals.levelCompletionConditions["6"]["1"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["6"]["2"]=["treasuries", "timer,90"];
StickyNinjaGlobals.levelCompletionConditions["6"]["3"]=["timer,50"];
StickyNinjaGlobals.levelCompletionConditions["6"]["4"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["6"]["5"]=["enemies"];

StickyNinjaGlobals.levelCompletionConditions["7"]={};
StickyNinjaGlobals.levelCompletionConditions["7"]["1"]=["treasuries", "timer,130"];
StickyNinjaGlobals.levelCompletionConditions["7"]["2"]=["combo"];
StickyNinjaGlobals.levelCompletionConditions["7"]["3"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["7"]["4"]=["treasuries", "timer,70"];
StickyNinjaGlobals.levelCompletionConditions["7"]["5"]=["enemies"];

StickyNinjaGlobals.levelCompletionConditions["8"]={};
StickyNinjaGlobals.levelCompletionConditions["8"]["1"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["8"]["2"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["8"]["3"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["8"]["4"]=["enemies"];
StickyNinjaGlobals.levelCompletionConditions["8"]["5"]=["enemies"];
// Award Score
StickyNinjaGlobals.awardScore={};
//Day 1
StickyNinjaGlobals.awardScore["1"]={};
StickyNinjaGlobals.awardScore["1"]["1"]=["5,10"];
StickyNinjaGlobals.awardScore["1"]["2"]=["8,13"];
StickyNinjaGlobals.awardScore["1"]["3"]=["9,14"];
StickyNinjaGlobals.awardScore["1"]["4"]=["13,18"];
StickyNinjaGlobals.awardScore["1"]["5"]=["18,23"];

StickyNinjaGlobals.awardScore["2"]={};
StickyNinjaGlobals.awardScore["2"]["1"]=["10,15"];
StickyNinjaGlobals.awardScore["2"]["2"]=["12,17"];
StickyNinjaGlobals.awardScore["2"]["3"]=["100,200"];
StickyNinjaGlobals.awardScore["2"]["4"]=["15,20"];
StickyNinjaGlobals.awardScore["2"]["5"]=["15,20"];


StickyNinjaGlobals.awardScore["3"]={};
StickyNinjaGlobals.awardScore["3"]["1"]=["10,12"];
StickyNinjaGlobals.awardScore["3"]["2"]=["15,20"];
StickyNinjaGlobals.awardScore["3"]["3"]=["10,15"];
StickyNinjaGlobals.awardScore["3"]["4"]=["25,30"];
StickyNinjaGlobals.awardScore["3"]["5"]=["100,200"];

StickyNinjaGlobals.awardScore["4"]={};

StickyNinjaGlobals.awardScore["4"]["1"]=["100,200"];
StickyNinjaGlobals.awardScore["4"]["2"]=["20,25"];
StickyNinjaGlobals.awardScore["4"]["3"]=["10,12"];
StickyNinjaGlobals.awardScore["4"]["4"]=["30,35"];
StickyNinjaGlobals.awardScore["4"]["5"]=["10,12"];


StickyNinjaGlobals.awardScore["5"]={};

StickyNinjaGlobals.awardScore["5"]["1"]=["10,12"];
StickyNinjaGlobals.awardScore["5"]["2"]=["21,26"];
StickyNinjaGlobals.awardScore["5"]["3"]=["26,31"];
StickyNinjaGlobals.awardScore["5"]["4"]=["100,200"];
StickyNinjaGlobals.awardScore["5"]["5"]=["100,200"];


StickyNinjaGlobals.awardScore["6"]={};

StickyNinjaGlobals.awardScore["6"]["1"]=["20,25"];
StickyNinjaGlobals.awardScore["6"]["2"]=["10,12"];
StickyNinjaGlobals.awardScore["6"]["3"]=["10,12"];
StickyNinjaGlobals.awardScore["6"]["4"]=["12,17"];
StickyNinjaGlobals.awardScore["6"]["5"]=["17,22"];


StickyNinjaGlobals.awardScore["7"]={};

StickyNinjaGlobals.awardScore["7"]["1"]=["100,200"];
StickyNinjaGlobals.awardScore["7"]["2"]=["100,200"];
StickyNinjaGlobals.awardScore["7"]["3"]=["50,60"];
StickyNinjaGlobals.awardScore["7"]["4"]=["100,200"];
StickyNinjaGlobals.awardScore["7"]["5"]=["54,60"];


StickyNinjaGlobals.awardScore["8"]={};

StickyNinjaGlobals.awardScore["8"]["1"]=["10,12"];
StickyNinjaGlobals.awardScore["8"]["2"]=["35,40"];
StickyNinjaGlobals.awardScore["8"]["3"]=["10,12"];
StickyNinjaGlobals.awardScore["8"]["4"]=["10,12"];
StickyNinjaGlobals.awardScore["8"]["5"]=["10,12"];

StickyNinjaGlobals.enabledebugMode=false;
StickyNinjaGlobals.enableLogs= false;

StickyNinjaGlobals.currentVersion = '3.0';
StickyNinjaGlobals.showVersion = true;

//turn on and off the console logging.
if (!StickyNinjaGlobals.enableLogs) {
    console.log = function() {}
}

function resetCloudImages() {
	var key;		
	for(key in StickyNinjaGlobals.cloudImages){
		for (var cloudIndex=0;cloudIndex<StickyNinjaGlobals.cloudImages[key].length;cloudIndex++) {
			(StickyNinjaGlobals.cloudImages[key])[cloudIndex].shown=false;
		}
	}
}