import { _decorator, Component, Node, Sprite, Button, Label, Vec3, Vec2, log, BlockInputEvents } from 'cc';
const { ccclass, property } = _decorator;
import { eventPrefab } from './pixel';
import { Map } from './Map';

@ccclass('MainGame')
export class MainGame extends Component {
    @property(Sprite)
    note : Sprite = null;
    @property(Sprite)
    exit : Sprite =  null;
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
    block: BlockInputEvents =  null;
    
  

    testX : Number = 0;
    testY : Number = 0;

    

    public static notice : MainGame = null;
    static MainGame: Sprite;

    onLoad(){
        MainGame.notice = this;
        this.btn.node.on(Button.EventType.CLICK, this.onClick , this);
        this.btnExit.node.on(Button.EventType.CLICK, this.onbtnExit, this);
        this.btnComfirm.node.on(Button.EventType.CLICK, this.onbtnCom, this);
        this.btnTest.node.on(Button.EventType.CLICK, this.onbtnTest, this);
        this.btnExit2.node.on(Button.EventType.CLICK, this.onbtnExit2, this);

    }
    start() {
        
        this.note.enabled = false;
        this.exit.enabled = false;
        this.nodebtn1.active = false;
        this.nodebtn2.active = false;
        this.lbX.enabled = false;
        this.lbY.enabled = false;
        this.result.enabled = false;
        Map.notice1.setFlag.active = false;
        Map.notice1.setFlag1.active = false;
        Map.notice1.setFlag2.active = false;
        Map.notice1.setFlag3.active = false;
        this.noderesult.active = false;
        this.block.enabled = false;
        
        

    }

    update(deltaTime: number) {
        
    }
    onClick(button: Button){
        this.note.enabled = false;
        this.exit.enabled = false;
        this.nodebtn1.active = false;
        this.nodebtn2.active = false;
        this.lbX.enabled = false;
        this.lbY.enabled = false;
        Map.notice1.setFlag.active = false;
        this.block.enabled = false;

    }
    onbtnExit(button: Button){
        this.note.enabled = false;
        this.exit.enabled = false;
        this.nodebtn1.active = false;
        this.nodebtn2.active = false;
        this.lbX.enabled = false;
        this.lbY.enabled = false;
        Map.notice1.setFlag.active = false;
        Map.notice1.setFlag1.active = false;           
        Map.notice1.setFlag2.active = false;           
        Map.notice1.setFlag3.active = false; 
        this.block.enabled = false;
        Map.notice1.countflag = 0;
        
    }
    onbtnCom(button: Button){
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
        
        this.note.enabled = false;
        this.exit.enabled = false;
        this.nodebtn1.active = false;
        this.nodebtn2.active = false;
        this.lbX.enabled = false;
        this.lbY.enabled = false;
        Map.notice1.setFlag.setPosition(0,0);
        // Map.notice1.setFlag1.setPosition(0,0);
        this.result.enabled = true;
        this.result.string = this.lbX.string + this.lbY.string;
        this.block.enabled = false;
        // eventPrefab.idselect.spawmflag.enabled = true;

        
    }
    onbtnTest(button: Button){
        this.block.enabled = true;
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
            this.lbRs.string = 'You Lost !'
        }
        
        


    }
    onbtnExit2(button: Button){
        this.block.enabled = false;
        this.noderesult.active = false;
    }
    getRNDInter(min = 65, max = 90){
        return Math.floor(Math.random()* (max - min + 1)) + min;
        
    }
 
    
    
}

