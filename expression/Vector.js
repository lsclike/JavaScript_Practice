class Vector {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(anotherVector){
        let finalposition = {};
        this.x = this.x + anotherVector.x;
        this.y = this.y + anotherVector.y;
        return finalposition = {x: this.x,
                                y: this.y}
    }

    get length(){
        return Math.sqrt(this.x**2 + this.y**2);
    }

}

let testFirstVector = new Vector(2,3);
let testSecondVector = new Vector(2,3);
console.log(testFirstVector.length);
