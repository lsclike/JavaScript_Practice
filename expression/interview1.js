(function () {
    var a = b = 3
})()

console.log('a defined ?' + (typeof a !== 'undefined'));
console.log('b defined ?' + (typeof b !== 'undefined'));


function showState() {     // moved to the top (function declaration)
    console.log("Ready");
}

var showState;            // moved to the top (variable declaration)

// eg 3

var showState1 = function() {
    console.log("Idle");
};
showState1();
function showState1() {
    console.log("Ready");
}




