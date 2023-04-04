function editTaskEventListener(
  dlt,
  done,
  edit,
  revert,
  saveButton,
  input_element,
  tools
) {
  edit.addEventListener("click", () => {
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

    saveButton.addEventListener("click", () => {
      saveEvent();
      edit.classList.remove("hide");
    });

    done.addEventListener("click", () => {
      saveEvent();
    });

    revert.addEventListener("click", (event) => {
      input_element.innerText = prevContent;
      saveEvent();
      edit.classList.remove("hide");
    });
  });
}
export default editTaskEventListener;
