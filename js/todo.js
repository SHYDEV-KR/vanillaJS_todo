const todoForm = document.querySelector("#todoContainer #todoForm");
const todoInput = document.querySelector("#todoContainer #todoForm input");
const todoList = document.querySelector("#todoContainer #todoList");
const deleteAllBtn = document.querySelector("#todoContainer .deleteAll");

let todos = [];

function init() {
    todoForm.addEventListener("submit", handleInput);
    deleteAllBtn.addEventListener("click", deleteAll);

    const savedTodos = localStorage.getItem("todoList");

    if (savedTodos !== null) {
        const parsedTodos = JSON.parse(savedTodos);
        todos = parsedTodos;
        parsedTodos.forEach(paintTodo);
    }
}


function saveTodos() {
    localStorage.setItem("todoList", JSON.stringify(todos));
}


function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();

    todos = todos.filter((todoObj) => todoObj.id !== parseInt(li.id));
    saveTodos();
}


function paintTodo(todoObj) {
    const li = document.createElement("li");
    li.id = todoObj.id;
    
    const doneCheck = document.createElement("input");
    doneCheck.type = "checkbox";

    const span = document.createElement("span");
    const todo = todoObj.todo;
    span.innerText = todo;

    const delBtn = document.createElement("button");
    delBtn.innerText = "delete"

    li.appendChild(doneCheck);
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
    
    delBtn.addEventListener("click", deleteTodo);

    
    doneCheck.addEventListener("change", function() {
        if (this.checked) {
            todoObj.check = true;
            span.innerHTML = `<del>${todo}</del>`
        } else {
            todoObj.check = false;
            span.innerHTML = `${todo}`
        }
        saveTodos();
    });


    if (todoObj.check) {
        console.log(li);
        doneCheck.checked = true;
        span.innerHTML = `<del>${todo}</del>`;
    }
}


function handleInput(event) {
    event.preventDefault();
    
    const todo = todoInput.value;
    todoInput.value = "";

    const todoObj = {
        todo: todo,
        id: Date.now(),
        check : false,
    };
    todos.push(todoObj);

    paintTodo(todoObj);
    saveTodos();
}


function deleteAll() {
    todoList.innerHTML = "";
    localStorage.removeItem("todoList");
    todos = [];
    saveTodos();
}


init();