function flatten(arr){
     return arr.reduce((n, c) => n.concat(c), [])
}

let test = [1,2,3, [4, 5]];
let result = flatten(test);
console.log(result);
module.exports=flatten;