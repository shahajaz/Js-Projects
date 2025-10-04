const todoList = document.getElementById('todoList');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');

addTaskButton.addEventListener('click', addTodo);
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        todoList.appendChild(li);
        taskInput.value = '';
    }
}
