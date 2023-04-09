import { CLICK_EVENT } from "/assets/js/constants.js";

function deleteTaskEvent(deleteButton, task, taskList, allTasks, id) {
  deleteButton.addEventListener(CLICK_EVENT, () => {
    taskList.removeChild(task);
    delete allTasks[id];
  });
}
export default deleteTaskEvent;
