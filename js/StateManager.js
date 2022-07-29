export class StateManager{
    #states = [];
    constructor(){

    }

    /**
     *
     * @param State {State}
     */
    addState(State){
        this.#states.push(State);

        State.init();
    }

    popState(){
        let currentState = this.#states[this.#states.length - 1];

        currentState.exit();
        currentState.dispose();

        this.#states.pop();
    }

    changeState(State){
        let currentState = this.#states[this.#states.length - 1];

        currentState.exit();

        currentState.dispose();

        State.init();

        this.#states.push(State);
    }

    update(Delta){
        this.#states[this.#states.length - 1].update(Delta);
    }

    render(){
        this.#states[this.#states.length - 1].preRender();
        this.#states[this.#states.length - 1].render();
        this.#states[this.#states.length - 1].postRender();

    }

    resize(Event){
        this.#states[this.#states.length - 1].resize(Event)
    }
}