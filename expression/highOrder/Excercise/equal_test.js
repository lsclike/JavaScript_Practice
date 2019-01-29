function equalTest(ob1, ob2) {
    if (ob1 == ob2){
        return true;
    }else {
        return false;
    }
}

testForTest = {
    name: "test",
    age: 123
};
testForTest2 = {
    name: "test",
    age: 123
};

testForTest1 = testForTest;
console.log(equalTest(testForTest, testForTest2));