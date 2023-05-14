import { CLICK_EVENT, HIDE_CLASS } from "/scripts/constants.js";
import showTask from "/scripts/show-task.js";
import toggleButton from "/scripts/factory/toggleButton.js";

function addTask(
  createButton,
  cancelButton,
  form,
  inputElement,
  tasks,
  id,
  taskListElement
) {
  function createEventHandler() {
    if (form.classList.contains(HIDE_CLASS)) {
      toggleButton(form);
      inputElement.focus();
    }
  }

  function cancelEventHandler() {
    toggleButton(form);
    inputElement.value = null;
  }

  createButton.addEventListener(CLICK_EVENT, createEventHandler);

  cancelButton.addEventListener(CLICK_EVENT, cancelEventHandler);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!inputElement.value) {
      return;
    }

    const currentDate = new Date();
    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    const formattedDate = currentDate
      .toLocaleDateString("en-UK", options)
      .replace(/\//g, ".");

    let taskObject = {
      content: inputElement.value,
      date: currentDate,
      done: false,
    };

    tasks[id] = taskObject;
    showTask(inputElement, formattedDate, taskListElement, form, tasks, id);
    id++;
  });
}

export default addTask;
