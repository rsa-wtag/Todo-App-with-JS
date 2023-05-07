import { CLICK_EVENT } from "/scripts/constants.js";

function removeEventListeners(
  buttons,
  saveEventHandler,
  saveAndDoneEventHandler,
  revertEventHandler
) {
  const [saveButton, , , , saveAndDoneButton, revertButton] = buttons;
  saveButton.removeEventListener(CLICK_EVENT, saveEventHandler);
  saveAndDoneButton.removeEventListener(CLICK_EVENT, saveAndDoneEventHandler);
  revertButton.removeEventListener(CLICK_EVENT, revertEventHandler);
}

export default removeEventListeners;
