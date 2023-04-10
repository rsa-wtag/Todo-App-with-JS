import { CLICK_EVENT, HIDE_CLASS } from "/scripts/constants.js";
import createButton from "/scripts/factory/createButton.js";

function onTaskComplete(
  doneButton,
  editButton,
  inputElement,
  toolbar,
  tasks,
  id
) {
  doneButton.addEventListener(CLICK_EVENT, doneTask);

  function doneTask() {
    inputElement.classList.add("done");
    const task = tasks[id];
    task.doneButton = true;
    doneButton.classList.add(HIDE_CLASS);
    editButton.classList.add(HIDE_CLASS);

    const currentDate = new Date();
    const diffTime = currentDate.getTime() - task.date.getTime();
    const diffHours = diffTime / (1000 * 60 * 60);
    const diffDays = Math.ceil(diffHours / 24);

    const completeTimeButtonText =
      diffDays === 1 ? `Completed in 1 day` : `Completed in ${diffDays} days`;
    const completeTime = createButton(
      "complete-time",
      completeTimeButtonText,
      "Time to complete the task"
    );

    task.completeTime = diffDays;
    toolbar.appendChild(completeTime);
    doneButton.removeEventListener(CLICK_EVENT, doneTask);
  }
}

export default onTaskComplete;
