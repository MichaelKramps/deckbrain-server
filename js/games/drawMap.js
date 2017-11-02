var drawMap = {};

module.exports = drawMap;

var $ = require("jquery");
var draft = require("./draft.js");
var data = require("./data.js");
var utils = require("./utils.js");

var clearScreen = function(){
	$(".enemy-dashboard").empty();
	$(".my-dashboard").empty();
	$("#title").empty();
	$("#cards").empty();
};

var isBetterUnlockCode = function(unlockCode){
	var currentUnlockCode = utils.getUnlockCode();
	if (currentUnlockCode >= unlockCode){ // we already have a better unlock code
		return false;
	} else { // we just got a better unlock code
		return true;
	}
};

var updateUnlockCode = function(unlockCode){
	if (isBetterUnlockCode(unlockCode)){
		utils.setUnlockCode(unlockCode);
	}
};

drawMap.draw = function(levels, unlockCode){
	clearScreen();
	
	updateUnlockCode(unlockCode);
	
	$("#title").append("Unlocked Levels");
	
	for (var i = 0; i < unlockCode; i++) {
		var thisLevel = levels[i];
		console.log(thisLevel);
		$("#cards").append("<div id='l" + i + "'>" + thisLevel.name + "</div>").find("#l" + i).on("click", function(){
			var id = $(this).attr("id");
			var num = id[1];
			utils.setLevel(num);
			draft(data.availableChoices);
		});
	}
};