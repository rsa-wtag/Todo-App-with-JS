import { CLICK_EVENT } from "/assets/js/constants.js";
import deleteTaskEventListener from "/assets/js/delete-task.js";
import doneTaskEventListener from "/assets/js/done-task.js";
import editTaskEventListener from "/assets/js/edit-task.js";

window.addEventListener("load", () => {
  const form = document.querySelector("#create-task");
  const inputValue = document.querySelector("#input-value");
  const taskList = document.querySelector("#task-list");
  const createButton = document.querySelector("#create-button");
  const cancelButton = document.querySelector("#cancel-button");

  createButton.addEventListener(CLICK_EVENT, () => {
    if (form.className == "hide") {
      form.classList.remove("hide");
    }
    inputValue.focus();
  });

  cancelButton.addEventListener(CLICK_EVENT, () => {
    form.classList.add("hide");
    inputValue.value = null;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!inputValue.value) {
      return;
    }

    const task = document.createElement("div");
    task.classList.add("task");
    const task_content = document.createElement("div");
    task_content.classList.add("content");

    const currentDate = new Date();
    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    const formattedDate = currentDate
      .toLocaleDateString("en-UK", options)
      .replace(/\//g, ".");

    const input_element = document.createElement("p");
    input_element.classList.add("text");
    input_element.innerText = inputValue.value;
    input_element.contentEditable = false;

    task_content.appendChild(input_element);
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

    inputValue.value = null;
    form.classList.add("hide");

    deleteTaskEventListener(dlt, task, taskList);
    doneTaskEventListener(done, edit, input_element, currentDate, tools);
    editTaskEventListener(
      dlt,
      done,
      edit,
      revert,
      saveButton,
      input_element,
      tools
    );
  });
});
