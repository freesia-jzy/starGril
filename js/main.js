/**
 * Created by my4637275 on 2017/1/20.
 */
var can;
var ctx;

var w;
var h;
var girlPic = new Image();
var starPic = new Image();
var num = 60;
var stars = [];

var lastTime;
var deltaTime;

var switchy = false;//判断鼠标是否在图片区域，如果在是true，如果不在是false
var life = 0;

function init() {
    can = document.getElementById("canvas");
    ctx = can.getContext("2d");

    w = can.width;
    h = can.height;

    document.addEventListener("mousemove",mousemove,false);

    girlPic.src = "src/girl.jpg";
    starPic.src = "src/star.png";
    for(var i = 0;i<num;i++){

        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }
    lastTime = Date.now();
    gameloop();


}

document.body.onload=init;

function gameloop() {
   window.requestAnimationFrame(gameloop);

    var now = Date.now();
    deltaTime = now-lastTime;
    lastTime = now;
    drawBackground();
    drawGirl();
    drawStars();
    aliveUpdate();
}
function drawBackground() {
    ctx.fillStyle = "#393550";
    ctx.fillRect(0,0,w,h)
}
function drawGirl() {
    //drawImage(img,x,y,width,height)
    //x轴坐标正方向向右，y轴坐标正方向向下，（0,0）在canvas左上角
    ctx.drawImage(girlPic,100,100,600,400);
}
function mousemove(e) {
    if(e.offsetX||e.layerX){
        var px = e.offsetX ==undefined?e.layerX :e.offsetX;
        var py = e.offsetY == undefined?e.layerY:e.offsetY;

        if(px>100&&px<700&&py>100&&py<500){
            switchy = true;
        }
        else {
            switchy = false;
        }
    }
}