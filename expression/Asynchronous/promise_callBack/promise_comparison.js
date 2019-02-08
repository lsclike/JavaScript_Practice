// promise resolve or rejected will create a new promise
let p1 = Promise.resolve();
let p2 = p1.then();
let p3 = p1.catch();

console.log(p2 === p3);