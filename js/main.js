const squareHeight = 200;
const squareWidth = 200;

function init() {
    var stage = new createjs.Stage("myCanvas");
    var square = drawSquare();

    stage.addChild(square);
    stage.update();
}

function drawSquare() {
     var graphics = new createjs.Graphics().setStrokeStyle(5).beginStroke("rgba(20,20,20,1)")
     graphics.beginFill(randomColor()).rect(5,5,squareWidth,squareHeight);
     var shape = new createjs.Shape(graphics);
 return shape;
}

function randomColor() {
     var num1 = Math.floor(Math.random()*255);
     var num2 = Math.floor(Math.random()*255);
     var num3 = Math.floor(Math.random()*255);
     return "rgba("+num1+","+num2+","+num3+",1)";
 
}
