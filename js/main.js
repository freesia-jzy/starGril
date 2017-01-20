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

function init() {
    can = document.getElementById("canvas");
    ctx = can.getContext("2d");

    w = can.width;
    h = can.height;
    girlPic.src = "src/girl.jpg";
    starPic.src = "src/star.png";
    for(var i = 0;i<num;i++){

        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }
    gameloop();


}

document.body.onload=init;

function gameloop() {
   window.requestAnimationFrame(gameloop);
    drawBackground();
    drawGirl();
    drawStars();
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