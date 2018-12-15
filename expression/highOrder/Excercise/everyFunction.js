function every(arr, decision){
    for (let item of arr){
        if (!decision(item)){
            return false
        }
    }
    return true
}

let test = [1, 2, 3, 4];
let result = every([1,2,3,4], n => n > 100);
console.log(result);