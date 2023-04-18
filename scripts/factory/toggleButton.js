import { HIDE_CLASS } from "/scripts/constants.js";

function toggleButtons(...buttons) {
  buttons.forEach((e) => {
    // console.log(e.classList, e);

    if (e.classList.contains(HIDE_CLASS)) {
      e.classList.remove(HIDE_CLASS);
    } else {
      e.classList.add(HIDE_CLASS);
    }
    // console.log(e.classList, e);
  });
  // console.log("************************");
}

export default toggleButtons;
