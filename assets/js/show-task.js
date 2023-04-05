import deleteTaskEvent from "/assets/js/delete-task.js";
import doneTaskEvent from "/assets/js/done-task.js";
import editTaskEvent from "/assets/js/edit-task.js";

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

  const saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  saveButton.classList.add("hide");

  const done = document.createElement("button");
  done.innerHTML = `<i class="fa-solid fa-check" id="done"></i>`;

  const edit = document.createElement("button");
  edit.innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;

  const dlt = document.createElement("button");
  dlt.innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;

  const revert = document.createElement("button");
  revert.innerHTML = `<i class="fa-solid fa-trash-can" id="revert"></i>`;
  revert.classList.add("hide");

  tools.appendChild(date);
  tools.appendChild(saveButton);
  tools.appendChild(done);
  tools.appendChild(edit);
  tools.appendChild(dlt);
  tools.appendChild(revert);

  task_content.appendChild(tools);
  task.appendChild(task_content);
  taskList.prepend(task);

  deleteTaskEvent(dlt, task, taskList, allTasks, id);
  doneTaskEvent(done, edit, inputElement, tools, allTasks, id);
  editTaskEvent(
    done,
    edit,
    dlt,
    revert,
    saveButton,
    inputElement,
    tools,
    allTasks,
    id
  );

  inputValue.value = null;
  form.classList.add("hide");
}

export default showTask;
