import { _decorator, Component, Node, Prefab, instantiate, director, Button, Input, input, EventMouse, Sprite } from 'cc';
import { MainGame } from './MainGame';
import { eventPrefab } from './pixel';
const { ccclass, property } = _decorator;

@ccclass('Map')
export class Map extends Component {
    
    @property(Prefab)
    map : Prefab = null;
    @property(Node)
    setFlag : Node = null;

    public static notice1: Map = null;
    


    x : Number = 0;
    y : Number = 0;
    
    setFlagX : number = 0; 
    setFlagY : number = 0;
    
    mapH : Number = 2340 + 145 ;
    mapW: Number = 3060 - 490 ;
    onLoad(){
        Map.notice1 = this;
    }

    start() {   
        let id1 = -1;
        let setx = 0;
        
        
        for(let i = -490; i < this.mapW ; i+=90){
            setx++;
            let sety = 64;
            // let scene = director.getScene().getChildByName("Canvas");
            for(let j = 145; j < this.mapH; j+= 90){
                let node = instantiate(this.map);
                node.parent = this.node.parent;
                this.setFlag.setParent(node);               
                node.setPosition(i,-j); 
                id1++;
                sety++;
                let Pixel = node.getComponent(eventPrefab);
                Pixel.id = id1;
                Pixel.idx = i;
                Pixel.idy = -j;
                Pixel.setX = setx;
                Pixel.setY = sety;                                                                                   
            }
            
           
        }
   
    }

    update(deltaTime: number) {
        
    }
    
    
    
}

