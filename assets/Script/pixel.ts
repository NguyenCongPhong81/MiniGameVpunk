import { _decorator, Component, Node, Button, input, Input, EventMouse, Prefab, EventTouch, Vec2, Vec3 } from 'cc';
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
    
    
    
    public static idselect : eventPrefab = null;

    
    onLoad(){
        eventPrefab.idselect = this;
        this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    
    }

    start() {
        

        
        
    }

    update(deltaTime: number) {
        
    }
    onTouchStart(event: EventTouch){
        const location = event.getStartLocation();
        this.pos.set(location);
    }
    onTouchEnd(event: EventTouch){
        const location1 = event.getLocation();
        if((location1.x - this.pos.x ) < 10 && (location1.x - this.pos.x) > -10 && (location1.y - this.pos.y ) < 10 && (location1.y - this.pos.y) > -10 ){         
            MainGame.notice.note.enabled = true;                    
            MainGame.notice.exit.enabled = true;
            MainGame.notice.nodebtn1.active = true;
            MainGame.notice.nodebtn2.active = true;
            MainGame.notice.lbX.enabled = true;
            MainGame.notice.lbY.enabled = true;
            MainGame.notice.block.enabled = true;
            Map.notice1.setFlag.active = false;    
            Map.notice1.setFlag.setParent(this.node);
            MainGame.notice.lbY.string = this.setX.toString();
            let char1 = String.fromCharCode(this.setY);
            MainGame.notice.lbX.string = char1.toString();        
            Map.notice1.setFlagX =  this.idx;
            Map.notice1.setFlagY =  this.idy;

        }
    }
    
}

