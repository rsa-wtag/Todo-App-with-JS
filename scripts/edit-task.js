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
  editButton.addEventListener(CLICK_EVENT, () => {
    const prevContent = inputElement.innerText;
    inputElement.contentEditable = true;
    inputElement.focus();
    editButton.classList.add(HIDE_CLASS);
    deleteButton.classList.add(HIDE_CLASS);
    revertButton.classList.remove(HIDE_CLASS);
    saveButton.classList.remove(HIDE_CLASS);

    function doneEvent() {
      inputElement.contentEditable = false;
      saveButton.classList.add(HIDE_CLASS);
      deleteButton.classList.remove(HIDE_CLASS);
      revertButton.classList.add(HIDE_CLASS);
      tasks[id].content = inputElement.textContent;
    }

    function saveEvent() {
      doneEvent();
      editButton.classList.remove(HIDE_CLASS);
    }

    function revertEvent() {
      inputElement.innerText = prevContent;
      doneEvent();
      editButton.classList.remove(HIDE_CLASS);
    }

    saveButton.addEventListener(CLICK_EVENT, () => {
      saveEvent();
    });

    doneButton.addEventListener(CLICK_EVENT, () => {
      doneEvent();
    });

    revertButton.addEventListener(CLICK_EVENT, () => {
      revertEvent();
    });
  });
}
export default onTaskEdit;
