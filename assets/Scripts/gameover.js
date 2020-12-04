// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
let globalVar = require("globalVar");
cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.scoreLabel = this.node.getChildByName("Score");
        this.scoreLabel.getComponent(cc.Label).string = globalVar.score.toString();
    },

    // update (dt) {},
});
