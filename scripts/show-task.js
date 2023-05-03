import { HIDE_CLASS, icons } from "/scripts/constants.js";
import createButton from "/scripts/factory/createButton.js";
import toggleButton from "/scripts/factory/toggleButton.js";
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
    icons["DONE_ICON"],
    "Mark task as done"
  );
  const editButton = createButton("edit", icons["EDIT_ICON"], "Edit task");
  const deleteButton = createButton(
    "delete",
    icons["DELETE_ICON"],
    "Delete task"
  );
  const saveAndDoneButton = createButton(
    HIDE_CLASS,
    icons["DONE_ICON"],
    "Save task and mark as done"
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
    saveAndDoneButton,
    revertButton
  );

  task_content.append(toolbar);
  task.append(task_content);
  taskListElement.prepend(task);
  onDeleteTask(deleteButton, task, taskListElement, tasks, id);
  onTaskComplete(doneButton, editButton, textElement, toolbar, tasks, id);
  onTaskEdit(
    doneButton,
    editButton,
    deleteButton,
    saveAndDoneButton,
    revertButton,
    saveButton,
    textElement,
    toolbar,
    tasks,
    id
  );
  inputElement.value = null;
  toggleButton(form);
}

export default showTask;
