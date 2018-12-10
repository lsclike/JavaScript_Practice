class Matrix {
    constructor(weight, height, element = (x, y) => undefined) {
        this.weight = weight;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++){
            for (let x = 0; x < weight; x++) {
                this.content[ y * height + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.height + x];
    }

    put(x, y, value) {
        this.content[ y * this.height + x] = value;
    }

    static test(){
        console.log('hello world')
    }
}

class MatrixIterator {
    constructor(matrix){
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if ( this.y === this.matrix.height) return {done: true};
        let value = {
                        x: this.x,
                        y: this.y,
                        value: this.matrix.get(this.x, this.y)
        };
        this.x++;
        if (this.x === this.matrix.weight){
            this.x = 0;
            this.y++;
        }
        return {value, done: false}
    }
}

Matrix.prototype[Symbol.iterator] = function () {
    return new MatrixIterator(this)
};

let matrix = new Matrix(2 ,2, (x, y) => `the weight is ${x}, the height is ${y}`);
matrix.put(1,1, 'what the fuck');
console.log(Object.keys(Matrix));