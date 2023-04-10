import { CLICK_EVENT } from "/scripts/constants.js";

function onDeleteTask(deleteButton, task, taskListElement, tasks, id) {
  deleteButton.addEventListener(CLICK_EVENT, deleteTask);

  function deleteTask() {
    taskList.removeChild(task);
    delete allTasks[id];
    deleteButton.removeEventListener(CLICK_EVENT, deleteTask);
  }
}

export default onDeleteTask;
