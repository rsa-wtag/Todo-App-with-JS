function createToolbar(date, buttons) {
  const toolbar = document.createElement("div");
  toolbar.classList.add("actions");
  toolbar.append(date, ...buttons);
  return toolbar;
}

export default createToolbar;
