import { HIDE_CLASS, icons } from "/assets/js/constants.js";
import createButton from "/assets/js/factory/createButton.js";
import deleteTaskEvent from "/assets/js/delete-task.js";
import doneTaskEvent from "/assets/js/done-task.js";

function showTask(inputValue, formattedDate, taskList, form, allTasks, id) {
  const task = document.createElement("div");
  task.classList.add("task");

  const task_content = document.createElement("div");
  task_content.classList.add("content");

  const inputElement = document.createElement("p");
  inputElement.classList.add("text");
  inputElement.innerText = inputValue.value;
  inputElement.contentEditable = false;

  task_content.appendChild(inputElement);

  const tools = document.createElement("div");
  tools.classList.add("actions");

  const date = document.createElement("p");
  date.innerHTML = "Created At: " + formattedDate;

  const DONE_ICON = icons["DONE"];
  const doneButton = createButton("done", DONE_ICON, "Mark task as done");

  const EDIT_ICON = icons["EDIT"];
  const editButton = createButton("edit", EDIT_ICON, "Edit task");

  const DELETE_ICON = icons["DELETE"];
  const deleteButton = createButton("delete", DELETE_ICON, "Delete task");

  tools.appendChild(date);
  tools.appendChild(doneButton);
  tools.appendChild(editButton);
  tools.appendChild(deleteButton);

  task_content.appendChild(tools);
  task.appendChild(task_content);
  taskList.prepend(task);

  deleteTaskEvent(deleteButton, task, taskList, allTasks, id);
  doneTaskEvent(doneButton, editButton, inputElement, tools, allTasks, id);

  inputValue.value = null;
  form.classList.add(HIDE_CLASS);
}

export default showTask;
