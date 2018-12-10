// function Rabbit(type, age) {
//     this.type = type;
//     this.age = age;
//     this.talk = function () {
//         console.log('what ?')
//     }
// }
//
// Rabbit.prototype.talk = function(line) {
//     console.log(`this is ${this.type}, and it speaks ${line}`)
// };
//
// let object = new class {
//     getWord() { console.log('hello')}
// };
//
// let fuzzy = new Rabbit("fuzzy");
//
// console.log(fuzzy instanceof Rabbit);
// console.log(Object.getPrototypeOf(Rabbit));
// console.log(Object.getPrototypeOf(Rabbit.prototype));
// console.log(Rabbit.prototype);

function Human(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = () => {
        return this.firstName + this.lastName;
    }
}

Human.prototype.fullName = function () {
  return this.lastName + this.firstName;
};
let test = new Human('t', 'est');
console.log(test.fullName());

test = {
    name: 'sd'
};