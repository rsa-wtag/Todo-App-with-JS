import { CLICK_EVENT, HIDE_CLASS } from "/scripts/constants.js";

function onTaskEdit(
  doneButton,
  editButton,
  deleteButton,
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
    [editButton, deleteButton].forEach((e) => e.classList.add(HIDE_CLASS));
    [revertButton, saveButton].forEach((e) => e.classList.remove(HIDE_CLASS));

    function commonEvent() {
      inputElement.contentEditable = false;
      saveButton.classList.add(HIDE_CLASS);
      revertButton.classList.add(HIDE_CLASS);
      deleteButton.classList.remove(HIDE_CLASS);
    }
    function onTodoDone() {
      commonEvent();
      tasks[id].content = inputElement.textContent;
      editButton.removeEventListener(CLICK_EVENT, onEditButtonClick);
      doneButton.removeEventListener(CLICK_EVENT, onTodoDone);
    }

    function saveEvent() {
      commonEvent();
      tasks[id].content = inputElement.textContent;
      editButton.classList.remove(HIDE_CLASS);
      saveButton.removeEventListener(CLICK_EVENT, saveEvent);
    }

    function revertEvent() {
      inputElement.innerText = prevContent;
      commonEvent();
      tasks[id].content = inputElement.textContent;
      editButton.classList.remove(HIDE_CLASS);
      revertButton.removeEventListener(CLICK_EVENT, revertEvent);
    }

    saveButton.addEventListener(CLICK_EVENT, saveEvent);
    doneButton.addEventListener(CLICK_EVENT, onTodoDone);
    revertButton.addEventListener(CLICK_EVENT, revertEvent);
  }

  editButton.addEventListener(CLICK_EVENT, onEditButtonClick);
}

export default onTaskEdit;
