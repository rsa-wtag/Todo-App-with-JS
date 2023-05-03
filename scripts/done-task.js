import { CLICK_EVENT, HIDE_CLASS } from "/scripts/constants.js";
import createButton from "/scripts/factory/createButton.js";
import getTaskCompletedDays from "/scripts/factory/timeToComplete.js";
import toggleButtons from "/scripts/factory/toggleButton.js";

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
    task.done = true;
    toggleButtons(doneButton);
    if (!editButton.classList.contains(HIDE_CLASS)) {
      toggleButtons(editButton);
    }
    const diffDays = getTaskCompletedDays(task.date.getTime());

    const completedText =
      diffDays === 1 ? `Completed in 1 day` : `Completed in ${diffDays} days`;
    const completeTimeBtn = createButton(
      "complete-time",
      completedText,
      "Time to complete the task"
    );

    task.completeTime = diffDays;
    toolbar.append(completeTimeBtn);
    doneButton.removeEventListener(CLICK_EVENT, doneTask);
  }
}

export default onTaskComplete;
