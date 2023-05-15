import onEditButtonClick from "/scripts/events/onEditButtonClick.js";

function onTaskEdit(buttons, inputElement) {
  function editEventHandler() {
    onEditButtonClick(buttons, inputElement);
  }
  return editEventHandler;
}

export default onTaskEdit;
