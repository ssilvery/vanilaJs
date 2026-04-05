const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  if (toDos.length === 0) {
    const ul = document.querySelector("#todo-list");
    ul.classList.add("hidden");
  }
  saveToDos();
}

function paintToDo(newTodo) {
  const ul = document.querySelector("#todo-list");
  const li = document.createElement('li');
  ul.classList.remove("hidden");
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const logInUser = localStorage.getItem("username");
  if (!logInUser) {
    alert("투두리스트 입력전에 로그인을 해주세요");
    toDoInput.value = "";
    loginInput.focus();
    return false;
  }
  const newTodo = toDoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDoInput.value = "";
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}