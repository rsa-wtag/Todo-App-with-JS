import disableEditing from "/scripts/factory/disableEditing.js";
import toggleButton from "/scripts/factory/toggleButton.js";
import removeEventListeners from "/scripts/factory/removeEvents.js";

function saveEvent(buttons, inputElement, tasks, id, eventHandlers) {
  disableEditing(inputElement, false);
  tasks[id].content = inputElement.textContent;
  toggleButton(...buttons);
  removeEventListeners(buttons, ...eventHandlers);
}

export default saveEvent;
