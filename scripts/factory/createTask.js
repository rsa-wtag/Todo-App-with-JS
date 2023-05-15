import disableEditing from "/scripts/factory/disableEditing.js";

function createTask(inputElement) {
  const task = document.createElement("div");
  task.classList.add("task");

  const task_content = document.createElement("div");
  task_content.classList.add("content");

  const textElement = document.createElement("p");
  textElement.classList.add("text");

  textElement.innerText = inputElement.value;
  disableEditing(inputElement, false);
  task_content.append(textElement);

  return [task_content, task, textElement];
}

export default createTask;
