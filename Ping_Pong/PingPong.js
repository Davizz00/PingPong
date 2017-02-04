var canvas = document.getElementById("myCanvas");

var wc = 1000;
var hc = 500;
var w = 25;
var h = 100;
var x1 = 100;
var x2 = 900;
var x3 = (wc-w) /2;
var y1 = (hc-h)/2;
var y2 = (hc-h)/2;
var y3 = (hc-w)/2;

function lienzo(){
    var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "black";
    ctx.fillRect(0,0, 1000, 500);
    ctx.strike
}


var jugador1 = function(){
    
    var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "blue";
    ctx.fillRect(x1,y1,w,h);
    console.log("jugador1")
    console.log("y1: " + y1)
    
        
    }
    


function jugador2(){
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "orange";
    ctx.fillRect(x2,y2,w,h);
	console.log("jugador2");
    
}

function pelota(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(x3,y3,w,w);
	console.log("pelota");
    
}   

 function moveabajo(){
    
    initcanvas();
    
    y1 += 10;
    
 }   
    
function movearriba(){
    
    y1 -= 10;
    initcanvas();
    if (y1 == 0) {
        y1 = 0;
    }
    
    
 }
   

function draw(){
    jugador1();
    jugador2();
    pelota();
}
function initcanvas() {
    lienzo();
    draw();
    
}

 
   
