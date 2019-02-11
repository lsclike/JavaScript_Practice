let http = new easyHTTP6();
const userData = {
    name: 'testame',
    username: 'testUserName',
    email: 'test@test.com'
};

function get_test() {
    let output = '';
    http.get('https://jsonplaceholder.typicode.com/users')
        .then((users) => {
            //change the display when data available => within the then curly brackets
            // let output = '';
            users.forEach(user => {
                // console.log(user['name']);
                output += `<li>${user['name']}</li>`;
            })
            document.getElementById('output').innerHTML = output
        }).catch(e => console.log(e));
}
document.getElementById('get_test').addEventListener('click', get_test);
document.getElementById('post_test').addEventListener('click', post);
function post() {
    http.post('https://jsonplaceholder.typicode.com/users', userData)
        .then(data => {
         document.getElementById('output').innerHTML += `<li>${data['id']}</li>`
        })
}

// test = {length: 4,
//         numbers: [4, 8, 12]};
//
// function dived(){
//     console.log(this.numbers.map(value => value / this.length))
// }

// dived.call(test);