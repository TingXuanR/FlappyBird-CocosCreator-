// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        ground1: cc.Node,
        ground2: cc.Node,
        speed: 100
    },

    onLoad() {
        this.ground1 = this.node.getChildByName("Ground1");
        this.ground2 = this.node.getChildByName("Ground2");
    },

    start() {
        
    },

    update(dt) {
        this.ground1.x -= dt * this.speed;
        this.ground2.x -= dt * this.speed;　
        if(this.ground1.x < -this.ground1.width/4)
        {
            this.ground1.x = this.ground2.x + this.ground1.width/2 - 5;
        }
        if(this.ground2.x < -this.ground1.width/4)
        {
            this.ground2.x = this.ground1.x + this.ground1.width/2 - 5;
        }
     },
});
