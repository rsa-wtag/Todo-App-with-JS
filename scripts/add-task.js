import { CLICK_EVENT, HIDE_CLASS } from "/scripts/constants.js";
import showTask from "/scripts/show-task.js";

function addTask(
  createButton,
  cancelButton,
  form,
  inputElementValue,
  tasks,
  id,
  taskListElement
) {
  createButton.addEventListener(CLICK_EVENT, () => {
    if (form.className == HIDE_CLASS) {
      form.classList.remove(HIDE_CLASS);
    }
    inputElementValue.focus();
  });

  cancelButton.addEventListener(CLICK_EVENT, () => {
    form.classList.add(HIDE_CLASS);
    inputElementValue.value = null;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!inputElementValue.value) {
      return;
    }

    const currentDate = new Date();
    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    const formattedDate = currentDate
      .toLocaleDateString("en-UK", options)
      .replace(/\//g, ".");

    let taskObject = {
      content: inputElementValue.value,
      date: currentDate,
      done: false,
      compleTime: 0,
    };

    tasks[id] = taskObject;
    showTask(inputElementValue, formattedDate, taskListElement, form, tasks, id);
    id++;
  });
}

export default addTask;
