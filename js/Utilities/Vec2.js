export class Vec2{
    x;
    y;

    constructor(X, Y) {
        this.x = X || 0;
        this.y = Y || 0;
    }


    /**
     *
     * @param Vec {Vec2}
     */
    add(Vec){
        this.x += Vec.x;
        this.y += Vec.y;
    }

    /**
     *
     * @param Vec {Vec2}
     */
    sub(Vec){
        this.x -= Vec.x;
        this.y -= Vec.y;
    }

    /**
     *
     * @param Scalar {number}
     */
    scale(Scalar){
        this.x *= Scalar;
        this.y *= Scalar;
    }

    //calculate the magnitude of the vector
    mag(){
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }

    //normalize the vector
    normalize(){
        let n = this.mag();

        if(n > 0){
            this.x = this.x / n;
            this.y = this.y / n;
        }
    }

    copy(Vec){
        this.x = Vec.x;
        this.y = Vec.y;
    }

    distanceTo(Point){
        return Math.sqrt((Point.x - this.x)**2 + (Point.y - this.y)**2);
    }

}

