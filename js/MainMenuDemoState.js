import {State} from "./BaseState.js";


export class MainMenuDemoState extends State{


    /**
     * @param StateManager {StateManager}
     */
    constructor(StateManager, Game){
        super(StateManager, Game);

    }

    init(){
        console.log("main menu Demo")
    }


    update(){
        this.stateManager.popState();
    }

    //rendering

    preRender(){}

    render(){}

    postRender(){}

    resize(){}

    exit(){}


    //destroy
    dispose(){}
}