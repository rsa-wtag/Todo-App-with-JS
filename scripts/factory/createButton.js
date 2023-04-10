function createButton(classToAdd, ICON, ariaLabel) {
  const button = document.createElement("button");
  button.classList.add(classToAdd);
  button.innerHTML = ICON;
  button.setAttribute("aria-label", ariaLabel);
  return button;
}
export default createButton;
