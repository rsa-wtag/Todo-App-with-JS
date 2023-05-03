import { CLICK_EVENT, HIDE_CLASS } from "/scripts/constants.js";
import createButton from "/scripts/factory/createButton.js";
import toggleButton from "/scripts/factory/toggleButton.js";

function saveEvent(
  doneButton,
  editButton,
  deleteButton,
  saveAndDoneButton,
  revertButton,
  saveButton,
  inputElement,
  tasks,
  id,
  saveEventHandler,
  saveAndDoneEventHandler,
  revertEventHandler
) {
  inputElement.contentEditable = false;
  tasks[id].content = inputElement.textContent;
  toggleButton(
    editButton,
    deleteButton,
    revertButton,
    saveButton,
    doneButton,
    saveAndDoneButton
  );
  saveButton.removeEventListener(CLICK_EVENT, saveEventHandler);
  revertButton.removeEventListener(CLICK_EVENT, revertEventHandler);
  saveAndDoneButton.removeEventListener(CLICK_EVENT, saveAndDoneEventHandler);
}

function onTodoDone(
  doneButton,
  editButton,
  deleteButton,
  saveAndDoneButton,
  revertButton,
  saveButton,
  inputElement,
  toolbar,
  tasks,
  id,
  editEventHandler,
  saveEventHandler,
  saveAndDoneEventHandler,
  revertEventHandler
) {
  inputElement.contentEditable = false;
  inputElement.classList.add("done");
  const task = tasks[id];
  task.done = true;
  task.content = inputElement.textContent;

  editButton.removeEventListener(CLICK_EVENT, editEventHandler);
  // doneButton.removeEventListener(CLICK_EVENT, onTodoDone);

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
  doneButton,
  editButton,
  deleteButton,
  saveAndDoneButton,
  revertButton,
  saveButton,
  inputElement,
  tasks,
  id,
  prevContent,
  saveEventHandler,
  saveAndDoneEventHandler,
  revertEventHandler
) {
  inputElement.innerText = prevContent;
  inputElement.contentEditable = false;
  tasks[id].content = inputElement.textContent;
  toggleButton(
    editButton,
    deleteButton,
    revertButton,
    saveButton,
    doneButton,
    saveAndDoneButton
  );
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
  doneButton,
  editButton,
  deleteButton,
  saveAndDoneButton,
  revertButton,
  saveButton,
  inputElement,
  toolbar,
  tasks,
  id,
  editEventHandler
) {
  const prevContent = inputElement.innerText;
  inputElement.contentEditable = true;
  inputElement.focus();
  toggleButton(
    editButton,
    deleteButton,
    revertButton,
    saveButton,
    saveAndDoneButton,
    doneButton
  );

  function saveEventHandler() {
    saveEvent(
      doneButton,
      editButton,
      deleteButton,
      saveAndDoneButton,
      revertButton,
      saveButton,
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
      doneButton,
      editButton,
      deleteButton,
      saveAndDoneButton,
      revertButton,
      saveButton,
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
      doneButton,
      editButton,
      deleteButton,
      saveAndDoneButton,
      revertButton,
      saveButton,
      inputElement,
      tasks,
      id,
      prevContent,
      saveEventHandler,
      saveAndDoneEventHandler,
      revertEventHandler
    );
  }

  saveButton.addEventListener(CLICK_EVENT, saveEventHandler);
  saveAndDoneButton.addEventListener(CLICK_EVENT, saveAndDoneEventHandler);
  revertButton.addEventListener(CLICK_EVENT, revertEventHandler);
}

function onTaskEdit(
  doneButton,
  editButton,
  deleteButton,
  saveAndDoneButton,
  revertButton,
  saveButton,
  inputElement,
  toolbar,
  tasks,
  id
) {
  function editEventHandler() {
    onEditButtonClick(
      doneButton,
      editButton,
      deleteButton,
      saveAndDoneButton,
      revertButton,
      saveButton,
      inputElement,
      toolbar,
      tasks,
      id,
      editEventHandler
    );
  }

  editButton.addEventListener(CLICK_EVENT, editEventHandler);
}

export default onTaskEdit;
