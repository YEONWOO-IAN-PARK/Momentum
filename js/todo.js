const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

/**
 * localStorage에 Array형태의 문자열을 저장하는 기능
 */
function saveToDos() {
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

/**
 * 대상(event) 엘리먼트의 부모엘리먼트를 HTML에서 삭제하는 기능
 * @param {*} event 클릭된 엘리먼트의 이벤트정보
 */
function deleteToDo(event){
    const clickedLi = event.target.parentElement;
    clickedLi.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(clickedLi.id));
    saveToDos();

}

/**
 * HTML에 li엘리먼트를 생성하고, 자식엘리먼트로 span, button 엘리먼트를 추가하는 기능
 * (span에는 새롭게 추가된 할 일, button에는 클릭이벤트로 해당목록 삭제 함수를 지정)
 * @param {*} newTodo 사용자가 입력한 '새 할일 객체{text, id}'
 */
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

/**
 * Input창에 할일을 입력하고 엔터를 쳤을때, 추가된 할일을 목록에 추가하고 localStorage에 저장하는 기능
 * @param {*} event 
 */
function handleToDoSubmit(event) {
    event.preventDefault();     // disable submit default action "refresh"
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function sexyFilter() {

}

[1,2,3,4].filter(sexyFilter)