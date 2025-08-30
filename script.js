const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.classList.add("task-item");
    li.textContent = taskText;

    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add("delete-btn");

    
    deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasks(); 
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    saveTasks(); 
}


addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value; 
    if (taskText !== "") {
        createTaskElement(taskText);
        taskInput.value = ""; 
    }
});


function saveTasks() {
    const tasks = [];
    document.querySelectorAll(".task-item").forEach((task) => {
        tasks.push(task.firstChild.textContent); 
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        tasks.forEach((task) => createTaskElement(task));
    }
}

loadTasks();
