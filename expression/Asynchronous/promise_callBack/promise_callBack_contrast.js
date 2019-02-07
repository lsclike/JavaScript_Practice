function loadImage(url, successFunction, errorFunction) {
    let img = new Image();
    img.src = url;

    img.onload = ()=> {
        successFunction(img)
    };

    img.onerror = (e)=>{
        errorFunction(e)
    }
}

loadImage('helloWorld.png', (img) => {
    document.body.appendChild(img)
}, (e) => {
    console.log(e)
});

//LoadImage by using promise
function loadImage(url) {
    return new Promise(
        function executor(resolve, reject) {
            let img = new Image();
            img.src = url;

            img.onload = () => {
                resolve(img)
            };

            img.onerror = (e) => {
                reject(e)
            }
        }
    )
}

let promise = loadImage('the_image.png');
promise.then((img) => {
    document.body.appendChild(img)
}).catch((e) => {
    console.log(e)
})