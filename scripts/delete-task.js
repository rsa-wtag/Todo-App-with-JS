import { CLICK_EVENT } from "/scripts/constants.js";

function onDeleteTask(deleteButton, task, taskListElement, tasks, id) {
  function deleteTask() {
    taskListElement.removeChild(task);
    delete tasks[id];
    deleteButton.removeEventListener(CLICK_EVENT, deleteTask);
  }

  deleteButton.addEventListener(CLICK_EVENT, deleteTask);
}

export default onDeleteTask;
