import { _decorator, Component, Node, Button, input, Input, EventMouse, Prefab, EventTouch, Vec2, Vec3, Sprite, instantiate, sys } from 'cc';
import { MainGame } from './MainGame';
import { Map } from './Map';
const { ccclass, property } = _decorator;

@ccclass('eventPrefab')
export  class eventPrefab extends Component {
    

    pos : Vec2 = new Vec2();
    id : Number = -1;
    idx : number = 0;
    idy : number = 0;
    type : Number = 0;
    setX : number = 0;
    setY : number = 0;

    setFlagX: number = 0;
    setFlagY: number = 0;

    
    
    
    
    
    public static idselect : eventPrefab = null;
    static eventPrefab: Sprite;

    
    onLoad(){
        eventPrefab.idselect = this;
        this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    
    }

    start() {
        // this.spawmflag.enabled = false;
        // console.log(sys.localStorage.getItem('dataUser'));
        
        
    }

    setFlag(flag: number) {
        
        // set frame cho spawmflag

        

    }
    setFlag2(flag: boolean) {
        // this.spawmflag.enabled = flag;
        let node = instantiate(Map.notice1.spawmflag);
        node.parent = this.node.parent;
        node.setPosition(this.idx, this.idy);
        node.active = flag;
    }
    

    
    update(deltaTime: number) {
    
    }
    onTouchStart(event: EventTouch){
        const location = event.getStartLocation();
        this.pos.set(location);
    }
    onTouchEnd(event: EventTouch){
        const location1 = event.getLocation();
        Map.notice1.ax.push(this.id);
        MainGame.notice.saveData();
       
        
        
        if((location1.x - this.pos.x ) < 10 && (location1.x - this.pos.x) > -10 && (location1.y - this.pos.y ) < 10 && (location1.y - this.pos.y) > -10 ){      
            // MainGame.notice.onDialogConfirm();
            // this.setFlag2(true);
            // let node = instantiate(Map.notice1.spawmflag);
            // node.parent = this.node.parent;
            // node.setPosition(this.idx, this.idy);
            this.setFlagX = this.node.getPosition().x;
            this.setFlagY = this.node.getPosition().y;
            // Map.notice1.setFlagA(this.node.getPosition().x, this.node.getPosition().y);
            // Map.notice1.setFlag.setParent(this.node);
            // Map.notice1.spawmflag.setParent(this.node);
            MainGame.notice.gameStage = 1;
            MainGame.notice.blockScreen.enabled = true;
            MainGame.notice.noticeDialog.active = true;
            // this.spawmflag.enabled = true;
            
            
            

            // MainGame.notice.note.enabled = true;                    
            // MainGame.notice.exitDialog.enabled = true;
            // MainGame.notice.nodebtn1.active = true;
            // MainGame.notice.nodebtn2.active = true;
            // MainGame.notice.lbX.enabled = true;
            // MainGame.notice.lbY.enabled = true;
            
            // Map.notice1.setFlag.active = false;           
            // Map.notice1.setFlag1.active = false;           
            // Map.notice1.setFlag2.active = false;           
            // Map.notice1.setFlag3.active = false;           
            


            // if(Map.notice1.countflag === 1){
            //     Map.notice1.setFlag.setParent(this.node);
            // }
            // else if(Map.notice1.countflag === 2){
            //     Map.notice1.setFlag1.setParent(this.node);
            // }else if(Map.notice1.countflag === 3){
            //     Map.notice1.setFlag2.setParent(this.node);
            // }else if(Map.notice1.countflag === 4){
            //     Map.notice1.setFlag3.setParent(this.node);
            // }
            // if(Map.notice1.countflag >= 4){
            //     Map.notice1.countflag = 0;
            // }
            
            // console.log(Map.notice1.countflag);


            MainGame.notice.lbY.string = this.setX.toString();
            let char1 = String.fromCharCode(this.setY);
            MainGame.notice.lbX.string = char1.toString();        
            Map.notice1.setFlagX =  this.idx;
            Map.notice1.setFlagY =  this.idy;
            // this.spawmflag.enabled = true;
            
            // set frame (1 -> 4)
            const id = Math.floor(Math.random() * 4) + 1;
            this.setFlag(id);
            // console.log(Map.notice1.aa);

        }
    }
    
}

