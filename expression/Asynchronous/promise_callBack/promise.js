const posts = [
    {
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
];

// using callback to show the latest post instead of only existing one
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            posts.push(post);
            const error = true;
            if (!error){
                resolve();
            } else {
                reject('Error there are some errors')
            }

        }, 2000);
    })
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts)
    .catch((error)=>{
        console.log(error)
    });