var canvas = document.getElementById("myCanvas");
var widht = 25;
var height = 100;



function jugador1(){
    var canvas = document.getElementById("myCanvas");
	var pala1 = canvas.getContext("2d");
	pala1.fillStyle = "green";
	pala1.fillRect(100,250-(height/2),widht,height);
	console.log("Hola");
    function evento(){
        //window.setInterval(move,1000);
        document.addEventListener("keypress", move);
        function move(){
            var move = {};
            move = pala1.fillRect(100,250-(height/2) + 30,widht,height);
            console.log("move");
            
        }
    move()    
            
    } 
    evento();
    
}
function jugador2(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "orange";
    ctx.fillRect(900 - widht,250-(height/2), widht, height);
	console.log("adios");
}

function pelota(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(500-(widht/2), 250-(widht/2), widht, widht);
	console.log("tsss");
}
function initcanvas(){
    jugador1();
    jugador2();
    pelota();
	console.log("dfdffsf");
   
 }
 
   
