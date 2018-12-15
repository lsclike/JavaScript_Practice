function ownForLoop(startValue, decision, body, updateStatus) {
    for ( let value = startValue; decision(value); value = updateStatus(value)){
        body(value)
    }
}

ownForLoop(1, n => n < 100, console.log, n => n * 2);
