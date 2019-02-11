document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
function getText() {
    fetch('test.txt')
        .then( value => value.text())
        .then(value => {console.log(value);
        document.getElementById('output').innerHTML = value})
        .catch(error => console.log(error));
}

function getJson() {
    let output = '';
    fetch('post.json')
        .then( value => value.json())
        .then(value => {console.log(value);
         value.forEach(({title, body}) => {
             output += `<li>${title}</li>`
         });
         document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.log(error));
}