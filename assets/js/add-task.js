import { CLICK_EVENT } from "/assets/js/constants.js";
import showTask from "/assets/js/show-task.js";

function addTask(
  createButton,
  cancelButton,
  form,
  inputValue,
  allTasks,
  id,
  taskList
) {
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

    const currentDate = new Date();
    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    const formattedDate = currentDate
      .toLocaleDateString("en-UK", options)
      .replace(/\//g, ".");

    let taskObject = {
      content: inputValue.value,
      date: formattedDate,
      done: false,
    };

    allTasks[id] = taskObject;
    showTask(inputValue, formattedDate, taskList, form, allTasks, id);
    id++;
  });
}

export default addTask;
