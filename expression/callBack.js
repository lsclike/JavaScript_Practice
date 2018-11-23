function callWhat(p1, p2, f1) {
    console.log(p1 + p2);
    f1()
}

// function what(){
//     console.log('this is function')
// }
let what = function(){
    return test = 'string'
};

callWhat('hello', 'world', confuse = function not_confuse(){
    console.log(typeof(not_confuse))
});