
let inList = document.getElementById('task-list');
let inText = document.getElementById('input-task');
let addBtn = document.getElementById('add-task-button');

let taskList;
taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function Puss (description) {
    this.description = description;
    this.completed = false;
}

let toDoElem = [];

function createDeleteElements(tasks, index) {
    return `
        <li class="todo-item">
            <input onclick="completeTask(${index})" type="checkbox" ${tasks.completed ? 'checked' : ''}>
            <span class="task ${tasks.completed ? 'checked' : ''}">${tasks.description}</span>
            <button onclick="deleteTask(${index})" class="delete-btn">-</button>
        </li>
    `
}

const fillHtmlList = () => {
    inList.innerHTML = "";
    if (taskList.length > 0) {
        taskList.forEach((item, index) => {
            inList.innerHTML += createDeleteElements(item, index);
        })
        toDoElem = document.querySelectorAll(".task");
    }
}

fillHtmlList();



const local = () => {
    localStorage.setItem("tasks",  JSON.stringify(taskList));
}

addBtn.addEventListener('click', function () {
    taskList.push(new Puss(inText.value));
    local();
    fillHtmlList();
    inText.value = "";
    //li.innerHTML=li.innerHTML + inText.value;
})

const completeTask = index => {
    taskList[index].completed = !taskList[index].completed;
    if (taskList[index].completed) {
        toDoElem[index].classList.add('checked');
    }else {
        toDoElem[index].classList.remove('checked');
    }
    local();
    fillHtmlList();
}

const deleteTask = index => {
    taskList.splice(index, 1);
    local();
    fillHtmlList();
}







