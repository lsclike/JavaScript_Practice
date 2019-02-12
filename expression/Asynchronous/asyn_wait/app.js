//async returns a promise
async function practice() {
    const promise = new Promise(((resolve, reject) => {
        setTimeout(()=> resolve('Hello'), 3000);
    }));

    const error = false;
    if (!error){
        const res = await promise;
        return res
    } else {
        await Promise.reject(new Error('Something went wrong'))
    }

}

practice()
    .then(value => console.log(value))
    .catch(error => console.log(error));