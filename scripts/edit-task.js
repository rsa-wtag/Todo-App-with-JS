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
  function toggleButtons(...buttons) {
    buttons.forEach((e) => {
      // console.log(e.classList.contains(HIDE_CLASS), e);
      if (e.classList.contains(HIDE_CLASS)) {
        e.classList.remove(HIDE_CLASS);
      } else {
        e.classList.add(HIDE_CLASS);
      }
    });
    // console.log();
  }

  function onEditButtonClick() {
    const prevContent = inputElement.innerText;
    inputElement.contentEditable = true;
    inputElement.focus();
    toggleButtons(editButton, deleteButton, revertButton, saveButton);

    function commonEvent() {
      inputElement.contentEditable = false;
      toggleButtons(saveButton, deleteButton, revertButton);

      // saveButton.classList.add(HIDE_CLASS);
      // revertButton.classList.add(HIDE_CLASS);
      // deleteButton.classList.remove(HIDE_CLASS);
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
      toggleButtons(editButton);
      // editButton.classList.remove(HIDE_CLASS);
      saveButton.removeEventListener(CLICK_EVENT, saveEvent);
    }

    function revertEvent() {
      inputElement.innerText = prevContent;
      commonEvent();
      tasks[id].content = inputElement.textContent;
      toggleButtons(editButton);
      // editButton.classList.remove(HIDE_CLASS);
      revertButton.removeEventListener(CLICK_EVENT, revertEvent);
    }

    saveButton.addEventListener(CLICK_EVENT, saveEvent);
    doneButton.addEventListener(CLICK_EVENT, onTodoDone);
    revertButton.addEventListener(CLICK_EVENT, revertEvent);
  }

  editButton.addEventListener(CLICK_EVENT, onEditButtonClick);
}

export default onTaskEdit;
