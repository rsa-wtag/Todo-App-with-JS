function deleteTaskEventListener(dlt, task, taskList) {
  dlt.addEventListener("click", () => {
    taskList.removeChild(task);
  });
}
export default deleteTaskEventListener;
