import {Box} from "../Utilities/Box.js";
import {Vec2} from "../Utilities/Vec2.js";
import {uuidv4, generateID} from "../Utilities/Utilities.js";



export class MapObjectManager {
    list;


    constructor() {

        this.list = new Map();
    }


    /**
     *
     * @param ID {string}
     * @param MapObj {MapObject}
     * @param Name {string}
     * @param Desc {string}
     */
    add(ID, MapObj, Name = "", Desc = ""){
        this.list.set(ID, {mapObj: MapObj, Name: Name, Desc: Desc});

        //console.log(this.list);

    }

    getObj(ID){
        if(this.list.has(ID)){
            return this.list.get(ID)
        }
    }

}












export class MapObject {
    box;
    front;
    background;
    blocks;

    constructor(Width, Height) {
        this.box = new Box(new Vec2(0,0), new Vec2(Width, Height));

        this.front = new Map();
        this.background = new Map();

        this.blocks = new Map();
    }

    /**
     *
     * @param Point {Vec2}
     */
    isPointInBox(Point){
        return this.box.isPointInBox(Point);
    }

    setBlock(Point, Block){
        if(this.box.isPointInBox(Point)){
            this.blocks.set(generateID(Point), Block);
        }else{
            console.warn("Attempting to place block outside of box");
        }


    }

    getBlock(Point){
        if(this.box.isPointInBox(Point)){
            return this.blocks.get(generateID(Point));
        }else{
            console.warn("Attempting to get block outside of box");
        }
    }



}