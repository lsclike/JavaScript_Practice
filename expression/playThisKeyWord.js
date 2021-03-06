//the demonstration for this keyword for normal function
function speak() {
    console.log(`this is ${this.name}`)
};

let dog = {
    name: 'doge',
    rest: {
        name: 'new?',
        speak
    }
};
// console.log(dog.rest.speak());

//the demonstration of this keyword for arrow functions
function anyMulti(){
    console.log(this.numbers.map( n => n * this.multi))
}

anyMulti.call({numbers: [1, 2, 3], multi: 3});

function returnTest(){
    console.log('return test');
    let result = 9;
    return result
}
let arrowTest = () => 3;

testResult = arrowTest();
console.log(returnTest())
