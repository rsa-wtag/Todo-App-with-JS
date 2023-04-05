import { CLICK_EVENT } from "/assets/js/constants.js";

function editTaskEventListener(
  dlt,
  done,
  edit,
  revert,
  saveButton,
  input_element,
  tools
) {
  edit.addEventListener(CLICK_EVENT, () => {
    const prevContent = input_element.innerText;
    input_element.contentEditable = true;
    input_element.focus();
    edit.classList.add("hide");
    dlt.classList.add("hide");
    revert.classList.remove("hide");
    saveButton.classList.remove("hide");

    function saveEvent() {
      input_element.contentEditable = false;
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
      input_element.innerText = prevContent;
      saveEvent();
      edit.classList.remove("hide");
    });
  });
}
export default editTaskEventListener;
