
import {State} from "./BaseState.js";
import {PauseState} from "./PauseState.js";
import {Chunk} from "./Map/Chunk.js";
import {MapObject, MapObjectManager} from "./Map/MapObject.js";
import {uuidv4} from "./Utilities/Utilities.js";
import {Vec2} from "./Utilities/Vec2.js";

import {Level} from "./Map/Level.js";



export class GameState extends State{



    overlay = document.getElementById('overlayCanvas');
    main = document.getElementById('mainCanvas');
    background = document.getElementById('backgroundCanvas');
    background2 = document.getElementById('background2Canvas');

    ctx = this.main.getContext("2d");


    //the world everything exists in
    level;

    //camera
    camera;

    /**
     * @param StateManager {StateManager}
     * @param Game {Game}
     */
    constructor(StateManager, Game){
        super(StateManager, Game);

        //set the height and width of the canvass
        this.overlay.width = Settings.canvasWidth;
        this.overlay.height = Settings.canvasHeight;

        this.main.width = Settings.canvasWidth;
        this.main.height = Settings.canvasHeight;

        this.background.width = Settings.canvasWidth;
        this.background.height = Settings.canvasHeight;

        this.background2.width = Settings.canvasWidth;
        this.background2.height = Settings.canvasHeight;

        this.level = new Level(this.game.spriteSheet);
        this.camera = new Vec2(0,4500);


        console.log("Hello!");

    }

    init(){


        this.level.init();

        //generate the level
        this.level.levelGeneration(
            () => {
                document.getElementById("loading").remove();
            }
        )


    }


    update(){

        if(this.game.keyboardInput.isKeyDown("Escape")){
            this.game.keyboardInput.clearKeys();
            this.stateManager.addState(new PauseState(this.stateManager, this.game))
            console.log(this.camera);
        }

        if(this.game.keyboardInput.isKeyDown('KeyW')){
            this.camera.y -= 10;
        }
        if(this.game.keyboardInput.isKeyDown('KeyA')){
            this.camera.x -= 10;
        }
        if(this.game.keyboardInput.isKeyDown('KeyS')){
            this.camera.y += 10;
        }
        if(this.game.keyboardInput.isKeyDown('KeyD')){
            this.camera.x += 10;
        }

    }

    //rendering

    preRender(){}

    render(){

        this.level.render(this.camera);
        /*this.ctx.clearRect(0, 0, this.main.width, this.main.height);

        this.ctx.beginPath();
        this.ctx.strokeStyle = "red";
        this.ctx.rect(20, 20, 150, 100);
        this.ctx.stroke();*/
    }

    postRender(){}

    resize(){}

    exit(){}


    //destroy
    dispose(){}
}