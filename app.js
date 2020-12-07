const inputTodo = document.querySelector('.input-todo');
const buttonTodo = document.querySelector('.button-todo');
const listTodo = document.querySelector('.list-todo');


buttonTodo.addEventListener('click', addTodo)
listTodo.addEventListener('click', deleteCheck);

function addTodo(event){
    event.preventDefault();
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = inputTodo.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"> </i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    listTodo.appendChild(todoDiv);

    inputTodo.value = "";
}

function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }

    if(item.classList[0] === "complete-btn"){
       const todo = item.parentElement
       todo.classList.toggle("completed") 
    }
}

