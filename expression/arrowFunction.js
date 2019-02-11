const array = x => x + x;
result= Array.from({length: 4}, (k, v) => v);
include = result.includes(3);

let arrowObjectIssue = () => ({ msg: 'hello'});

console.log(arrowObjectIssue())