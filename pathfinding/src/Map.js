import Node from "./Node"

export default class Map{
    constructor(name, column, row){
        this.name = name;
        this.column = column;
        this.row = row;

        let id = 0;
        let world = new Array(this.column);

        for (let i = 0; i < this.column; i++) {
            world[i] = new Array(this.rows);
        }

        for (let i = 0; i < column; i++) {
            for (let j = 0; j < row; j++) {
                id++
                world[i][j] = new Node(i, j, id)

            }
        }

        
        console.log(world)
    }


}