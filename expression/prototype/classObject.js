class Cell {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.secrete = 'blabla'
    }
    funny(what) {
        console.log({a: this.x, b: this.y});
    }

    static staticTalk(){
        console.log('class static');
    }
}

function FunctionCell(x, y) {
    this.x = x;
    this.y = y;
    this.contrast = function () {
        console.log('nothing')
    }
}

FunctionCell.staticTalk = function(){
  console.log('Function static talk')
};

test = new Cell(2,3);
function_test = new FunctionCell(4, 5);
//notice the difference for the place of function in both class cell and functionCell
console.log(test);
console.log(function_test);
