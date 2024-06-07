

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
addTaskBtn.addEventListener("click", function() {
  const taskText = taskInput.value;
  if (taskText.trim() !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;
    
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});

taskList.addEventListener("click", function(event) {
  if (event.target.tagName.toLowerCase() === "li") {
    
    let result = confirm("Are you sure you want to delete");
    if (result === true) {
      event.target.remove();
    } else {
      alert("you clicked cancel")
    }
  }
});