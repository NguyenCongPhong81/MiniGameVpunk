import { _decorator, Component, Node, Sprite, Button, Label, Vec3, Vec2, log, BlockInputEvents } from 'cc';
const { ccclass, property } = _decorator;
import { eventPrefab } from './pixel';
import { Map } from './Map';

@ccclass('MainGame')
export class MainGame extends Component {
    @property(Sprite)
    note : Sprite = null;
    @property(Sprite)
    exitDialog : Sprite =  null;
    @property(Button)
    btn : Button = null;
    @property(Button)
    btnComfirm : Button = null;
    @property(Button)
    btnExit : Button = null;
    @property(Button)
    btnTest : Button = null;
    @property(Button)
    btnExit2 : Button = null;
    @property(Label)
    lbX : Label = null;
    @property(Label)
    lbY : Label = null;
    @property(Node)
    nodebtn1: Node = null;
    @property(Node)
    nodebtn2: Node = null;
    @property(Node)
    noderesult: Node = null;
    @property(Node)
    noticeDialog: Node = null;
    @property(Label)
    result : Label = null;
    @property(Label)
    resultX : Label = null;
    @property(Label)
    resultY : Label = null;
    @property(Label)
    lbAdm : Label = null;
    @property(Label)
    lbRs : Label = null;
    @property(BlockInputEvents)
    blockScreen: BlockInputEvents =  null;
    
  

    testX : Number = 0;
    testY : Number = 0;

    gameStage: Number = 0; // 0: , 1: started, 2: gameover

    aa = [
        [0, 0, 1],
        [0, 0, 2]
    ];

    public static notice : MainGame = null;
    static MainGame: Sprite;

    onDialogConfirm() {
        if (this.gameStage !== 1) return;
        this.noticeDialog.active = true;
        // this.noticeDialog.active = true;
        // this.note.enabled = true;                    
        // this.exit.enabled = true;
        // this.nodebtn1.active = true;
        // this.nodebtn2.active = true;
        // this.lbX.enabled = true;
        // this.lbY.enabled = true;
        // this.block.enabled = true;

    }
    offDialogConfirm(){
        this.noticeDialog.active = false;
    }
    onSetFlag(){

    }
    offSetFlag(){
        Map.notice1.setFlag.active = false;
        Map.notice1.setFlag1.active = false;
        Map.notice1.setFlag2.active = false;
        Map.notice1.setFlag3.active = false;
    }


    onLoad(){
        MainGame.notice = this;
        this.btn.node.on(Button.EventType.CLICK, this.onClick , this);
        this.btnExit.node.on(Button.EventType.CLICK, this.onbtnExit, this);
        this.btnComfirm.node.on(Button.EventType.CLICK, this.onbtnCom, this);
        this.btnTest.node.on(Button.EventType.CLICK, this.onbtnTest, this);
        this.btnExit2.node.on(Button.EventType.CLICK, this.onbtnExit2, this);

    }
    start() {
        this.noticeDialog.active = false;

        
        // this.note.enabled = false;
        // this.exit.enabled = false;
        // this.nodebtn1.active = false;
        // this.nodebtn2.active = false;
        // this.lbX.enabled = false;
        // this.lbY.enabled = false;
        this.result.enabled = false;
        this.offSetFlag();
        this.noderesult.active = false;
        this.blockScreen.enabled = false;
        this.gameStage = 1;
        // Map.notice1.initMap(this.aa);
        
        

    }

    update(deltaTime: number) {
        
    }
    onClick(button: Button){
        this.noticeDialog.active = false;
        this.offSetFlag();

        // this.note.enabled = false;
        // this.exitDialog.enabled = false;
        // this.nodebtn1.active = false;
        // this.nodebtn2.active = false;
        // this.lbX.enabled = false;
        // this.lbY.enabled = false;
        // Map.notice1.setFlag.active = false;
        // Map.notice1.setFlag1.active = false;           
        // Map.notice1.setFlag2.active = false;           
        // Map.notice1.setFlag3.active = false; 
        this.blockScreen.enabled = false;
        Map.notice1.countflag = 0;


    }
    onbtnExit(button: Button){
        this.noticeDialog.active = false;
        this.offSetFlag();
        // this.note.enabled = false;
        // this.exitDialog.enabled = false;
        // this.nodebtn1.active = false;
        // this.nodebtn2.active = false;
        // this.lbX.enabled = false;
        // this.lbY.enabled = false;
        // Map.notice1.setFlag.active = false;
        // Map.notice1.setFlag1.active = false;           
        // Map.notice1.setFlag2.active = false;           
        // Map.notice1.setFlag3.active = false; 
        this.blockScreen.enabled = false;
        Map.notice1.countflag = 0;
        eventPrefab.idselect.spawmflag.enabled = false;

        
    }
    onbtnCom(button: Button){
        // eventPrefab.idselect.spawmflag.enabled = true;
        

        if(Map.notice1.countflag === 1){
            Map.notice1.setFlag.active = true;
        }else if(Map.notice1.countflag === 2){
            Map.notice1.setFlag.active = true;
            Map.notice1.setFlag1.active = true;
        }else if(Map.notice1.countflag === 3){
            Map.notice1.setFlag.active = true;
            Map.notice1.setFlag1.active = true;
            Map.notice1.setFlag2.active = true;
        }else{
            Map.notice1.setFlag.active = true;
            Map.notice1.setFlag1.active = true;
            Map.notice1.setFlag2.active = true;
            Map.notice1.setFlag3.active = true;
        }
        this.noticeDialog.active = false;
        
        // this.note.enabled = false;
        // this.exitDialog.enabled = false;
        // this.nodebtn1.active = false;
        // this.nodebtn2.active = false;
        // this.lbX.enabled = false;
        // this.lbY.enabled = false;
        Map.notice1.setFlag.setPosition(0,0);
        this.result.enabled = true;
        this.result.string = this.lbX.string + this.lbY.string;
        this.blockScreen.enabled = false;

        
        
    }
    onbtnTest(button: Button) {
        this.gameStage = 2;
        this.blockScreen.enabled = true;
        this.resultY.string = (Math.floor(Math.random() * 34) + 1).toString();
        // this.resultY.string = '1';
        let setYrs = String.fromCharCode(this.getRNDInter());
        this.resultX.string = setYrs.toString();
        // this.resultX.string = 'A';
        this.noderesult.active = true;
        if(this.lbX.string === this.resultX.string && this.lbY.string === this.resultY.string){
            this.lbRs.string = 'You Win !';
        }
        else{
            this.lbRs.string = 'You Lost !';
        }
        
        


    }
    onbtnExit2(button: Button) {
        this.noderesult.active = false;
        this.blockScreen.enabled = false;
    }
    getRNDInter(min = 65, max = 90) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        
    }
 
    
    
}

