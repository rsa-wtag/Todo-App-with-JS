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
import createTask from "/scripts/factory/createTask.js";
import createToolbar from "/scripts/factory/createToolbar.js";
import { CLICK_EVENT } from "/scripts/constants.js";
import saveEvent from "/scripts/events/saveEvent.js";
import onTodoDone from "/scripts/events/onTodoDone.js";
import revertEvent from "/scripts/events/revertEvent.js";

function showTask(inputElement, formattedDate, form, tasks, id) {
  const [task_content, task, textElement] = createTask(inputElement);

  const date = document.createElement(
    "p",
    "Created At: " + formattedDate,
    true
  );
  const saveButton = createButton(HIDE_CLASS, "Save", "Save the task");
  const doneButton = createButton("done", DONE_ICON, "Mark task as done");
  const editButton = createButton("edit", EDIT_ICON, "Edit task");
  const deleteButton = createButton("delete", DELETE_ICON, "Delete task");
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

  const toolbar = createToolbar(date, buttons);
  task_content.append(toolbar);
  task.append(task_content);
  const taskListElement = document.querySelector("#task-list");
  taskListElement.prepend(task);

  function saveEventHandler() {
    saveEvent(buttons, textElement, tasks, id);
  }

  function saveAndDoneEventHandler() {
    onTodoDone(buttons, textElement, toolbar, tasks, id);
  }

  function revertEventHandler() {
    revertEvent(buttons, textElement, tasks[id].content);
  }

  const doneTask = onTaskComplete(
    doneButton,
    editButton,
    textElement,
    toolbar,
    tasks,
    id
  );
  const editEventHandler = onTaskEdit(buttons, textElement);

  const eventHandlers = [
    doneTask,
    editEventHandler,
    saveEventHandler,
    saveAndDoneEventHandler,
    revertEventHandler,
  ];
  const deleteTask = onDeleteTask(
    buttons,
    task,
    taskListElement,
    tasks,
    id,
    eventHandlers
  );

  deleteButton.addEventListener(CLICK_EVENT, deleteTask);
  doneButton.addEventListener(CLICK_EVENT, doneTask);
  editButton.addEventListener(CLICK_EVENT, editEventHandler);
  saveButton.addEventListener(CLICK_EVENT, saveEventHandler);
  saveAndDoneButton.addEventListener(CLICK_EVENT, saveAndDoneEventHandler);
  revertButton.addEventListener(CLICK_EVENT, revertEventHandler);

  inputElement.value = null;
  toggleButton(form);
}

export default showTask;
