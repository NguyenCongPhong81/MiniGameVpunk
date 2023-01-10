import { _decorator, Component, Node, Prefab, instantiate, director, Button, Input, input, EventMouse, Sprite, sys } from 'cc';
import { MainGame } from './MainGame';
import { eventPrefab } from './pixel';
const { ccclass, property } = _decorator;

@ccclass('Map')
export class Map extends Component {
    
    @property(Prefab)
    public block : Prefab = null;
    @property(Prefab)
    public spawmflag : Prefab = null;
    @property(Node)
    public setFlag : Node = null;
    @property(Node)
    public setFlag1 : Node = null;
    @property(Node)
    public setFlag2 : Node = null;
    @property(Node)
    public setFlag3 : Node = null;
    
    private mapH : Number = 2340 + 145 ;
    private mapW: Number = 3060 - 490 ;



    public static notice1: Map = null;
    public setFlagX : number = 0; 
    public setFlagY : number = 0;
    
    

    ax = [];

    aa = [
        
    ]; 

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

        let idBlock = -1;
        let setx = 0;
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
                node.setPosition(i,-j); 
                idBlock++;
                sety++;
                let Pixel = node.getComponent(eventPrefab);
                Pixel.id = idBlock;
                Pixel.posX = i;
                Pixel.posY= -j;
                Pixel.setX = setx;
                Pixel.setY = sety;
                
                this.aa[ix].push(node);
                for(let i = 0; i < Map.notice1.ax.length; i++){
                    if(Map.notice1.ax[i] === idBlock){
                       this.setFlagA(eventPrefab.idselect.posX,eventPrefab.idselect.posY);
                    }
                }                                                                   
            }
            ix ++;       
        }
    }

    update(deltaTime: number) {
        
    }
    setFlagA(x: number, y: number) {
        
        let node = instantiate(this.spawmflag);
        node.setPosition(x, y);
        node.parent = this.node.parent; 

    }
    
    
    
}

