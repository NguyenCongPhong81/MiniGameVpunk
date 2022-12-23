import { _decorator, Component, Node, Prefab, instantiate, director, Button, Input, input, EventMouse, Sprite, sys } from 'cc';
import { MainGame } from './MainGame';
import { eventPrefab } from './pixel';
const { ccclass, property } = _decorator;

@ccclass('Map')
export class Map extends Component {
    
    @property(Prefab)
    block : Prefab = null;
    @property(Prefab)
    spawmflag : Prefab = null;
    @property(Node)
    setFlag : Node = null;
    @property(Node)
    setFlag1 : Node = null;
    @property(Node)
    setFlag2 : Node = null;
    @property(Node)
    setFlag3 : Node = null;

    public static notice1: Map = null;
    


    x : Number = 0;
    y : Number = 0;
    countflag : number = 0;
    
    setFlagX : number = 0; 
    setFlagY : number = 0;
    
    mapH : Number = 2340 + 145 ;
    mapW: Number = 3060 - 490 ;

    ax = [];

    aa = [
        // [1, 1, 1],
        // [1, 1, 1],
    ]; // 25 c, 34 h

    onLoad() {
        Map.notice1 = this;
    }

    initMap(_aa) {
        for(let i = 0; i < _aa.length; i++) {
            for(let j = 0; j < _aa[i].length; j++) {
                if (_aa[i][j] > 0 && this.aa[i] && this.aa[i][j]) {
                    this.aa[i][j].getComponent(eventPrefab).setFlag(_aa[i][j]);
                }
            }
        }
    }

    start() {   

        let id1 = -1;
        let setx = 0;
        // console.log(sys.localStorage.getItem('dataUser'));

        
       
        



        MainGame.notice.gameStage = 0;
        
        let ix = 0;
        for(let i = -490; i < this.mapW ; i+=90){
            setx++;
            let sety = 64;
            this.aa.push([]);
            // let scene = director.getScene().getChildByName("Canvas");
            for(let j = 145; j < this.mapH; j+= 90){
                let node = instantiate(this.block);
                node.parent = this.node.parent;
                this.setFlag.setParent(node);             
                // this.setFlag1.setParent(node);           
                // this.setFlag2.setParent(node);             
                // this.setFlag3.setParent(node);             
                node.setPosition(i,-j); 
                id1++;
                sety++;
                let Pixel = node.getComponent(eventPrefab);
                Pixel.id = id1;
                Pixel.idx = i;
                Pixel.idy = -j;
                Pixel.setX = setx;
                Pixel.setY = sety;
                
                this.aa[ix].push(node);
                // console.log(id1);
                // console.log("xy", id1, setx, sety);
                for(let i = 0; i < Map.notice1.ax.length; i++){
                    if(Map.notice1.ax[i] === id1){
                       this.setFlagA(eventPrefab.idselect.idx,eventPrefab.idselect.idy);
                    }
                }                                                                   
            }
            ix ++;

            
           
        }
        
       
        
       
   
    }

    update(deltaTime: number) {
        
    }
    setFlagA(x: number, y: number) {
        // console.log("setFlagA", x, y);
        let node = instantiate(this.spawmflag);
        node.setPosition(x, y);
        node.parent = this.node.parent;

    }
    
    
    
}

