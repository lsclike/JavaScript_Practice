// const range = (start, end) => Array.from({length: (1+end - start)}, (v, k) => k + start);
// console.log(range(1,3));


// return an array that contains a serial of number according to the parameters
function range(start, end, step = null) {
    let length = 1 + Math.abs(end - start);
    let result = []; 
    if (!step) {
        for (let i = 0; i < length; i++) {
            result.push(start);
            start += 1
        }
    } else if (step) {
        if (step < 0) {
            if (start > end) {
                for (let i = length; i > 0;) {
                    result.push(start);
                    start += step;
                    i += step;
                }
            }
        }
        if (step > 0){
            for (let i = 0; i < length;){
                result.push(start);
                start += step;
                i += step;
            }
        }
    }
    return result;
}

function sum(arr){
    let length = arr.length;
    let result = 0;
    for (let i = 0; i < length; i++){
        result += arr[i];
    }
    return result;
}

sumResult = sum(range(1, 10));
console.log(sumResult);
