const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form  input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDosa(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li= event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo )
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo= toDoInput.value; 
    toDoInput.value = "";
    toDoList.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)