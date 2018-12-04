function replaceSpace(test, s1, j1) {
    let middle = test.split(s1);
    let result = middle.join(j1);
    return result
}

test = "hello the fucking world";
sorting = [3,2,5,1,2,7];
sorting.sort();
result = replaceSpace(test, " ", "+");
console.log(1,2);
