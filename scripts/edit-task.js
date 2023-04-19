import { CLICK_EVENT, HIDE_CLASS } from "/scripts/constants.js";
import createButton from "/scripts/factory/createButton.js";
import toggleButtons from "/scripts/factory/toggleButton.js";

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
  function onEditButtonClick() {
    const prevContent = inputElement.innerText;
    inputElement.contentEditable = true;
    inputElement.focus();
    toggleButtons(
      editButton,
      deleteButton,
      revertButton,
      saveButton,
      saveAndDoneButton,
      doneButton
    );

    function saveEvent() {
      inputElement.contentEditable = false;
      tasks[id].content = inputElement.textContent;
      toggleButtons(
        editButton,
        deleteButton,
        revertButton,
        saveButton,
        doneButton,
        saveAndDoneButton
      );
      saveButton.removeEventListener(CLICK_EVENT, saveEvent);
      revertButton.removeEventListener(CLICK_EVENT, revertEvent);
      saveAndDoneButton.removeEventListener(CLICK_EVENT, onTodoDone);
    }

    function onTodoDone() {
      inputElement.contentEditable = false;
      inputElement.classList.add("done");
      const task = tasks[id];
      task.done = true;
      task.content = inputElement.textContent;

      editButton.removeEventListener(CLICK_EVENT, onEditButtonClick);
      doneButton.removeEventListener(CLICK_EVENT, onTodoDone);

      toggleButtons(saveAndDoneButton, saveButton, revertButton, deleteButton);

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

      saveButton.removeEventListener(CLICK_EVENT, saveEvent);
      revertButton.removeEventListener(CLICK_EVENT, revertEvent);
      saveAndDoneButton.removeEventListener(CLICK_EVENT, onTodoDone);
    }

    function getTaskCompletedDays(time) {
      const now = Date.now();
      const diffTime = now - time;
      const diffHours = diffTime / (1000 * 60 * 60);
      return Math.ceil(diffHours / 24);
    }

    function revertEvent() {
      inputElement.innerText = prevContent;
      inputElement.contentEditable = false;
      tasks[id].content = inputElement.textContent;
      toggleButtons(
        editButton,
        deleteButton,
        revertButton,
        saveButton,
        doneButton,
        saveAndDoneButton
      );
      saveButton.removeEventListener(CLICK_EVENT, saveEvent);
      revertButton.removeEventListener(CLICK_EVENT, revertEvent);
      saveAndDoneButton.removeEventListener(CLICK_EVENT, onTodoDone);
    }

    saveButton.addEventListener(CLICK_EVENT, saveEvent);
    saveAndDoneButton.addEventListener(CLICK_EVENT, onTodoDone);
    revertButton.addEventListener(CLICK_EVENT, revertEvent);
  }

  editButton.addEventListener(CLICK_EVENT, onEditButtonClick);
}

export default onTaskEdit;
