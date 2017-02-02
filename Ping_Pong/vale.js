var canvas = document.getElementById("myCanvas");
var W= 1000, H= 500;
var pala1,pala2,bola;

pala1 = {
    x:100,
    y: (H-100) / 2,
    w:25, 
    h:100,
    dibujar: function(){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.w ,this.h);
        if (document.addEventListener("keypress",move1)== true) {
            move1();
            
        };
        
    }
    
};
pala2 = {
    x: 900 - (25/2),
    y: (H-100) / 2,
    w: 25,
    h:100,
    dibujar: function(){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "orange";
        ctx.fillRect(this.x, this.y, this.w ,this.h);
    }
    
        
 };
bola = {
    x: 500 - (25/2),
    y: 250 - (25/2), 
    w: 25,
    h: 25,
    dibujar: function(){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.w ,this.h);
        console.log("bola")
        
    }   
};

function dibujar(){
    pala1.dibujar();
    pala2.dibujar();
    bola.dibujar();
   
    console.log("hola");
}

    
function move1(){
    pala1.y += 5;
    console.log("mover5");
}


function initcanvas(){
    dibujar();
    
	console.log("dfdffsf");
}