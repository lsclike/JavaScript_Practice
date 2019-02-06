const http = new EasyHTTP();

function getTest(){
    let result = http.get('https://jsonplaceholder.typicode.com/posts', (error, posts) => {
        if(error){
            console.log(error)
        } else {
            console.log(posts)
        }
    });
}
