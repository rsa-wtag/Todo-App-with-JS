import disableEditing from "/scripts/factory/disableEditing.js";
import toggleButton from "/scripts/factory/toggleButton.js";

function revertEvent(buttons, textElement, prevContent) {
  textElement.innerText = prevContent;
  disableEditing(textElement, false);
  toggleButton(...buttons);
}

export default revertEvent;
