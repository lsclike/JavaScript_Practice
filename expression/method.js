function arrowFunctionThis(){
    console.log(this.coords.map( n => n / this.length))
}
arrowFunctionThis.call({coords: [0, 2, 3], length: 10});