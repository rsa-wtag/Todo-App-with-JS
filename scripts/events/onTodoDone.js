import disableEditing from "/scripts/factory/disableEditing.js";
import toggleButton from "/scripts/factory/toggleButton.js";
import createButton from "/scripts/factory/createButton.js";
import getTaskCompletedDays from "/scripts/factory/timeToComplete.js";

function onTodoDone(buttons, textElement, toolbar, tasks, id) {
  disableEditing(textElement, false);
  textElement.classList.add("done");
  const task = tasks[id];
  task.done = true;
  task.content = textElement.textContent;
  const [saveButton, , , deleteButton, saveAndDoneButton, revertButton] =
    buttons;
  toggleButton(saveAndDoneButton, saveButton, revertButton, deleteButton);

  const diffDays = getTaskCompletedDays(task.date.getTime());
  const completedText =
    diffDays === 1 ? `Completed in 1 day` : `Completed in ${diffDays} days`;
  const completeTimeBtn = createButton(
    "complete-time",
    completedText,
    "Time to complete the task"
  );
  toolbar.append(completeTimeBtn);
}

export default onTodoDone;
