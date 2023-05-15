import disableEditing from "/scripts/factory/disableEditing.js";
import toggleButton from "/scripts/factory/toggleButton.js";

function saveEvent(buttons, textElement, tasks, id) {
  disableEditing(textElement, false);
  tasks[id].content = textElement.textContent;
  toggleButton(...buttons);
}

export default saveEvent;
