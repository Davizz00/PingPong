const CW = 1000;    // canvas weight 
const CH = 500; // canvas height
var w = 25;
var w3 = 12.5     // acho de las palas y pelota, y altura de pelota
var h = 100;    //altura de las palas
var x1 = 100;    // posción  inicial x de la pala 1
var x2 = 900;   // posición inicila x de la pala 2
const PELOTAX = (CW-w3) /2;//
const POSICIONY = (CH-h)/2;
const PELOTAY = (CH-w3 )/2;
var y1 = POSICIONY;
var y2 = POSICIONY;
var y3 = PELOTAY;
var x3 =PELOTAX;
var vx = 0;
var vy = 0;
var puntuacion1 = 0 // puntuacion jugador 1 
var puntuacion2 = 0 // puntuacion jugador2 
const DIFERENCIA = y3 - y2; 
 




function lienzo(){
    var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "black";
    ctx.fillRect(0,0, 1000, 500);
}


var jugador1 = function(){
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
	ctx.fillStyle = "green";
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
    ctx.beginPath();
	ctx.arc(x3,y3,w3,0,2*Math.PI);
	ctx.fillStyle = "white";
	ctx.stroke();
	ctx.fill();
	
	console.log("pelota");
    console.log("x3: " + x3, "y3 " + y3);
}   
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 87: // letra w la pala1 se desplaza hacia arriba
            y1 -= 20;
			if (y1 <= 0){
			y1 = 0;
			}
            break;
        case 83: // letra s la pala1 se desplaza hacia abajo
            y1 += 20;
			if ( y1 >= CH - h) {
			y1 = CH - h;
            }
            break;
        case 38: // flecha hacia arriba para que jugador2 se desplace hacia arrriba
            y2 -= 20;
			if (y2 <= 0){
			y2 = 0;
			} 
            break;
        case 40: // flecha hacia abajo para que jugador2 se desplace hacia abajo
            y2 += 20;
			if ( y2 >= CH - h) {
			y2 = CH - h;
			}
            break;
    }
	draw();
};
 
   
function timer(){
	velocidad();
    x3 += vx;
	y3 += vy;
    
	
    if (x3 <= x2+w && y3<= y2+h && x2<= x3+w3 && y2<= y3+w3){ //if para colosion pelota con jugador2
		//vx +=0.1;
		vx = vx * -1;
		x3 += vx;
        
        var diferencia_pala2 = y3-y2 - DIFERENCIA;
        vy += diferencia_pala2/12;
        console.log("posicion y2 " + y2);
        console.log("posicio_y3" + y3)
        
		
   }
   
   
    if (x3 <= x1 + w3 + w && y3 <= y1+h && x1<= x3+w && y1<= y3+w){ //if para colosion pelota con jugador1 
		vx = vx * -1;
		//vx += 0.1;
        var diferencia_pala1 = y3-y1 -DIFERENCIA
        vy += diferencia_pala1/12 
        x3 += vx;
    }
    
    if (y3 >= CH-w3){ // colision pelota con parte inferior del canvas
        vy = vy *-1;
        y3 += vy;
    }
    
    if (y3 <= w3){ // colision pelota con la parte superior del canvas
        vy= vy * -1;
        y3 += vy;
    }
    if (x3 >= CW){
        puntuacion1 += 1;
        var score1 = document.getElementById("score1");
        score1.value = puntuacion1
        initcanvas();
    }
    if(x3 <= 0){
        puntuacion2 += 1 
        var score2 = document.getElementById("score2")
        score2.value = puntuacion2;
        initcanvas();
    }     
    draw();
}
function velocidad(){
	if (y3<= y1+50 && y1<y3+w && x3 <= x1 + w3 + w && x1<= x3+w){
		vy = 1;
		console.log("EFRERetreggdfgfg");
	}
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
    y2 = POSICIONY;
    y3 = PELOTAY;
    x3 = PELOTAX;
    draw();
    vx = 3;
    if ((Math.random() -0.5) <=0){
        vx = vx *-1;
    } 
    
	vy = (Math.random() -0.5) * 3 ;
    
	
	
    
}
window.onload = function(){
    window.setInterval(timer, 10);
}

 
   
