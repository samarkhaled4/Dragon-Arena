const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = 1279;
canvas.height = 565;

const keys = [];

const player = {
    x:200,
    y:200,
    width: 96,
    height: 96,
    framex:0,
    framey:0,
    speed:4,
    moving:false
}

const playersprite = new Image();
playersprite.src = "leviathan.png"
const obstacle = new Image();
obstacle.src="Obstcle.png"

function drawsprite(img,sx,sy,sw,sh,dx,dy,dw,dh){
    ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh)
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawsprite(playersprite,player.width*player.framex,player.height*player.framey,player.width,player.height,player.x,player.y,player.width,player.height)
    drawsprite(obstacle,0,0,46,60,1000,400,46,60)
    drawsprite(obstacle,184,0,46,60,100,300,88,99)
    drawsprite(obstacle,46,0,46,60,500,378,70,70)
    drawsprite(obstacle,92,0,46,60,591,451,85,106)
    drawsprite(obstacle,138,0,46,60,323,166,76,106)
    drawsprite(obstacle,184,0,46,60,1120,123,97,78)
    drawsprite(obstacle,230,0,46,60,810,450,81,105)
    moveplayer();
    requestAnimationFrame(animate)
}
animate();

window.addEventListener("keydown",function(e){
    keys[e.which] = true;
    console.log(keys);
})
window.addEventListener("keyup",function(e){
    delete keys[e.which];
})


function moveplayer(){
    if (keys[38] && player.y>-16){
        player.y -= player.speed;
        player.framey = 3;
    }

    if (keys[37] && player.x>0){
        player.x -= player.speed;
        player.framey = 1;
    }

    if (keys[40] &&  player.y<canvas.height - player.height){
        player.y += player.speed;
        player.framey = 0;
    }

    if (keys[39] && player.x<canvas.width - player.width){
        player.x += player.speed;
        player.framey = 2;
    }
}