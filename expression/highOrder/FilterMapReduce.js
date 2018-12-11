function filter(array, test){
    let pass = [];
    for (let t of array){
        if (test(t)){
            pass.push(t)
        }
    }
    return pass
}

function map(array, transform){
    let result = [];
    for (let t of array){
        result.push(transform(t))
    }
    return result
}

function reduce(array, combination, start=null){
    let current = array[0];
    for (let i = 1; i < array.length; i++){
        current = combination(current, array[i])
    }
    return current;
}

let testForReducing = ['a', 'b', 'c','d'];
console.log(testForReducing.reduce((a,b) => a+b));

console.log(reduce([1,2,3,4],(a, b) => a + b));

// Arrow function return the last line ?
let testForArray = () => 2 > 0;
console.log(testForArray());
let test = [1, 3, 5, 7, 10];
// a high-order function for filtering even number
let evenNumber = filter(test, i => i % 2 === 0);

//test for mapping function
testMapping = ['abc', 'bca', 'deg'];
console.log(map(testMapping, i => i + 'a'));
console.log(evenNumber);
// console.log(greaterThan(3)(4));