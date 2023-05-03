import { CLICK_EVENT, HIDE_CLASS } from "/scripts/constants.js";
import createButton from "/scripts/factory/createButton.js";
import getTaskCompletedDays from "/scripts/factory/timeToComplete.js";

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
    const task = tasks[id];
    task.doneButton = true;
    inputElement.classList.add("done");
    doneButton.classList.add(HIDE_CLASS);
    editButton.classList.add(HIDE_CLASS);
    const diffDays = getTaskCompletedDays(task.date.getTime());

    const completedText =
      diffDays === 1 ? `Completed in 1 day` : `Completed in ${diffDays} days`;
    const completeTimeBtn = createButton(
      "complete-time",
      completedText,
      "Time to complete the task"
    );

    task.completeTime = diffDays;
    toolbar.appendChild(completeTimeBtn);
    doneButton.removeEventListener(CLICK_EVENT, doneTask);
  }
}

export default onTaskComplete;
