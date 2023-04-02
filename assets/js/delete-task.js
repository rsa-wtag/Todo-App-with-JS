const taskList = document.querySelector("#tasks")

function deleteTaskEventListener(dlt, task){
    dlt.addEventListener("click", () => {
        taskList.removeChild(task);
    })
}
export default deleteTaskEventListener