import { CLICK_EVENT, HIDE_CLASS } from "/assets/js/constants.js";

function editTaskEvent(done, edit, dlt, revertButton, saveButton, inputElement, tools, allTasks, id) {
  edit.addEventListener(CLICK_EVENT, () => {
    const prevContent = inputElement.innerText;
    inputElement.contentEditable = true;
    inputElement.focus();
    edit.classList.add(HIDE_CLASS);
    dlt.classList.add(HIDE_CLASS);
    revertButton.classList.remove(HIDE_CLASS);
    saveButton.classList.remove(HIDE_CLASS);

    function saveEvent() {
      inputElement.contentEditable = false;
      saveButton.classList.add(HIDE_CLASS);
      dlt.classList.remove(HIDE_CLASS);
      revertButton.classList.add(HIDE_CLASS);
      allTasks[id].content = inputElement.textContent;
    }

    saveButton.addEventListener(CLICK_EVENT, () => {
      saveEvent();
      edit.classList.remove(HIDE_CLASS);
    });

    done.addEventListener(CLICK_EVENT, () => {
      saveEvent();
    });

    revertButton.addEventListener(CLICK_EVENT, (event) => {
      inputElement.innerText = prevContent;
      saveEvent();
      edit.classList.remove(HIDE_CLASS);
    });
  });
}
export default editTaskEvent;
