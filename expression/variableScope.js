// var x = 'out side';
let f1 = function () {
    console.log(x);
    var x = 'inside'
};

let f2 = function() {
    x = 'inside'
}

f1();

