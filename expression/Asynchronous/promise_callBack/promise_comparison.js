// promise resolve or rejected will create a new promise
let p1 = Promise.resolve('bilibili');
let p2 = 'abc';
p1.then( val => {
            p2 = val;
            console.log(p2);
        });
let p3 = p1.catch();
console.log(p2);