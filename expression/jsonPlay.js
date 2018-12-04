testObject = {
    name: "what's this",
    age: [12,23],
    adult: function () {
        if (this.age > 18){
            return 'he is adult'
        }
        else {
            return 'he cannot drink alcohol'
        }
    }
}

let result = JSON.stringify(testObject);
let convertest = JSON.parse(result);
console.log(result);
console.log(convertest.age);