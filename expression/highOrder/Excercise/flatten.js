function flatten(arr){
     return arr.reduce((n, c) => n.concat(c), [])
}

test = [1,2,3, [4, 5]];
console.log(flatten(test));