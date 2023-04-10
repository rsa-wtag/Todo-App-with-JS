import addTask from "/scripts/add-task.js";

window.addEventListener("load", () => {
  const form = document.querySelector("#create-task");
  const inputElementValue = document.querySelector("#input-value");
  const taskListElement = document.querySelector("#task-list");
  const createButton = document.querySelector("#create-button");
  const cancelButton = document.querySelector("#cancel-button");
  const tasks = {};
  let id = 0;
  addTask(
    createButton,
    cancelButton,
    form,
    inputElementValue,
    tasks,
    id,
    taskListElement
  );
});
