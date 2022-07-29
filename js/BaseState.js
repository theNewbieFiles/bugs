export class State{
    stateManager;
    game;

    constructor(StateManager, Game){
        this.stateManager = StateManager;
        this.game = Game;

    }

    init(){}


    update(){}

    //rendering

    preRender(){}

    render(){}

    postRender(){}

    resize(){}

    exit(){}


    //destroy
    dispose(){}
}