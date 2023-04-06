import { CLICK_EVENT } from "/assets/js/constants.js";

function doneTaskEvent(done, edit, inputElement, tools, allTasks, id) {
  done.addEventListener(CLICK_EVENT, () => {
    inputElement.classList.add("done");
    allTasks[id].done = true;
    done.classList.add("hide");
    edit.classList.add("hide");

    const now = new Date();
    const diffTime = now.getTime() - allTasks[id].date.getTime();
    const diffHours = diffTime / (1000 * 60 * 60);
    const diffDays = Math.ceil(diffHours / 24);

    let completeTime = document.createElement("button");
    completeTime.innerText = `Completed in ${diffDays.toString()} days`;
    allTasks[id].completeTime = diffDays;
    tools.appendChild(completeTime);
  });
}
export default doneTaskEvent;
