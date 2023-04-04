function editTaskEventListener(dlt, done, edit, input_element, tools) {
  edit.addEventListener("click", () => {
    const prevContent = input_element.innerText;
    input_element.contentEditable = true;
    input_element.focus();
    edit.classList.add("hide");
    dlt.classList.add("hide");

    const revert = document.createElement("button");
    revert.innerHTML = `<i class="fa-solid fa-trash-can" id="revert"></i>`;
    tools.appendChild(revert);

    const saveButton = document.createElement("button");
    saveButton.innerText = "Save";
    tools.insertBefore(saveButton, tools.children[1]);

    function saveEvent() {
      input_element.contentEditable = false;
      tools.removeChild(saveButton);
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
