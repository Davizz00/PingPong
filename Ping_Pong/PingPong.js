function jugador1(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(100, 250, 20, 100);
}
function jugador2(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(900, 250, 20, 100);
}

function pelota(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(495, 245, 10, 10);
}
function initcanvas(){
    window.onload = jugador1;
    window.onload = jugador2;
    window.onload = pelota;
    
}
