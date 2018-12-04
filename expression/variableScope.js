var x = 'out side';
console.log(c);
var c = () => {
    console.log()
}
let f1 = function () {
    y = () => {
        console.log()
    }
};


let f2 = function() {
    x = 'inside'
}

f1();


