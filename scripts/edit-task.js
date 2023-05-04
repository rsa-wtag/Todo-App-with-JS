import { CLICK_EVENT, HIDE_CLASS } from "/scripts/constants.js";
import createButton from "/scripts/factory/createButton.js";
import toggleButton from "/scripts/factory/toggleButton.js";
import disableEditing from "/scripts/factory/disableEditing.js";

function saveEvent(
  buttons,
  inputElement,
  tasks,
  id,
  saveEventHandler,
  saveAndDoneEventHandler,
  revertEventHandler
) {
  disableEditing(inputElement);
  tasks[id].content = inputElement.textContent;
  toggleButton(...buttons);
  const [saveButton, , , , saveAndDoneButton, revertButton] = buttons;
  saveButton.removeEventListener(CLICK_EVENT, saveEventHandler);
  revertButton.removeEventListener(CLICK_EVENT, revertEventHandler);
  saveAndDoneButton.removeEventListener(CLICK_EVENT, saveAndDoneEventHandler);
}

function onTodoDone(
  buttons,
  inputElement,
  toolbar,
  tasks,
  id,
  editEventHandler,
  saveEventHandler,
  saveAndDoneEventHandler,
  revertEventHandler
) {
  disableEditing(inputElement);
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

  saveButton.removeEventListener(CLICK_EVENT, saveEventHandler);
  revertButton.removeEventListener(CLICK_EVENT, revertEventHandler);
  saveAndDoneButton.removeEventListener(CLICK_EVENT, saveAndDoneEventHandler);
}

function revertEvent(
  buttons,
  inputElement,
  tasks,
  id,
  prevContent,
  saveEventHandler,
  saveAndDoneEventHandler,
  revertEventHandler
) {
  inputElement.innerText = prevContent;
  disableEditing(inputElement);
  tasks[id].content = inputElement.textContent;
  toggleButton(...buttons);
  const [saveButton, , , , saveAndDoneButton, revertButton] = buttons;

  saveButton.removeEventListener(CLICK_EVENT, saveEventHandler);
  revertButton.removeEventListener(CLICK_EVENT, revertEventHandler);
  saveAndDoneButton.removeEventListener(CLICK_EVENT, saveAndDoneEventHandler);
}

function getTaskCompletedDays(time) {
  const now = Date.now();
  const diffTime = now - time;
  const diffHours = diffTime / (1000 * 60 * 60);
  return Math.ceil(diffHours / 24);
}

function onEditButtonClick(
  buttons,
  inputElement,
  toolbar,
  tasks,
  id,
  editEventHandler
) {
  const prevContent = inputElement.innerText;
  inputElement.contentEditable = true;
  inputElement.focus();
  toggleButton(...buttons);

  function saveEventHandler() {
    saveEvent(
      buttons,
      inputElement,
      tasks,
      id,
      saveEventHandler,
      saveAndDoneEventHandler,
      revertEventHandler
    );
  }

  function saveAndDoneEventHandler() {
    onTodoDone(
      buttons,
      inputElement,
      toolbar,
      tasks,
      id,
      editEventHandler,
      saveEventHandler,
      saveAndDoneEventHandler,
      revertEventHandler
    );
  }

  function revertEventHandler() {
    revertEvent(
      buttons,
      inputElement,
      tasks,
      id,
      prevContent,
      saveEventHandler,
      saveAndDoneEventHandler,
      revertEventHandler
    );
  }

  const [saveButton, , , , saveAndDoneButton, revertButton] = buttons;
  saveButton.addEventListener(CLICK_EVENT, saveEventHandler);
  saveAndDoneButton.addEventListener(CLICK_EVENT, saveAndDoneEventHandler);
  revertButton.addEventListener(CLICK_EVENT, revertEventHandler);
}

function onTaskEdit(buttons, inputElement, toolbar, tasks, id) {
  function editEventHandler() {
    onEditButtonClick(
      buttons,
      inputElement,
      toolbar,
      tasks,
      id,
      editEventHandler
    );
  }
  const editButton = buttons[2];
  editButton.addEventListener(CLICK_EVENT, editEventHandler);
}

export default onTaskEdit;
