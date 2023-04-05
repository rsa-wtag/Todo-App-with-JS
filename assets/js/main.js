import addTask from "/assets/js/add-task.js";

window.addEventListener("load", () => {
  const form = document.querySelector("#create-task");
  const inputValue = document.querySelector("#input-value");
  const taskList = document.querySelector("#task-list");
  const createButton = document.querySelector("#create-button");
  const cancelButton = document.querySelector("#cancel-button");
  let allTasks = {};
  let id = 0;

  addTask(createButton, cancelButton, form, inputValue, allTasks, id, taskList);
});
