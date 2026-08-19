function GameText() {

};

GameText.prototype = {

};

/*GameText.CreateStandardTextFromKey = function(game, key, styleType) {

    var textObj = game.level.getGameText(key);
    var xPos = game.level.getPosition(key + "X");
    var yPos = game.level.getPosition(key + 'Y');
    //	use textObj.size instead of 30
    var textSprite = GameText.CreateStandardText(game, textObj.text, 18, styleType, xPos, yPos);
    return textSprite;
};*/

GameText.CreateStandardText = function(game, content, fontSize, styleType, xPos, yPos, color) {
    color = (color) ? color : "";
    var string = "65px BPreplay Bold";
    var style;
    var text;
    if (color != "" && color != undefined) {
        style = {
            font: string,
            fill: "#FFFFFF",
            wordWrap: false,
            align: "left"
        };
        text = game.add.text(xPos, yPos, content, style);
        text.fontSize = 25;
        text.fill = color;
        text.fontWeight = 'bold';
        text.stroke = "black";
        text.strokeThickness = 2;
    } else {
        style = {
            font: string,
            fill: "#FFFFFF"
        };
        var text = game.add.text(xPos, yPos, content, style);
        text.fontSize = 20;
        text.fontWeight = 'bold';
        if (styleType == 1) {
            text.fill = "#FFFFFF";
        } else if (styleType == 2) {
            text.fill = "#FFFFFF";
        } else {
            text.fill = "#FFFFFF";
        }
    }
    return text;
};

GameText.CreateStatisticsText = function(game, content, xPos, yPos, styleObject) {
    var string = "65px BPreplay Bold";
    var style;
    var text;
    if (styleObject.color != "" && styleObject.color != undefined) {
        style = {
            font: string,
            fill: styleObject.color,
            wordWrap: false,
            align: "left"
        };

        text = game.add.text(xPos, yPos, content, style);
        text.fontSize = styleObject.fontSize;
        text.fill = styleObject.color;
        if (styleObject.strokeColor != "" && styleObject.strokeColor != undefined) {
            text.stroke = styleObject.strokeColor;
        }
        if (styleObject.strokeThickness > 0) {
            text.strokeThickness = styleObject.strokeThickness;
        }
    } else {}
    return text;
};

GameText.CreateBitmapText = function(game, content, xPos, yPos,font,fontsize) {
  var bitMapText;
  bitMapText = game.add.bitmapText(xPos,yPos,font,fontsize);
  bitMapText.font = font;
  bitMapText.fontSize = fontsize;
  bitMapText.fontWeight = "bold";
  bitMapText.text = content;
  return bitMapText;  
};