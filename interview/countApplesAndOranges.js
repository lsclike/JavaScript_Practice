function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let distanceApple = [];
    let distanceOrange = [];
    let numbersApples = 0;
    let numbersOranges = 0;
    for (let n of apples) {
        distanceApple.push(n + a);
    }
    for (let n of oranges) {
        distanceOrange.push(n + b)
    }
    const range = (start, end) =>
        Array.from({ length: 1 + end - start }, (v, k) => k + start)

    let homeRange = range(a, b);
    for (let apples of distanceApple) {
        if (homeRange.includes(apples)) {
            numbersApples += 1
        }
    }
    for (let oranges of distanceOrange) {
        if (homeRange.includes(oranges)) {
            numbersOranges += 1
        }
    }
    console.log(numbersApples);
    console.log(numbersOranges);
}

countApplesAndOranges(7, 11, 5, 15,3, 2, -2, 2, 1, 5, -6)