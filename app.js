// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption =document.querySelector('.filter-todo');



// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);



// Functions

function addTodo(event){
    // prevent form from submitting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create LI
    const newTodo = document.createElement('li');
    // @ts-ignore
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append To List
    todoList.appendChild(todoDiv);

    // Clear Input Value
    // @ts-ignore
    todoInput.value = "";
}


function deleteCheck(e) {
    const item = e.target;
    // Delete todo
    if(item.classList[0] === "teash-btn"){
       const todo = item.parentElement;

    // Animation
        todo.classList.add("fall");
    //  todo.remove();
        todo.addEventListener('teansitioned', function(){
            todo.remove();
        });

    }

    // Check
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value) {
            case "all":
                // @ts-ignore
                todo.style.display = "flex";
                break;
            case "completed":
                // @ts-ignore
                if(todo.classList.contains("completed")) {
                    // @ts-ignore
                    todo.style.display = "flex";
                } else {
                    // @ts-ignore
                    todo.style.display = "none";
                }
                break;
            case "incompleted":
                // @ts-ignore
                if(!todo.classList.contains("completed")) {
                    // @ts-ignore
                    todo.style.display = "flex";
                } else {
                    // @ts-ignore
                    todo.style.display = "none";
                }
                break;
        }
    });
}