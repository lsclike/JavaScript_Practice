//find a way to keep two functions that have the same name in the prototype

const toString = Symbol("toString");
const toString1 = Symbol("toString");
test = {toString1: `what's this ?`};
console.log(test.toString1);
console.log(toString === toString1);
Array.prototype[toString] = function () {
    return 'this is a joke'
};
test = [1,2,3];
console.log(toString1);
console.log(test[toString]());
let definded = function(){
    return 2
};
console.log(definded());