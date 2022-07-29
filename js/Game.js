import {StateManager} from "./StateManager.js";


import KeyboardInput from "./KeyboardInput.js";
import {LoadingState} from "./LoadingState.js";

import {Stats} from "./library/Stats.js";
import {SpriteSheet} from "./Utilities/SpriteSheet.js";



//check if the settings file exists
if(!window.Settings){
    throw new Error("Settings file is missing!");
}


export class Game{

    self = this;
    resources = {};

    //spritesheet
    spriteSheet;

    //state manager
    stateManager = new StateManager();



    //inputs
    keyboardInput = new KeyboardInput();

    //
    now = performance.now();
    then = performance.now();
    delta = 0;

    //debugging
    stats;

    //setup inputs
    constructor(){
        let self = this;
        window.addEventListener('keydown', function (Event) {self.keyboardInput.onKeyDown(Event)}, true);
        window.addEventListener('keyup', function (Event) {self.keyboardInput.onKeyUp(Event)}, true);

        //start
        this.stateManager.addState(new LoadingState(this.stateManager, this));

        this.stats = new Stats();
        this.stats.showPanel(0);
        document.body.appendChild( this.stats.dom );

        this.spriteSheet = new SpriteSheet();



    }


    tick () {
        this.stats.begin();
        this.now = performance.now();

        this.delta = this.now - this.then;

        this.stateManager.update(this.delta);

        this.stateManager.render(this.delta);


        this.then = this.now;

        this.stats.end();
        requestAnimationFrame(this.tick.bind(this));

    }




}