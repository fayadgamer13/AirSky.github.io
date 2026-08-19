var gamesInfo = {};
var info;

var nameOfTheGame = "stickyninja";

gamesInfo[nameOfTheGame] = {};

//console.log(getCookieVal(nameOfTheGame));
if (getCookieVal(nameOfTheGame) != undefined && getCookieVal(nameOfTheGame) != "") {
    info = JSON.parse(getCookieVal(nameOfTheGame));
    
} else {
    info = {};
    info[nameOfTheGame] = {};
	
	info[nameOfTheGame]["cday"]=1;
	info[nameOfTheGame]["clevel"]=1;
	info[nameOfTheGame]["mday"]=1;
	info[nameOfTheGame]["mlevel"]=1;
	info[nameOfTheGame]["completedDay"]=0;
	info[nameOfTheGame]["completedLevel"]=0;
	info[nameOfTheGame]["details"]={};
	info[nameOfTheGame]["details"]["totalscore"] = 0;
	for(var day=1;day<=8;day++) {
		info[nameOfTheGame]["details"][day] ={};
		for(var level=1;level<=5;level++) {
			info[nameOfTheGame]["details"][day][level] = {};
			info[nameOfTheGame]["details"][day][level]["jumps"] = 0;
			info[nameOfTheGame]["details"][day][level]["bestjumps"] = 0;
			info[nameOfTheGame]["details"][day][level]["score"] = 0;
			info[nameOfTheGame]["details"][day][level]["award"] ='';
		}
	}

    setCookieVal(nameOfTheGame, JSON.stringify(info), 30);
}

//console.log(getCookieVal(nameOfTheGame));

window.loadGameInfo = function() {
    var info = JSON.parse(getCookieVal(nameOfTheGame));
    info = info[nameOfTheGame];
    return info;
}

window.updateDay = function(day) {
    var info = JSON.parse(getCookieVal(nameOfTheGame));
    info[nameOfTheGame]["cday"]=day;
	var mday = info[nameOfTheGame]["mday"];
	if (day>mday) {
		info[nameOfTheGame]["mday"]=day;
	}
    setCookieVal(nameOfTheGame, JSON.stringify(info), 30);
}

window.getDay = function() {
    var info = JSON.parse(getCookieVal(nameOfTheGame));
    return info[nameOfTheGame]["cday"];
}

window.updateLevel = function(level) {
    var info = JSON.parse(getCookieVal(nameOfTheGame));
    info[nameOfTheGame]["clevel"]=level;
	var mlevel = info[nameOfTheGame]["mlevel"];
	if (level>mlevel) {
		info[nameOfTheGame]["mlevel"]=level;
	}
    setCookieVal(nameOfTheGame, JSON.stringify(info), 30);
}

window.updateCompleted = function(day,level){
 	var info = JSON.parse(getCookieVal(nameOfTheGame));
	
	if(info[nameOfTheGame]["completedDay"]<day){
	
		info[nameOfTheGame]["completedDay"]=day;
		if(info[nameOfTheGame]["completedLevel"] <=level || info[nameOfTheGame]["completedLevel"]==5){
			info[nameOfTheGame]["completedLevel"] = level;
		}	
	
	}else if(info[nameOfTheGame]["completedDay"]<=day){
	
		if(info[nameOfTheGame]["completedLevel"] <=level || info[nameOfTheGame]["completedLevel"]==5){
			info[nameOfTheGame]["completedLevel"] = level;
		}
	}
		
	setCookieVal(nameOfTheGame, JSON.stringify(info), 30);	
}

window.getCompleted = function(){
    var info = JSON.parse(getCookieVal(nameOfTheGame));
    return info[nameOfTheGame];

} 
window.getLevel = function() {
    var info = JSON.parse(getCookieVal(nameOfTheGame));
    return info[nameOfTheGame]["clevel"];
}
window.updateJumps = function(day, level, numOfJumps) {	
    numOfJumps = (numOfJumps) ? numOfJumps : 0;
    var info = JSON.parse(getCookieVal(nameOfTheGame));
    if (info != undefined) {	

		if(info[nameOfTheGame]["details"][day][level]["bestjumps"]==0){			
			info[nameOfTheGame]["details"][day][level]["bestjumps"] = numOfJumps;
		}
       if (numOfJumps < info[nameOfTheGame]["details"][day][level]["jumps"]) {
		   info[nameOfTheGame]["details"][day][level]["bestjumps"] = numOfJumps;
	   }
            info[nameOfTheGame]["details"][day][level]["jumps"] = numOfJumps;
       
        setCookieVal("stickyninja", JSON.stringify(info), 30);
    }
	//console.log("updateJumps:", info);
}

window.updateScore = function(day, level, score) {
    score = (score) ? score : 0;
    var info = JSON.parse(getCookieVal(nameOfTheGame));
    if (info != undefined) {
        info[nameOfTheGame]["details"][day][level]["score"] = score;
        setCookieVal("stickyninja", JSON.stringify(info), 30);
    }
	//console.log("SCORE UPDATED: updateScore:", info);
}
window.updateTotalScore = function(score) {
    score = (score) ? score : 0;
	var info = JSON.parse(getCookieVal(nameOfTheGame));
	
    if (info != undefined) {
		var storedScore = (info[nameOfTheGame]["details"]["totalscore"])?info[nameOfTheGame]["details"]["totalscore"]:0;
        var totalScore = storedScore + score;
        info[nameOfTheGame]["details"]["totalscore"] = totalScore;
        setCookieVal("stickyninja", JSON.stringify(info), 30);
    }
	//console.log("SCORE UPDATED: updateScore:", info);
}
window.getTotalScore = function() {
	var info = JSON.parse(getCookieVal(nameOfTheGame));
    return info[nameOfTheGame]["details"]["totalscore"];
}

window.getJumps = function(day, level) {
	var info = JSON.parse(getCookieVal(nameOfTheGame));
    return info[nameOfTheGame]["details"][day][level]["jumps"];
}

window.getScore = function(day, level) {
	var info = JSON.parse(getCookieVal(nameOfTheGame));
    return info[nameOfTheGame]["details"][day][level]["score"];
}

window.getBestJumps = function(day, level) {
    var info = JSON.parse(getCookieVal(nameOfTheGame));
    return info[nameOfTheGame]["details"][day][level]["bestjumps"];
}

window.updateAward = function(day,level,award) {
	award = (award) ? award : "";
    var info = JSON.parse(getCookieVal(nameOfTheGame));
    if (info != undefined) {	
	  info[nameOfTheGame]["details"][day][level]["award"] = award;       
        setCookieVal("stickyninja", JSON.stringify(info), 30);
    }
}
window.getAward = function(day, level) {
	var info = JSON.parse(getCookieVal(nameOfTheGame));
	if (info != undefined) {
		return info[nameOfTheGame]["details"][day][level]["award"];

	}
}

function setCookieVal(cname, cvalue, exdays) {
	if (typeof(Storage) !== "undefined") {
		// Store
		//console.log("Storing into localstorage");
		localStorage.setItem(cname, cvalue);
	} else {
		// COOKIES
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";";
	}
}

function getCookieVal(cname) {
	
	if (typeof(Storage) !== "undefined") {
		// Retrieve
		//console.log("Fetching from localstorage");
		return localStorage.getItem(cname);
	} else {
		// COOKIES
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

    
}

function checkCookie() {
    var info = getCookieVal("info");
    if (info != "") {
        return info;
    } else {
        setCookieVal("info", info, 30);
    }
}