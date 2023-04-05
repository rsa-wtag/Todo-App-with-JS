import { CLICK_EVENT } from "/assets/js/constants.js";

function deleteTaskEventListener(dlt, task, taskList) {
  dlt.addEventListener(CLICK_EVENT, () => {
    taskList.removeChild(task);
  });
}
export default deleteTaskEventListener;
