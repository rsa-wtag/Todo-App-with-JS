import { CLICK_EVENT, HIDE_CLASS } from "/scripts/constants.js";
import createButton from "/scripts/factory/createButton.js";
import getTaskCompletedDays from "/scripts/factory/timeToComplete.js";
import toggleButton from "/scripts/factory/toggleButton.js";

function onTaskComplete(
  doneButton,
  editButton,
  inputElement,
  toolbar,
  tasks,
  id
) {
  function doneTask() {
    const task = tasks[id];
    task.done = true;
    toggleButton(doneButton, editButton);
    const diffDays = getTaskCompletedDays(task.date.getTime());
    inputElement.classList.add("done");

    const completedText =
      diffDays === 1 ? `Completed in 1 day` : `Completed in ${diffDays} days`;
    const completeTimeBtn = createButton(
      "complete-time",
      completedText,
      "Time to complete the task"
    );
    toolbar.append(completeTimeBtn);
  }
  return doneTask;
}

export default onTaskComplete;
