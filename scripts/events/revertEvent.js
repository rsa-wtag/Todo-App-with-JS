import disableEditing from "/scripts/factory/disableEditing.js";
import toggleButton from "/scripts/factory/toggleButton.js";
import removeEventListeners from "/scripts//factory/removeEvents.js";

function revertEvent(
  buttons,
  inputElement,
  tasks,
  id,
  prevContent,
  saveEventHandler,
  saveAndDoneEventHandler,
  revertEventHandler
) {
  inputElement.innerText = prevContent;
  disableEditing(inputElement);
  toggleButton(...buttons);
  removeEventListeners(
    buttons,
    saveEventHandler,
    saveAndDoneEventHandler,
    revertEventHandler
  );
}

export default revertEvent;
