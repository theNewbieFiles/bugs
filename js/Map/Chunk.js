//getting the other pieces of code we need
import {Box} from "../Utilities/Box.js";
import {generateID} from "../Utilities/Utilities.js";
import {Vec2} from "../Utilities/Vec2.js";

//exporting so that other code pieces have what they need
export class Chunk {
    #objects;
    #changed;
    #objManager;
    #blockManager;
    #spriteSheet;

    canvas;
    ctx;

    background;
    bgCtx;

    box;

    //maps
    constructor(ObjManager, BlockManager, SpriteSheet) {
        this.#objects = new Map();
        this.#changed = new Map();

        this.#objManager = ObjManager;

        this.#blockManager = BlockManager;

        this.#spriteSheet = SpriteSheet;
        
        //declaring the canvas
        this.canvas = document.createElement('canvas');

        this.canvas.onclick = this.click.bind(this);
        this.canvas.style.position = 'absolute';
        this.canvas.width = Settings.chunkSize * Settings.blockSize;
        this.canvas.height = Settings.chunkSize * Settings.blockSize;

        this.ctx = this.canvas.getContext('2d');

        this.background = document.createElement('canvas');
        this.bgCtx = this.background.getContext('2d');



        //for troubleshooting
        this.ctx.beginPath();
        this.ctx.strokeStyle = "white";
        this.ctx.rect(0, 0, 1280, 1280);
        this.ctx.stroke();

    }

    //getting block IDs
    getBlock(X, Y){
        let id = generateID(X, Y);

        if(this.#changed.has(id)){
            return this.#changed.get(id);
        }

        for (const [key, mapObjData] of this.#objects.entries()) {
            console.log(key, mapObjData);

            let localPosition = new Vec2(X - mapObjData.Pos.x, Y - mapObjData.Pos.y);

            let mapObj = this.#objManager.getObj(mapObjData.mapObj).mapObj;



            if(mapObj.box.isPointInBox(localPosition)){

                return mapObj.getBlock(localPosition)
            }
        }
    }

    setBlock(X, Y, Type){
        if(X instanceof Vec2){
            this.#_setBlock(X.x, X.y, Y) //Y will be type;
        }else{
            this.#_setBlock(X, Y, Type);
        }
    }

    #_setBlock(X, Y, Type){

        if(Type === 'air'){
            this.removeBlock(X, Y);
            return;
        }

        this.#changed.set(generateID(X, Y), Type);

        //update the canvas
        //todo: update background tiles

        this.#spriteSheet.draw(
            Type,
            this.ctx,
            X * Settings.blockSize,
            Y * Settings.blockSize,
            1);

    }

    removeBlock(X, Y){
        if(X instanceof Vec2){
            this.#_removeBlock(X.x, X.y)
        }else{
            this.#_removeBlock(X, Y);
        }
    }

    #_removeBlock(X, Y){
        this.ctx.clearRect(
            X * Settings.blockSize,
            Y * Settings.blockSize,
            Settings.blockSize,
            Settings.blockSize
        );
    }

    addMapObject(Position, MapObjID){
        this.#objects.set(
            generateID(Position),
            {
                Pos: Position,
                mapObj: MapObjID}
            )
    }

    click(e){
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left; //x position within the element.
        let y = e.clientY - rect.top;  //y position within the element.

        x = Math.floor(x/10);
        y = Math.floor(y/10);


        /*for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                this.setBlock(x + (i-2), y + (j - 2), 'air')
            }
        }*/

        this.setBlock(x, y, 'air')

    }



}

