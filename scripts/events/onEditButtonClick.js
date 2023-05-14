import { CLICK_EVENT } from "/scripts/constants.js";
import toggleButton from "/scripts/factory/toggleButton.js";
import saveEvent from "/scripts/events/saveEvent.js";
import onTodoDone from "/scripts/events/onTodoDone.js";
import revertEvent from "/scripts/events/revertEvent.js";
import disableEditing from "/scripts/factory/disableEditing.js";

function onEditButtonClick(
  buttons,
  inputElement,
  toolbar,
  tasks,
  id,
  editEventHandler
) {
  disableEditing(inputElement);
  inputElement.focus();
  toggleButton(...buttons);

  function saveEventHandler() {
    saveEvent(buttons, inputElement, tasks, id, eventHandlers);
  }

  function saveAndDoneEventHandler() {
    onTodoDone(
      buttons,
      inputElement,
      toolbar,
      tasks,
      id,
      editEventHandler,
      eventHandlers
    );
  }

  function revertEventHandler() {
    revertEvent(buttons, inputElement, tasks, id, prevContent, eventHandlers);
  }

  const [saveButton, , , , saveAndDoneButton, revertButton] = buttons;
  const prevContent = inputElement.innerText;
  const eventHandlers = [
    saveEventHandler,
    saveAndDoneEventHandler,
    revertEventHandler,
  ];

  saveButton.addEventListener(CLICK_EVENT, saveEventHandler);
  saveAndDoneButton.addEventListener(CLICK_EVENT, saveAndDoneEventHandler);
  revertButton.addEventListener(CLICK_EVENT, revertEventHandler);
}

export default onEditButtonClick;
