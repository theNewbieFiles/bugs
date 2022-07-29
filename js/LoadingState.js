import {State} from "./BaseState.js";
import {MainMenuState} from "./MainMenuState.js";
import {loadImage} from "./Utilities/Loader.js";
import {loadJson} from "./Utilities/Loader.js";
import {SpriteSheet} from "./Utilities/SpriteSheet.js";


export class LoadingState extends State{
    done;

    /**
     *
     * @param StateManager {StateManager}
     * @param Game {Game}
     */
    constructor(StateManager, Game){
        super(StateManager, Game);

        this.done = false;

    }

    init(){
        //console.log("loading")

        //load images
        Promise.all([
            loadImage("tileset.png", "tiles"),
            loadJson("spriteData")



        ]).then(([tiles, spriteData]) => {
            //this.game.resources.tiles = tiles;

            this.game.spriteSheet = new SpriteSheet(tiles);

            //all files are done
            this.spriteSetup(spriteData);

        }).catch(Error => {
            console.error(Error);

        });
    }


    update(){
        if(this.done){
            this.stateManager.changeState(new MainMenuState(this.stateManager, this.game));
        }

        //update screen

    }

    //rendering

    render(){}



    spriteSetup(SpriteSheet){



        for (const key in SpriteSheet.tiles) {


            this.game.spriteSheet.define(
                key,
                SpriteSheet.tiles[key].x,
                SpriteSheet.tiles[key].y,
                SpriteSheet.tiles[key].w,
                SpriteSheet.tiles[key].h
                )
        }

        //its done setting up the sprites
        this.done = true;

        this.game.spriteSheet.list();
    }
}