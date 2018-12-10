testObject = {
    'name': 'test'
};

//Symble
const toStringSymble = Symbol("toString");
Object.prototype[toStringSymble] = function () {
    return `hello`
};
console.log(Symbol.hasOwnProperty());
console.log(testObject[toStringSymble]());