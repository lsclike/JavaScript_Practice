document.getElementById('button1').addEventListener('click', getText);

function getText() {
    fetch('test.txt')
        .then( value => value.text())
        .then(value => {console.log(value);
        document.getElementById('output').innerHTML = value})
        .catch(error => console.log(error));
}