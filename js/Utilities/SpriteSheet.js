export class SpriteSheet {
    img;
    tiles;

    constructor(Img) {
        this.img = Img;
        this.tiles = new Map();
    }

    define(name, x, y, width = 16, height = 16) {

        this.tiles.set(
            name,
            {
                x:x,
                y:y,
                width: width,
                height: height
            }
        );
    };

    draw(name, ctx, x, y, scale){
        if(!this.tiles.has(name)){
            console.error(name + " isn't defined");
            return
        }

        let tile = this.tiles.get(name);


        if(tile){
            ctx.drawImage(
                this.img,
                tile.x,
                tile.y,
                tile.width,
                tile.height,
                x,
                y,
                10 * scale,
                10 * scale

            );
        }else{
            console.error(tile + " doesn't exist")
        }


    };

    list(){
        console.log(this.tiles);
    }

}


