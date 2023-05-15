import toggleButton from "/scripts/factory/toggleButton.js";
import disableEditing from "/scripts/factory/disableEditing.js";

function onEditButtonClick(buttons, textElement) {
  disableEditing(textElement);
  textElement.focus();
  toggleButton(...buttons);
}

export default onEditButtonClick;
