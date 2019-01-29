var x = 'out side';
var c = () => {
    console.log()
};

let f1 = function () {
    console.log(y);
    y = () => {
        console.log()
    }
};
console.log(y)
// y can be accessed in the global context only after the function has been executed
function f2() {
    x = 'inside';
    y = 'local variable without any decoration become global'
};
f2();
console.log(x);
console.log(y);

