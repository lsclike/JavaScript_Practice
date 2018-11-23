var test = function () {
    console.log('what ?')
};
// compare with test()
console.log(test);


result = map(f, [1, 2, 3]);
console.log(result)
function map(f, a) {
    var result = []; // Create a new Array
    var i; // Declare variable
    for (i = 0; i < a.length; i++)
        console.log(f)
        result[i] = f(a[i]);
    return result;
}
var f = function(x) {
    return x * x * x;
}

