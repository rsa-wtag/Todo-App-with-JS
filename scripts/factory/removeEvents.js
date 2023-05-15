import { CLICK_EVENT } from "/scripts/constants.js";

function removeEventListeners(buttons, EventHandlers) {
  const [
    saveButton,
    doneButton,
    editButton,
    deleteButton,
    saveAndDoneButton,
    revertButton,
  ] = buttons;

  const [
    doneTask,
    editEventHandler,
    saveEventHandler,
    saveAndDoneEventHandler,
    revertEventHandler,
  ] = EventHandlers;

  doneButton.removeEventListener(CLICK_EVENT, doneTask);
  editButton.removeEventListener(CLICK_EVENT, editEventHandler);
  saveButton.addEventListener(CLICK_EVENT, saveEventHandler);
  saveAndDoneButton.addEventListener(CLICK_EVENT, saveAndDoneEventHandler);
  revertButton.addEventListener(CLICK_EVENT, revertEventHandler);
}

export default removeEventListeners;
