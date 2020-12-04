// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        pipeUp: cc.Prefab,
        pipeDown: cc.Prefab,
        //pipes: [cc.Node],
        pipe1: cc.Node,
        pipe2: cc.Node,

        bird: cc.Node,
        score: 0,
        scoreLabel: cc.Node,
        relativePos: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;

        this.scoreLabel = this.node.getChildByName("Score");
        this.bird = this.node.getChildByName("Bird");
    },

    start() {
        // this.pipes[0]=cc.instantiate(this.pipeUp);
        // this.pipes[0].parent = this.node;
        // this.pipes[1]=cc.instantiate(this.pipeDown);
        // this.pipes[1].parent = this.node;
        // this.pipes[0].x = -20; this.pipes[0].y=150;
        // this.pipes[1].x = 20; this.pipes[1].y=-120;

        this.pipe1 = cc.instantiate(this.pipeUp);
        this.pipe1.parent = this.node;
        this.pipe1.setSiblingIndex(2);
        this.pipe1.x = 260; this.pipe1.y = Math.random() * 80 + 320;//this.pipe1.y = 380;

        this.pipe2 = cc.instantiate(this.pipeDown);
        this.pipe2.parent = this.node;
        this.pipe2.setSiblingIndex(2);
        this.pipe2.x = 260; this.pipe2.y = Math.random() * 80 - 300;//this.pipe2.y = -300;

    },

    update(dt) {

        this.pipe1.x -= dt * 100;
        this.pipe2.x -= dt * 100;
        if (this.pipe1.x - this.bird.x + 40 < 0) {
            if(this.relativePos === 0)
            {
                this.score++;
                this.relativePos = 1;
            }
            this.scoreLabel.getComponent(cc.Label).string = this.score.toString();
        }

        if (this.pipe1.x <= -220) {
            this.pipe1.x = 270;
            this.pipe1.y = Math.random() * 80 + 320;
            this.relativePos = 0;
        }
        if (this.pipe2.x <= -220) {
            this.pipe2.x = 270;
            this.pipe2.y = Math.random() * 80 - 300;
        }
    },
    // addPipeUp(){
    //     this.pipe1 = cc.instantiate(this.pipeUp);
    //     this.pipe1.parent = this.node;
    //     this.pipe1.setSiblingIndex(2);       
    //     this.pipe1.x = 260; this.pipe1.y = Math.random()*80 + 320;//this.pipe1.y = 380;

    // },
    // addPipeDown(){
    //     this.pipe2 = cc.instantiate(this.pipeDown);
    //     this.pipe2.parent = this.node;
    //     this.pipe2.setSiblingIndex(2);
    //     this.pipe2.x = 260; this.pipe2.y = Math.random()*80 - 300;//this.pipe2.y = -300;
    // }

});
