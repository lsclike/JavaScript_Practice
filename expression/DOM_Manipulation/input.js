const form = document.querySelector('form');
const taskInput = document.getElementById('task');

// form.addEventListener('submit', runKeyBoardEvent);
form.addEventListener('keydown', runKeyBoardEvent);
function runKeyBoardEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    e.preventDefault();
}