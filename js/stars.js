/**
 * Created by my4637275 on 2017/1/20.
 */
var starObj = function () {
    this.x;
    this.y;
};
starObj.prototype.init = function () {
    this.x = Math.random()*600+100;
    this.y = Math.random()*300+150;
};
starObj.prototype.draw = function () {
    ctx.drawImage(starPic,this.x,this.y);
};


function drawStars() {
    for(var i=0;i<num;i++){
        stars[i].draw();
    }
}