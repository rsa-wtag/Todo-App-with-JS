function editTaskEventListener(edit, input_element, tools) {
  edit.addEventListener("click", () => {
    input_element.contentEditable = true;
    input_element.focus();
    edit.classList.add("hide");

    const saveButton = document.createElement("button");
    saveButton.innerText = "Save";

    tools.insertBefore(saveButton, tools.children[1]);

    saveButton.addEventListener("click", () => {
      input_element.setAttribute("readonly", "readonly");
      edit.classList.remove("hide");
      tools.removeChild(saveButton);
    });
  });
}
export default editTaskEventListener;
