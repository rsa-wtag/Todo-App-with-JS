import deleteTaskEvent from "/assets/js/delete-task.js";
import { HIDE_CLASS } from "/assets/js/constants.js";

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

  const doneButton = document.createElement("button");
  doneButton.classList.add("done");
  doneButton.innerHTML = `<i class="fa-solid fa-check" id="done"></i>`;
  doneButton.setAttribute("aria-label", "Mark task as done");

  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;
  editButton.setAttribute("aria-label", "Edit task");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;
  deleteButton.setAttribute("aria-label", "Delete task");

  tools.appendChild(date);
  tools.appendChild(doneButton);
  tools.appendChild(editButton);
  tools.appendChild(deleteButton);

  task_content.appendChild(tools);
  task.appendChild(task_content);
  taskList.prepend(task);
  deleteTaskEvent(deleteButton, task, taskList, allTasks, id);

  inputValue.value = null;
  form.classList.add(HIDE_CLASS);
}

export default showTask;
