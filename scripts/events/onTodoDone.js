import { CLICK_EVENT } from "/scripts/constants.js";
import disableEditing from "/scripts/factory/disableEditing.js";
import toggleButton from "/scripts/factory/toggleButton.js";
import createButton from "/scripts/factory/createButton.js";
import getTaskCompletedDays from "/scripts/factory/timeToComplete.js";
import removeEventListeners from "/scripts/factory/removeEvents.js";

function onTodoDone(
  buttons,
  inputElement,
  toolbar,
  tasks,
  id,
  editEventHandler,
  eventHandlers
) {
  disableEditing(inputElement, false);
  inputElement.classList.add("done");
  const task = tasks[id];
  task.done = true;
  task.content = inputElement.textContent;
  const [
    saveButton,
    ,
    editButton,
    deleteButton,
    saveAndDoneButton,
    revertButton,
  ] = buttons;
  editButton.removeEventListener(CLICK_EVENT, editEventHandler);
  toggleButton(saveAndDoneButton, saveButton, revertButton, deleteButton);

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
  removeEventListeners(buttons, ...eventHandlers);
}

export default onTodoDone;
