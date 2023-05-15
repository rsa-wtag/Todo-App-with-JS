import { CLICK_EVENT } from "/scripts/constants.js";
import removeEventListeners from "/scripts/factory/removeEvents.js";

function onDeleteTask(
  buttons,
  task,
  taskListElement,
  tasks,
  id,
  eventHandlers
) {
  function deleteTask() {
    taskListElement.removeChild(task);
    delete tasks[id];
    removeEventListeners(buttons, eventHandlers);
    const deleteButton = buttons[3];
    deleteButton.removeEventListener(CLICK_EVENT, deleteTask);
  }

  return deleteTask;
}

export default onDeleteTask;
