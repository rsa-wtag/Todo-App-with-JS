import { HIDE_CLASS, icons } from "/scripts/constants.js";
import createButton from "/scripts/factory/createButton.js";
import onDeleteTask from "/scripts/delete-task.js";

function showTask(inputValue, formattedDate, taskListElement, form, tasks, id) {
  const task = document.createElement("div");
  task.classList.add("task");

  const task_content = document.createElement("div");
  task_content.classList.add("content");

  const inputElement = document.createElement("p");
  inputElement.classList.add("text");
  inputElement.innerText = inputValue.value;
  inputElement.contentEditable = false;

  task_content.appendChild(inputElement);

  const toolbar = document.createElement("div");
  toolbar.classList.add("actions");

  const date = document.createElement("p");
  date.innerHTML = "Created At: " + formattedDate;

  const DONE_ICON = icons["DONE"];
  const doneButton = createButton("done", DONE_ICON, "Mark task as done");

  const EDIT_ICON = icons["EDIT"];
  const editButton = createButton("edit", EDIT_ICON, "Edit task");

  const DELETE_ICON = icons["DELETE"];
  const deleteButton = createButton("delete", DELETE_ICON, "Delete task");

  toolbar.appendChild(date);
  toolbar.appendChild(doneButton);
  toolbar.appendChild(editButton);
  toolbar.appendChild(deleteButton);

  task_content.appendChild(toolbar);
  task.appendChild(task_content);
  taskListElement.prepend(task);
  onDeleteTask(deleteButton, task, taskListElement, tasks, id);

  inputValue.value = null;
  form.classList.add(HIDE_CLASS);
}

export default showTask;
