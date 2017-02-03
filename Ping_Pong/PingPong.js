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


function jugador1(){
    
    var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "blue";
    ctx.fillRect(x1,y1,w,h);
    move();
    
    
        
}
function jugador2(){
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "orange";
    ctx.fillRect(x2,y2,w,h);
	console.log("adios");
    
}

function pelota(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(x3,y3,w,w);
	console.log("tsss");
    
}   

    
    
function move(){
    y1 += 10;
    
    console.log(y1);
    
      
}
   

function initcanvas(){
    jugador1();
    jugador2();
    pelota();
    window.setInterval(move,1000);
    
    
 }
 
 
   
