function mutiply(left_number) {
    return function(right_number) {
        return left_number * right_number
    }
}

let second = function (){
    console.log('test')
}

first = mutiply(5);
console.log(first);