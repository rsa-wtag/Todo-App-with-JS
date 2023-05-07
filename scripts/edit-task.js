import { CLICK_EVENT } from "/scripts/constants.js";
import onEditButtonClick from "/scripts//events/onEditButtonClick.js";

function onTaskEdit(buttons, inputElement, toolbar, tasks, id) {
  function editEventHandler() {
    onEditButtonClick(
      buttons,
      inputElement,
      toolbar,
      tasks,
      id,
      editEventHandler
    );
  }
  const editButton = buttons[2];
  editButton.addEventListener(CLICK_EVENT, editEventHandler);
}

export default onTaskEdit;
