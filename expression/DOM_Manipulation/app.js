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
const listItem = document.querySelector('ul').getElementsByClassName('collection-item');
// convert collection to array
const arrayListItem = Array.from(listItem);
arrayListItem.forEach( (li, index) =>
{
    console.log(li.className);
    li.textContent = String(index);
});

const nodeList = document.querySelectorAll('li.collection-item');
const liOdd = document.querySelectorAll('po li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(li => {
    li.style.background = "red";
});

// liEven.forEach(li => {
//     li.style.background = "blue"
// });
