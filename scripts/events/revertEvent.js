import disableEditing from "/scripts/factory/disableEditing.js";
import toggleButton from "/scripts/factory/toggleButton.js";
import removeEventListeners from "/scripts//factory/removeEvents.js";

function revertEvent(
  buttons,
  inputElement,
  tasks,
  id,
  prevContent,
  eventHandlers
) {
  inputElement.innerText = prevContent;
  disableEditing(inputElement, false);
  toggleButton(...buttons);
  removeEventListeners(buttons, ...eventHandlers);
}

export default revertEvent;
