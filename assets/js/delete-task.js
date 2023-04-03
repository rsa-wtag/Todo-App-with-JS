const taskList = document.querySelector("#task-list")

function deleteTaskEventListener(dlt, task){
    dlt.addEventListener("click", () => {
        taskList.removeChild(task);
    })
}
export default deleteTaskEventListener