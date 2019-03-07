// single selector
let test = document.getElementById('task-title');
let querySelector = document.querySelector('.card-title');
document.querySelector('li').style.background = 'red ';
document.querySelector('ul li').style.background = 'blue';
document.querySelector('li:nth-child(3)').style.background = 'red';
test.style.background = '#333';

const items = document.getElementsByClassName('collection-item');
items[0].style.background = 'black';
