// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greetting = function () {
    return `Hello there is ${this.firstName}`
};

const p1 = new Person('Brad', 'Peter');

function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// setting prototype from Person
Customer.prototype = Object.create(Person.prototype);
// setting prototype to Customer
Customer.prototype.constructor = Customer;
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

Customer.prototype.greetting = function(){
    return 'come from Customer prototype'
};

console.log(customer1);
console.log(Object.getPrototypeOf(customer1));