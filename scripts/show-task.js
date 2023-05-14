import {
  HIDE_CLASS,
  EDIT_ICON,
  DELETE_ICON,
  DONE_ICON,
  REVERT_ICON,
} from "/scripts/constants.js";
import createButton from "/scripts/factory/createButton.js";
import toggleButton from "/scripts/factory/toggleButton.js";
import onDeleteTask from "/scripts/delete-task.js";
import onTaskComplete from "/scripts/done-task.js";
import onTaskEdit from "/scripts/edit-task.js";
import disableEditing from "/scripts/factory/disableEditing.js";

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
  disableEditing(inputElement, false);

  task_content.append(textElement);

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
    DONE_ICON,
    "Mark task as done"
  );
  const editButton = createButton("edit", EDIT_ICON, "Edit task");
  const deleteButton = createButton(
    "delete",
    DELETE_ICON,
    "Delete task"
  );
  const saveAndDoneButton = createButton(
    HIDE_CLASS,
    DONE_ICON,
    "Save task and mark as done"
  );

  const revertButton = createButton(
    HIDE_CLASS,
    REVERT_ICON,
    "Revert to previous task"
  );

  const buttons = [
    saveButton,
    doneButton,
    editButton,
    deleteButton,
    saveAndDoneButton,
    revertButton,
  ];

  toolbar.append(date, ...buttons);
  task_content.append(toolbar);
  task.append(task_content);
  taskListElement.prepend(task);
  onDeleteTask(deleteButton, task, taskListElement, tasks, id);
  onTaskComplete(doneButton, editButton, textElement, toolbar, tasks, id);
  onTaskEdit(buttons, textElement, toolbar, tasks, id);
  inputElement.value = null;
  toggleButton(form);
}

export default showTask;
