// input  x1: start position of first kangaroo
//        x2: start position of second kangaroo
//output: a boolean value to tell whether two kangaroo can meet
function kangaroo(x1, v1, x2, v2) {
    if ( v2 >= v1 ){
        return false;
    } else{
        return Number.isInteger((x2 - x1) / (v1 - v2));
    }
}

console.log(kangaroo(2,2,3,1));