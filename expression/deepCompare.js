function deepCompare(c1, c2) {
    if (typeof c1 === typeof c2){
        if (typeof c1 !== "object"){
            return c1 === c2;
        }
        else if ( (c1 === null) || ( c2 === null)){
            return (c1 === null) && (c2 === null);
        }
        else {
            if (Object.keys(c1).length !== Object.keys(c2).length) {
                return false
            }
            else {
                let length = Object.keys(c1).length;
                let p1 = Object.keys(c1);
                let p2 = Object.keys(c2);
                let result = 0;
                for ( let i = 0; i < length; i++){
                    if (!deepCompare(c1[p1[i]], c2[p2[i]])){
                        result += 1;
                    }
                }
                return (result === 0);
            }
        }
    }
}

let t1 = {
    name: 'not',
    age: 123
};

let t2 = {
    name: 'not',
    age: 123
};
let result = deepCompare(t1, t2);
console.log(result);
