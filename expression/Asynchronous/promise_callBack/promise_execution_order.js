let p1 = new Promise((resolve, reject)=>{
    console.log('executor first');
    resolve();
});

p1.then(()=>{
    console.log('resolved value last because it is put in event loop')
});

console.log('the second one because it is in the call stack after executor');