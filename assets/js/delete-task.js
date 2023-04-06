import { CLICK_EVENT } from "/assets/js/constants.js";
import addPagination from "/assets/js//add-pagination.js";

function deleteTaskEvent(
  dlt,
  task,
  taskList,
  allTasks,
  id,
  loadButton,
  lessButton
) {
  dlt.addEventListener(CLICK_EVENT, () => {
    taskList.removeChild(task);
    delete allTasks[id];
    addPagination(taskList.children, loadButton, lessButton);
  });
}
export default deleteTaskEvent;
