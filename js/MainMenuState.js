import {State} from "./BaseState.js";
import {MainMenuDemoState} from "./MainMenuDemoState.js";
import {GameState} from "./GameState.js";


export class MainMenuState extends State{

    count = 0;

    overlay = document.getElementById('overlay');
    main = document.getElementById('mainCanvas');
    background = document.getElementById('backgroundCanvas');
    background2 = document.getElementById('background2Canvas');



    /**
     * @param StateManager {StateManager}
     * @param Game {Game}
     */
    constructor(StateManager, Game){
        super(StateManager, Game);
    }

    init(){
        //console.log("main menu");


        //remove the loading screen
        document.getElementById("loading").remove();
    }


    update(){
        this.count++;

        if(this.count > 30){
            this.count = 0;

            this.stateManager.addState(new MainMenuDemoState(this.stateManager))
        }

        this.stateManager.addState(new GameState(this.stateManager, this.game))
    }

    //rendering

    preRender(){}

    render(){}

    postRender(){}

    resize(){}

    exit(){}

}