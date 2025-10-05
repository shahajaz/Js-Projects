let tasks = [];

const addTask = (task) => {
    const taskInput = document.getElementById("taskInput");
    const text = taskInput.value.trim();

    if(text){
        tasks.push({text:text, completed:false});
        taskInput.value = "";
        console.log(tasks);
    }
}

document.getElementById("newTask").addEventListener("click", function(event) {
    event.preventDefault();
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();        
});