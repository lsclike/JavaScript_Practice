function FirstReverse(str) {
    let length = str.length;
    let times = Math.floor(str.length/2);
    for (let i = 0; i < times; i++){
        let temp = str[i];
        str[i] = str[length-1-i];
        str[length-1-i] = temp
    }
    return str;
}

let result = FirstReverse('abcd');
console.log(result);