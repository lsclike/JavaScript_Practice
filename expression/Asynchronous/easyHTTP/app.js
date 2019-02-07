const http = new EasyHTTP();
function getTest(e){
    // let url = document.getElementById('url').value;
    let result = http.get('https://jsonplaceholder.typicode.com/posts', (error, posts) => {
        if(error){
            console.log(error)
        } else {
            console.log(posts)
        }
    });
    // e.preventDefault();
}

const data = {
    title: 'Customer Post',
    userId: 9527,
    body: 'this is a custom post'
};

function postRequest() {
    http.post('https://jsonplaceholder.typicode.com/posts', data, (error, post) => {
        if(error){
            console.log(error)
        } else {
            console.log(post)
        }
    })
}



