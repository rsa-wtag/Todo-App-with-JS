import addTaskEvent from "/assets/js/add-task.js";

window.addEventListener("load", () => {
  const form = document.querySelector("#create-task");
  const inputValue = document.querySelector("#input-value");
  const taskList = document.querySelector("#task-list");
  const createButton = document.querySelector("#create-button");
  const cancelButton = document.querySelector("#cancel-button");
  const allTasks = {};
  let id = 0;
  const icons = {
    EDIT: `<i class="fa-solid fa-pen" id="edit"></i>`,
    DELETE: `<i class="fa-solid fa-trash-can" id="delete"></i>`,
    DONE: `<i class="fa-solid fa-check" id="done"></i>`,
  };
  addTaskEvent(
    createButton,
    cancelButton,
    form,
    inputValue,
    allTasks,
    id,
    taskList,
    icons
  );
});
