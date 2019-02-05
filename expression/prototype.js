function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullNa = () => {
        return 'hello ' + 'world'
    };
   this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //    const diff = Date.now() - this.birthday.getTime();
    //    const ageDate = new Date(diff);
    //    return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person.prototype.fullName = function(){
    return `${this.firstName} ${this.lastName}`
};

// the built-in function in Person can override function in prototype
// Person.prototype.fullName = () => 'This';
Object.prototype.fullName = () => 'fullName from Object';
Function.prototype.lastName = 'this lastName from function prototype';
test_brad = new Person('Brad', 'Peter', '9-10-1993');
// console.log(test_brad.calculateAge(test_brad.birthday));
console.log(test_brad.fullName());