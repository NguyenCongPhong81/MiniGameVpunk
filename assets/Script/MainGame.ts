import { _decorator, Component, Node, Sprite, Button, Label, Vec3, Vec2, log, BlockInputEvents, instantiate, Prefab, sys } from 'cc';
const { ccclass, property } = _decorator;
import { eventPrefab } from './pixel';
import { Map } from './Map';

@ccclass('MainGame')
export class MainGame extends Component { 
    @property(Sprite)
    public note : Sprite = null;
    @property(Sprite)
    public exitDialog : Sprite =  null;
    @property(Button)
    public btn : Button = null;
    @property(Button)
    public btnComfirm : Button = null;
    @property(Button)
    public btnExit : Button = null;
    @property(Button)
    public btnTest : Button = null;
    @property(Button)
    public btnExit2 : Button = null;
    @property(Label)
    public lbX : Label = null;
    @property(Label)
    public lbY : Label = null;
    @property(Node)
    public nodebtn1: Node = null;
    @property(Node)
    public nodebtn2: Node = null;
    @property(Node)
    public noderesult: Node = null;
    @property(Node)
    public noticeDialog: Node = null;
    @property(Label)
    private result : Label = null;
    @property(Label)
    private resultX : Label = null;
    @property(Label)
    private resultY : Label = null;
    @property(Label)
    private totalUser : Label = null;
    @property(Label)
    private timeSecond : Label = null;
    @property(Label)
    private lbAdm : Label = null;
    @property(Label)
    private lbRs : Label = null;
    @property(BlockInputEvents)
    public blockScreen: BlockInputEvents =  null;
    

    private  countUser : number = 0;
  

    
    public idflag : Number = 0;
    public gameStage: Number = 0; // 0: , 1: started, 2: gameover
    public second = 300;

    aa = [
        [0, 0, 1],
        [0, 0, 2]
    ];
    alist = {};

    public static notice : MainGame = null;
    static MainGame: Sprite;

    onDialogConfirm() {
        if (this.gameStage !== 1) return;
        this.noticeDialog.active = true;
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
        this.loadData();
        console.log("ax", Map.notice1.ax);
        this.result.enabled = false;
        this.offSetFlag();
        this.noderesult.active = false;
        this.blockScreen.enabled = false;
        this.gameStage = 1;
        Map.notice1.initMap(this.aa);  
        
        let interval = 1;
        let repeat = 300;
        let delay = 0;
        this.timeSecond.string = this.second.toString();


        this.schedule(function(){
            this.timeGame();
            this.timeSecond.string = this.second.toString();
        }, interval,repeat,delay);
        
       
    }

    update(deltaTime: number) {
        let d = new Date();
        let t = d.getSeconds();
  
    }
    onClick(button: Button){
        this.noticeDialog.active = false;
        this.offSetFlag();
        this.blockScreen.enabled = false;

    }
    onbtnExit(button: Button){
        this.noticeDialog.active = false;
        this.offSetFlag();
        this.blockScreen.enabled = false;
   
    }
    onbtnCom(button: Button){       
        Map.notice1.ax.push(this.idflag);
        this.saveData();
        console.log("ax", Map.notice1.ax);
        Map.notice1.setFlagA(Map.notice1.setFlagX,Map.notice1.setFlagY);
        this.noticeDialog.active = false; 
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
            this.lbRs.string = 'You Win!';
        }
        else{
            this.lbRs.string = 'You Lost!';
        }
        sys.localStorage.clear();
        this.second = 300;

        

    }
    onbtnExit2(button: Button) {
        this.noderesult.active = false;
        this.blockScreen.enabled = false;
    }
    onbtnClose(button : Button){
        this.blockScreen.enabled = false;

    }
    getRNDInter(min = 65, max = 90) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        
    }
    saveData(){
        const text = Map.notice1.ax.toString();
        sys.localStorage.setItem('dataUser', text);
        /* for(let i = 0; i < Map.notice1.ax.length; i++){
            sys.localStorage.setItem('dataUser'+ i, Map.notice1.ax[i]);
        }
        sys.localStorage.setItem('count', Map.notice1.ax.length.toString()); */
    }
    loadData(){
        const text = sys.localStorage.getItem('dataUser');
        if (text) {
            const arr = text.split(",");
            this.countUser = arr.length;
            console.log("arr---", arr);
            for(let i =0; i< arr.length; i++) {
                Map.notice1.ax.push(parseInt(arr[i]));
            }
        }
        this.totalUser.string = this.countUser.toString();
        /* this.count = parseInt(sys.localStorage.getItem('count'));
        for(let i =0; i< this.count; i++){
            let blocknumber = parseInt(sys.localStorage.getItem('dataUser'+ i));
            Map.notice1.ax.push(blocknumber);
        } */
    }
    timeGame(){  
        this.second =  this.second - 1;
        if(this.second === 0){
            this.second = 300;
        }
    }
    

    
    
}

