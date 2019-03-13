// single selector
// let test = document.getElementById('task-title');
// let querySelector = document.querySelector('.card-title');
// document.querySelector('li').style.background = 'red ';
// document.querySelectorAll('ul li').style.background = 'red ';
// document.querySelector('li:nth-child(3)').style.background = 'red';
// test.style.background = '#333';

//get from global content
// const items = document.getElementsByClassName('collection-item');
// items[0].style.background = 'black';
//since htmlCollection is not Array
// const listItem = document.querySelector('ul').getElementsByClassName('collection-item');
// convert collection to array
// const arrayListItem = Array.from(listItem);
// arrayListItem.forEach( (li, index) =>
// {
//     console.log(li.className);
//     li.textContent = String(index);
// });
//
// const nodeList = document.querySelectorAll('li.collection-item');
// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');
//
// liOdd.forEach(li => {
//     li.style.background = "red";
// });

// liEven.forEach(li => {
//     li.style.background = "blue"
// });

// let val;
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelectorAll('li.collection-item');

// Get child nodes
// val = list.childNodes;

// Get children element nodes
// val = list.children[1].nodeName;

// Create Element
// const li = document.createElement('ul');

// Add Class
// li.className = 'collection-item';
// Add id
// li.id = 'new-item';
// Add content inside the node
// li.appendChild(document.createTextNode('Hello world'));
// const link = document.createElement('a');
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>';
// li.appendChild(link);
// Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);
// console.log();

// Replace Elements

// Create Elements
// const newHeading = document.createElement('h2');
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Task List1'));
// Get old heanding
// const oldHeading = document.getElementById('task-title');
// Get parents
// const cardAction = document.querySelector('.card-action');
// const cardAction = oldHeading.parentElement;
// cardAction.replaceChild(newHeading, oldHeading);
//Remove
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);
let state = false;
function onClick(e) {
    console.log('Hello World');
    if (!state){
        e.target.innerText = 'Hello';
    } else {
        e.target.innerText = 'Click';
    }
    state = !state;
};

    // let test = e;
    // console.log(e);
