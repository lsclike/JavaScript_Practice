var x = 'out side';
console.log(c);
console.log(y);
var c = () => {
    console.log()
}
let f1 = function () {
    console.log(y);
    y = () => {
        console.log()
    }
};


let f2 = function() {
    x = 'inside'
};

f1();


