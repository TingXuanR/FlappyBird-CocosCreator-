// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       touchN: cc.Node,
       speed: 0,
       accel: -60,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.touchN = cc.find("Canvas/TouchN");
        this.touchN.on(cc.Node.EventType.TOUCH_START, this.onTouchstart, this);
    },

    start () {
        let ani = this.getComponent(cc.Animation);
        ani.play("birds");
    },

    update (dt) {
        this.speed += this.accel*dt;
        this.node.y += this.speed*0.2;
        this.node.angle = this.speed*0.5;
    },

    onTouchstart(Event) {
        this.speed=20;
    },
    onCollisionEnter(other, self){
        console.log('on collision enter');
        cc.director.loadScene("Over");
    },

});
