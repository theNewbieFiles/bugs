import {generateID} from "../Utilities/Utilities.js";
import {Chunk} from "./Chunk.js";
import {MapObjectManager} from "./MapObject.js";
import {BlockManager} from "./BlockManager.js";
import {Vec2} from "../Utilities/Vec2.js";
import {Box} from "../Utilities/Box.js";

export class Level {
    #chunks;
    #objManager;
    #blockManager;
    #spriteSheet; //reference to the spriteSheet for the chunks

    dimensions;

    constructor(SpriteSheet) {

        this.#chunks = new Map();

        this.#objManager = new MapObjectManager();
        this.#blockManager = new BlockManager();

        this.#spriteSheet = SpriteSheet;

    }


    init(Seed){
        //todo work out seed later

        let id;
        let temp;

        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 15; x++) {

                id = generateID(x, y);
                temp = {
                    chunk: new Chunk(this.#objManager, this.#blockManager, this.#spriteSheet),
                    active: true,
                    position: new Vec2(x * 128, y * 128)
                };

                this.#chunks.set(id, temp)

                document.body.appendChild(temp.chunk.canvas);

            }
        }


        this.dimensions = new Box(new Vec2(0,0), new Vec2(15 * 1280, 5 * 1280));
        //console.log(this.dimensions);

    }



    update(Camera){
        let chk;

        for (const [key, chunk] of this.#chunks.entries()) {
            chk = null; //just in case

            if(chunk.active){
                chk = chunk.chunk;

                document.body.appendChild(chk.canvas);

                console.log(chk);
            }
        }
    }


    /**
     *
     * @param Camera {Vec2}
     */
    render(Camera){
        let chk;
        let center = new Vec2();
        let distance;




        for (const [key, chunk] of this.#chunks.entries()) {

            chk = chunk.chunk;

            //todo remove the hard coding of the number
            center.x = (chunk.position.x * Settings.blockSize) + 640;
            center.y = (chunk.position.y * Settings.blockSize) + 640;

            distance = Camera.distanceTo(center);

            if(distance < 2500){


                chk.canvas.style.display = "block";


                chk.canvas.style.left = ((chunk.position.x * Settings.blockSize) - Camera.x + window.innerWidth/2) + "px";

                chk.canvas.style.top = ((chunk.position.y * Settings.blockSize) - Camera.y + window.innerHeight/2) + "px";

            }else{
                chk.canvas.style.display = "none";
            }

        }

    }

    setBlock(X, Y, Block){
        //figure out what chunk you are in
        let id = generateID(
            Math.floor(X / 128),
            Math.floor(Y / 128)
        );

        let chunkData = this.#chunks.get(id);

        if(!chunkData){
            debugger
        }
        let localPos = new Vec2(
            X - chunkData.position.x,
            Y - chunkData.position.y
        );

        chunkData.chunk.setBlock(localPos, Block);



    }

    /**
     * Todo: move this to its own class
     */
    levelGeneration(Callback){
        let position = new Vec2();
        let count = 0;


        for (let x = 0; x < 15*128; x++) {
                let dy = noise.simplex2(x/1000, 0) * 10;

                dy = Math.floor(dy);

            for (let y = Settings.groundLevel + dy; y < 5*128; y++) {
                this.setBlock(x, y, "dirt");

                count++;
            }
        }


        console.log("This world has " + count + " blocks");

        //done creating the level
        Callback();
    }

}