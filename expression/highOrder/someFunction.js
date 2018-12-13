let test = [1, 2, 2, 4, 5, 6];
console.log(test.findIndex((item) => item % 3 === 2));


function indexFunction(arr, value) {
    let result = [];
    if (arr.indexOf(value)) {
        result.push(arr.indexOf(value))
    }
}
console.log(indexFunction(test, 2));