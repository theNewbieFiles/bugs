import {State} from "./BaseState.js";


export class PauseState extends State{

    main = document.getElementById('mainCanvas');
    ctx = this.main.getContext("2d");

    /**
     *
     * @param StateManager {StateManager}
     * @param Game {Game}
     */
    constructor(StateManager, Game){
        super(StateManager, Game);
    }

    init(){
        //console.log("Paused...");

        this.ctx.font = '200px serif';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText('Paused', 100, 500);
    }


    update(){
        if(this.game.keyboardInput.isKeyDown("Escape")){
            this.game.keyboardInput.clearKeys();
            this.stateManager.popState();
        }
    }

    //rendering

    preRender(){}

    render(){}

    postRender(){}

    resize(){}

    exit(){
        //console.log("unpausing")
    }


    //destroy
    dispose(){}
}