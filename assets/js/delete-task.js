import { CLICK_EVENT } from "/assets/js/constants.js";

function deleteTask(dlt, task, taskList, allTasks, id) {
  dlt.addEventListener(CLICK_EVENT, () => {
    taskList.removeChild(task);
    delete allTasks[id]
  });
}
export default deleteTask;
