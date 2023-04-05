import { CLICK_EVENT } from "/assets/js/constants.js";

function doneTask(done, edit, inputElement, tools, allTasks, id) {
  done.addEventListener(CLICK_EVENT, () => {
    inputElement.classList.add("done");
    allTasks[id].done = true;
    done.classList.add("hide");
    edit.classList.add("hide");

    const now = new Date();
    const diffTime = now.getTime() - allTasks[id].date.getTime();
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    let completeTime = document.createElement("button");
    completeTime.innerText = `Completed in `;

    if (diffDays > 0) {
      completeTime.innerText += diffDays.toString() + " days";
    } else {
      completeTime.innerText += diffHours.toString() + " hours";
    }

    tools.appendChild(completeTime);
  });
}
export default doneTask;
