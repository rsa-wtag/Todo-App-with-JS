function createButton(classToAdd, ICON, ariaLabel) {
  const button = document.createElement("button");
  button.classList.add(classToAdd);
  button.innerHTML = ICON;
  button.setAttribute("aria-label", ariaLabel);
  return button;
}

function showTask(inputValue, formattedDate, taskList, form, icons) {
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
  const done = createButton("done", DONE_ICON, "Mark task as done");

  const EDIT_ICON = icons["EDIT"];
  const edit = createButton("edit", EDIT_ICON, "Edit task");

  const DELETE_ICON = icons["DELETE"];
  const dlt = createButton("delete", DELETE_ICON, "Delete task");

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
