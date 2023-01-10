import { _decorator, Component, Node, Button, input, Input, EventMouse, Prefab, EventTouch, Vec2, Vec3, Sprite, instantiate, sys, geometry, PhysicsSystem } from 'cc';
import { MainGame } from './MainGame';
import { Map } from './Map';
const { ccclass, property } = _decorator;

@ccclass('eventPrefab')
export  class eventPrefab extends Component {
    

    private pos : Vec2 = new Vec2();
    private setFlagPosX: number = 0;
    private setFlagPosY: number = 0;


    public id : Number = -1;
    public posX : number = 0;
    public posY : number = 0;
    public setX : number = 0;
    public setY : number = 0;

    
    public static idselect : eventPrefab = null;
    static eventPrefab: Sprite;

    
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
            this. setFlagPosX = this.node.getPosition().x;
            this. setFlagPosY = this.node.getPosition().y;
            MainGame.notice.idflag = this.id;
            MainGame.notice.gameStage = 1;
            MainGame.notice.blockScreen.enabled = true;
            MainGame.notice.noticeDialog.active = true;
            if(this.posX === 0 && this.posY === 0){
                alert("This position has been selected!");
                MainGame.notice.noticeDialog.active = false;
                MainGame.notice.blockScreen.enabled = false;


            }

            MainGame.notice.lbY.string = this.setX.toString();
            let char1 = String.fromCharCode(this.setY);
            MainGame.notice.lbX.string = char1.toString();        
            Map.notice1.setFlagX =  this.posX;
            Map.notice1.setFlagY =  this.posY;
        }

    }
    
}

