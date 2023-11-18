const todoInput = document.getElementById("todoInput");
const listHolder = document.getElementById("listHolder");

function addTask() {
  //  Check for no todo input
  if (todoInput.value.trim() === "") {
    alert("You Must Enter A ToDo. Please Try Again.");
  } else {
    //  Create an empty li (list item) element
    let li = document.createElement("li");

    //  Fill in the li text
    li.innerHTML = todoInput.value;

    //  Add the li to the ul (unordered list)
    listHolder.appendChild(li);

    //  Create the "x" used for todo deletion
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  //  Clear out todo textbox
  todoInput.value = "";
}

//  Add event listener to the unordered list
listHolder.addEventListener("click", function (e) {
  //  If target is LI, toggle checked status
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  //  If target is SPAN, remove the todo item
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

//  Write current todo list contents to local storage
function saveData() {
  localStorage.setItem("data", listHolder.innerHTML);
}

//  Retrieve the current todo list contents from local storage
function showToDoList() {
  listHolder.innerHTML = localStorage.getItem("data");
}

showToDoList();
