const squareHeight = 100;
const squareWidth = 100;

const squareGap = 10;
var column = 8;
var row = 5;

var squarePlacement = [];
var totalTiles = 40;



function init() {
 
 var stage = new createjs.Stage("myCanvas");
 var square;
 randomDoubleColor();
for(i=0; i < squarePlacement.length; i++) {
  
  
  square = drawSquare();
  square.x = (squareWidth+squareGap)*(squarePlacement[i]%column);
  square.y = (squareHeight+squareGap)*Math.floor(squarePlacement[i]/column); 
  stage.addChild(square);
  stage.update();
  
 }
}

var temp;
var genOnce = false;
function drawSquare() {
    var color = randomColor();
     var graphics = new createjs.Graphics().setStrokeStyle(5).beginStroke("rgba(20,20,20,1)")
      if(!genOnce) {
          graphics.beginFill(color).rect(5,5,squareHeight,squareWidth);
          temp = color;
          genOnce = true;
         }else {
          graphics.beginFill(temp).rect(5,5,squareHeight,squareWidth);
          genOnce = false;
         }
     var shape = new createjs.Shape(graphics);
 return shape;
}

function randomColor() {
     var num1 = Math.floor(Math.random()*255);
     var num2 = Math.floor(Math.random()*255);
     var num3 = Math.floor(Math.random()*255);
     return "rgba("+num1+","+num2+","+num3+",1)";
 
}


// function to generate array with all the squares index
function randomDoubleColor() {
 for(i=0; i<totalTiles;i++) {
  squarePlacement.push(i);
 }
 
 squarePlacement = shuffleArray(squarePlacement);
 
 return squarePlacement;
}

// function of the array random shuffling
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}




