/**
 * Created by my4637275 on 2017/1/20.
 */
var starObj = function () {
    this.x;
    this.y;

    this.picNo;
    this.timer;

    this.xSpd;
    this.ySpd;
};
starObj.prototype.init = function () {
    this.x = Math.random()*600+100;
    this.y = Math.random()*300+150;

    //this.picNo = 0;
    this.picNo = Math.floor(Math.random()*7);
    this.timer = 0;

    this.xSpd = Math.random()*3-1.5;
    this.ySpd = Math.random()*3-1.5;
};
starObj.prototype.update = function () {
    this.x += this.xSpd*deltaTime*0.004;
    this.y += this.ySpd*deltaTime*0.004;

    if(this.x<100||this.x>700){
        this.init();
        return;
    }
    if(this.y<100||this.y>500){
        this.init();
        return;
    }

    this.timer += deltaTime;
    if(this.timer >50){
        this.picNo += 1;
        this.picNo %=7;
        this.timer = 0;
    }


};
starObj.prototype.draw = function () {
    ctx.save();

    ctx.globalAlpha = life;//globalAlpha是全局作用域，对所有画布上元素都有影响，但是
    //如果加上save()和restore()函数，就只在这两者中间的元素的起作用

    ctx.drawImage(starPic,this.picNo*7,0,7,7,this.x,this.y,7,7);

    ctx.restore();
};


function drawStars() {
    for(var i=0;i<num;i++){
        stars[i].update();
        stars[i].draw();
    }
}
function aliveUpdate() {
    if(switchy){
        //show stars
        life += 0.03*deltaTime*0.05;
        if(life >1){
            life = 1;
        }
    }
    else{
        //hide stars
        life -= 0.03*deltaTime*0.05;
        if(life<0){
            life = 0;
        }

    }
}