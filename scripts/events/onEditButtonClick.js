import { CLICK_EVENT } from "/scripts/constants.js";
import toggleButton from "/scripts/factory/toggleButton.js";
import saveEvent from "/scripts/events/saveEvent.js";
import onTodoDone from "/scripts/events/onTodoDone.js";
import revertEvent from "/scripts/events/revertEvent.js";

function onEditButtonClick(
  buttons,
  inputElement,
  toolbar,
  tasks,
  id,
  editEventHandler
) {
  const prevContent = inputElement.innerText;
  inputElement.contentEditable = true;
  inputElement.focus();
  toggleButton(...buttons);

  function saveEventHandler() {
    saveEvent(
      buttons,
      inputElement,
      tasks,
      id,
      saveEventHandler,
      saveAndDoneEventHandler,
      revertEventHandler
    );
  }

  function saveAndDoneEventHandler() {
    onTodoDone(
      buttons,
      inputElement,
      toolbar,
      tasks,
      id,
      editEventHandler,
      saveEventHandler,
      saveAndDoneEventHandler,
      revertEventHandler
    );
  }

  function revertEventHandler() {
    revertEvent(
      buttons,
      inputElement,
      tasks,
      id,
      prevContent,
      saveEventHandler,
      saveAndDoneEventHandler,
      revertEventHandler
    );
  }

  const [saveButton, , , , saveAndDoneButton, revertButton] = buttons;

  saveButton.addEventListener(CLICK_EVENT, saveEventHandler);
  saveAndDoneButton.addEventListener(CLICK_EVENT, saveAndDoneEventHandler);
  revertButton.addEventListener(CLICK_EVENT, revertEventHandler);
}

export default onEditButtonClick;
