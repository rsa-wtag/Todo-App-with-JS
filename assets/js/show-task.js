import deleteTask from "/assets/js/delete-task.js";
import doneTask from "/assets/js/done-task.js";

function showTask(inputValue, formattedDate, taskList, form, allTasks, id) {
  const task = document.createElement("div");
  task.classList.add("task");

  const task_content = document.createElement("div");
  task_content.classList.add("content");

  const inputEement = document.createElement("p");
  inputEement.classList.add("text");
  inputEement.innerText = inputValue.value;
  inputEement.contentEditable = false;

  task_content.appendChild(inputEement);

  const tools = document.createElement("div");
  tools.classList.add("actions");

  const date = document.createElement("p");
  date.innerHTML = "Created At: " + formattedDate;

  const done = document.createElement("button");
  done.classList.add("done");
  done.innerHTML = `<i class="fa-solid fa-check" id="done"></i>`;

  const edit = document.createElement("button");
  edit.classList.add("edit");
  edit.innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;

  const dlt = document.createElement("button");
  dlt.classList.add("delete");
  dlt.innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;

  tools.appendChild(date);
  tools.appendChild(done);
  tools.appendChild(edit);
  tools.appendChild(dlt);

  task_content.appendChild(tools);
  task.appendChild(task_content);
  taskList.prepend(task);

  deleteTask(dlt, task, taskList, allTasks, id);
  doneTask(done, edit, inputEement, tools, allTasks, id);

  inputValue.value = null;
  form.classList.add("hide");
}

export default showTask;
