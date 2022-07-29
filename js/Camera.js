import {Vec2} from "./Utilities/Vec2.js";

export class Camera {

    world;
    position;

    constructor(World) {

        this.world = World;

        this.position = new Vec2(0,0);
    }

    setPosition(X, Y, Z){
        if(X instanceof Vec2){
            this.position.copy(Position);
        }else{
            this.position.x = X;
            this.position.y = Y;
            this.position.z = Z;
        }


    }

    render(){

    }


}