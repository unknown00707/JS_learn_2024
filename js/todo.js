const toDoForm = document.getElementById('todo-form');
const toDoinput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');

    span.innerText = newTodo.text;

    const button = document.createElement('button');
    button.innerText = 'X';

    button.addEventListener('click', deleteTodo);
    li.appendChild(button);
    li.appendChild(span);

    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoinput.value;
    toDoinput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleTodoSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);

if (savedTodo != null) {
    const parsedTodos = JSON.parse(savedTodo);
    toDos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}
