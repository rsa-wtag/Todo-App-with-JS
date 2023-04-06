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
    const numTasksShown = Array.from(taskList.children).filter(
      (task) => !task.classList.contains("hide")
    ).length;
    delete allTasks[id];
    if (numTasksShown <= 2) {
      addPagination(taskList.children, loadButton, lessButton, numTasksShown);
    }
  });
}
export default deleteTaskEvent;
