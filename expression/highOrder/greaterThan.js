function greaterThan(n) {
    return m => n > m;
}

function filter(array, test){
    let pass = [];
    for (let t of array){
        if (test(t)){
            pass.push(t)
        }
    }
    return pass
}

let testForArray = () => 2 > 0;
console.log(testForArray);
let test = [1, 3, 5, 7, 10];
// a high-order function for filtering even number
let evenNumber = filter(test, i => i % 2 === 0);
console.log(evenNumber);
// console.log(greaterThan(3)(4));