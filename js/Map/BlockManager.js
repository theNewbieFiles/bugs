export class BlockManager {

    list;

    constructor(props) {
        this.list = new Map();
    }

    set(ID, Type){
        this.list.set(ID,
            {
                Type: Type,
                Health: 100
            })
    }

    get(ID){
        if(this.list.has(ID)){
            return this.list.get(ID)
        }
    }





}