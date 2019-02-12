let http = new easyHTTP6();
const userData = {
    name: 'testame',
    username: 'testUserName',
    email: 'test@test.com'
};
let output = '';
function get_test() {

    http.get('https://jsonplaceholder.typicode.com/users')
        .then((users) => {
            //change the display when data available => within the then curly brackets
            // let output = '';
            if (output === ''){
                users.forEach(user => {
                    // console.log(user['name']);
                    output += `<li>${user['name']}</li>`;
                });
            } else {
                output = '';
                users.forEach(user => {
                    // console.log(user['name']);
                    output += `<li>${user['name']}</li>`;
                });
            }
            document.getElementById('output').innerHTML = output
        }).catch(e => console.log(e));
}
document.getElementById('get_test').addEventListener('click', get_test);
document.getElementById('post_test').addEventListener('click', post);
function post() {
    http.post('https://jsonplaceholder.typicode.com/users', userData)
        .then(data => {
            output += `<li>${data['name']}</li>`;
         document.getElementById('output').innerHTML = output
        })
}

function put() {
    http.post('https://jsonplaceholder.typicode.com/users/1', userData)
        .then(data => {
            output += `<li>${data['name']}</li>`;
            document.getElementById('output').innerHTML = output
        })
}

// test = {length: 4,
//         numbers: [4, 8, 12]};
//
// function dived(){
//     console.log(this.numbers.map(value => value / this.length))
// }

// dived.call(test);