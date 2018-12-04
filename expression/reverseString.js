function reverseArray(arr) {
    let result = [];
    let length = arr.length;
    for (let i = length - 1; i > -1; i--) {
        result.push(arr[i]);
    }
    return result;
}

function reverseArrayInplace(arr){
    let length = arr.length;
    for (let i = 0; i < Math.floor(length/2); i++){
        // [arr[i], arr[length-1-i]] = [arr[i], arr[length-1-i]]
        let temp = arr[i];
        arr[i] = arr[length-1-i];
        arr[length-1-i] = temp;
    }
}

test = [1,2,3,4];
reverseArrayInplace(test);
console.log(test);
