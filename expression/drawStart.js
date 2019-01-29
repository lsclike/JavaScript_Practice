let flatten = require('./highOrder/Excercise/flatten');
function drawStart(row) {
    let doubleArray = [];
    for (let i = 0; i < row; i++){
        doubleArray.push([])
    }
    for (let i = 0; i < row; i++){
        for (let j = 0; j <row; j++){
            if (j <= i){
                doubleArray[i][j] ="#"
            }else {
                doubleArray[i][j] = "*"
            }
        }
    }
    return doubleArray
}

console.log(result);