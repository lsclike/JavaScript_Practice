class Cell {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    funny(what) {
        console.log({a: this.x, b: this.y});
    }
}

test = new Cell(2,3);
test.funny();