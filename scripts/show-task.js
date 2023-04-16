import { HIDE_CLASS, icons } from "/scripts/constants.js";
import createButton from "/scripts/factory/createButton.js";
import onDeleteTask from "/scripts/delete-task.js";
import onTaskComplete from "/scripts/done-task.js";
import onTaskEdit from "/scripts/edit-task.js";

function showTask(
  inputElement,
  formattedDate,
  taskListElement,
  form,
  tasks,
  id
) {
  const task = document.createElement("div");
  task.classList.add("task");

  const task_content = document.createElement("div");
  task_content.classList.add("content");

  const textElement = document.createElement("p");
  textElement.classList.add("text");
  textElement.innerText = inputElement.value;
  textElement.contentEditable = false;

  task_content.appendChild(textElement);

  const toolbar = document.createElement("div");
  toolbar.classList.add("actions");
  const date = document.createElement(
    "p",
    "Created At: " + formattedDate,
    true
  );
  const saveButton = createButton(HIDE_CLASS, "Save", "Save the task");
  const doneButton = createButton(
    "done",
    icons["DONE_ICON"],
    "Mark task as done"
  );
  const editButton = createButton("edit", icons["EDIT_ICON"], "Edit task");
  const deleteButton = createButton(
    "delete",
    icons["DELETE_ICON"],
    "Delete task"
  );
  const revertButton = createButton(
    HIDE_CLASS,
    icons["REVERT_ICON"],
    "Revert to previous task"
  );

  toolbar.append(
    date,
    saveButton,
    doneButton,
    editButton,
    deleteButton,
    revertButton
  );

  task_content.appendChild(toolbar);
  task.appendChild(task_content);
  taskListElement.prepend(task);
  onDeleteTask(deleteButton, task, taskListElement, tasks, id);
  onTaskComplete(doneButton, editButton, textElement, toolbar, tasks, id);
  onTaskEdit(
    doneButton,
    editButton,
    deleteButton,
    revertButton,
    saveButton,
    textElement,
    toolbar,
    tasks,
    id
  );
  inputElement.value = null;
  form.classList.add(HIDE_CLASS);
}

export default showTask;
