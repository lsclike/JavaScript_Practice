test = [[1, 10], 2, 3, 4];

function sum([[first, firstsecond], second, third, fouth]) {
    return (first + firstsecond + third + fouth);
}

let {name, age} = { name: 'hello', age: 23};

console.log(name, age);
console.log(sum(test));