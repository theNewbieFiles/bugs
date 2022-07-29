import {Vec2} from "./Vec2.js";

export class Box {
    start = new Vec2();
    end = new Vec2();
    center = new Vec2();
    width;
    height;

    /**
     *
     * @param Start {Vec2}
     * @param End {Vec2}
     */
    constructor(Start, End) {
        this.start.copy(Start);
        this.end.copy(End);

        this.calcCenter();
    }


    calcCenter(){
        //get height and with
        this.calcDimensions();

        this.center.x = (this.width / 2) + this.start.x;
        this.center.y = (this.height /2) + this.start.y;
    }

    calcDimensions(){
        this.width = this.end.x - this.start.x;
        this.height = this.end.y - this.start.y;

    }

    /**
     *
     * @param Point {Vec2}
     * @returns {boolean}
     */
    isPointInBox(Point){
        if(Point.x >= this.start.x && Point.x <= this.end.x
        && Point.y >= this.start.y && Point.y <= this.end.y){
            return true;
        }

        return false;
    }

    set(X, Y, Width, Height) {
        this.position.x = X;
        this.position.y = Y;
        this.width = Width;
        this.height = Height;
    }

}