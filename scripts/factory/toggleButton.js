import { HIDE_CLASS } from "/scripts/constants.js";

function toggleButton(...buttons) {
  buttons.forEach((e) => {
    if (e.classList.contains(HIDE_CLASS)) {
      e.classList.remove(HIDE_CLASS);
    } else {
      e.classList.add(HIDE_CLASS);
    }
  });
}

export default toggleButton;
