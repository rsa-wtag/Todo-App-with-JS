import { CLICK_EVENT } from "/assets/js/constants.js";

function editTask(done, edit, dlt, revert, saveButton, inputElement, tools, allTasks, id) {
  edit.addEventListener(CLICK_EVENT, () => {
    const prevContent = inputElement.innerText;
    inputElement.contentEditable = true;
    console.log(inputElement, prevContent);
    inputElement.focus();
    edit.classList.add("hide");
    dlt.classList.add("hide");
    revert.classList.remove("hide");
    saveButton.classList.remove("hide");

    function saveEvent() {
      inputElement.contentEditable = false;
      saveButton.classList.add("hide");
      dlt.classList.remove("hide");
      revert.classList.add("hide");
    }

    saveButton.addEventListener(CLICK_EVENT, () => {
      saveEvent();
      edit.classList.remove("hide");
    });

    done.addEventListener(CLICK_EVENT, () => {
      saveEvent();
    });

    revert.addEventListener(CLICK_EVENT, (event) => {
      inputElement.innerText = prevContent;
      saveEvent();
      edit.classList.remove("hide");
    });
  });
}
export default editTask;
