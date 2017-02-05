const CW = 1000;
const CH = 500;
var w = 25;
var h = 100;
var x1 = 100;
var x2 = 900;
const PELOTAX = (CW-w) /2;
const POSICIONY = (CH-h)/2;
const PELOTAY = (CH-w )/2;
var y1 = POSICIONY;
var y2 = POSICIONY;
var y3 = PELOTAY;
var x3 =PELOTAX;
const SPEED = 0
var velocidad = SPEED;




function lienzo(){
    var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "black";
    ctx.fillRect(0,0, 1000, 500);
    
}


var jugador1 = function(){
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
	ctx.fillStyle = "blue";
    ctx.fillRect(x1,y1,w,h);
    console.log("jugador1")
    console.log("y1: " + y1 + " x1: " + x1);
    
        
    }
    


function jugador2(){
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "orange";
    ctx.fillRect(x2,y2,w,h);
	console.log("jugador2");
    console.log("y2: " + y2 + " x2: " + x2);
    
    
}

function pelota(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(x3,y3,w,w);
	console.log("pelota");
    console.log("x3: " + x3, "y3 " + y3);
    
}   

 function moveabajo(){
    y1 += 10;
    if ( y1 >= CH - h) {
        y1 = CH - h;
    }
    draw();
 }   
    
function movearriba(){
    y1 -= 10;
    if (y1 <= 0){
        y1 = 0;
    }
    draw();
}
   
function timer(){
    x3 += velocidad;
    if (x3 <= x2+w && y3<= y2+h && x2<= x3+w && y2<= y3+w){
        velocidad = velocidad * -1
        x3 += velocidad;
    }
    if (x3 <= x1+w && y3 <= y1+h && y1<= y3+w){
        velocidad = velocidad * -1;
        x3 += velocidad;
        
    }
    if (x3 >= CW){
        initcanvas();
}
    if(x3 <= 0){
        initcanvas();
    } 
    draw();
    
}
function draw(){
    lienzo();
    jugador1();
    jugador2();
    pelota();
    console.log(x3);
    console.log(x2);
    console.log(x1);
}
function initcanvas() {
    y1 = POSICIONY;
    Y2 = POSICIONY
    y3 = PELOTAY;
    x3 = PELOTAX;
    draw();
    velocidad = -1;
    
}
window.onload = function(){
    window.setInterval(timer, 10);
}

 
   
