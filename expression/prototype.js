function Person(name) {
    this.name = name;
    this.fullNa = () => {
        return 'hello ' + 'world'
    };
    // console.log(this)
}

// the built-in function in Person can override function in prototype
// Person.prototype.fullName = () => 'This';
Object.prototype.fullName = () => 'This from Object';
// Person.lastName = 'like Class Variable';
Function.prototype.lastName = 'like Class Variable';
test_brad = new Person('Brad');
console.log(test_brad.fullName());