function showTask(inputValue, formattedDate, taskList, form) {
  const task = document.createElement("div");
  task.classList.add("task");

  const task_content = document.createElement("div");
  task_content.classList.add("content");

  const input_element = document.createElement("p");
  input_element.classList.add("text");
  input_element.innerText = inputValue.value;
  input_element.contentEditable = false;

  task_content.appendChild(input_element);

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

  inputValue.value = null;
  form.classList.add("hide");
}

export default showTask;
