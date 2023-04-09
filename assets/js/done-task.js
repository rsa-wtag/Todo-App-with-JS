import { CLICK_EVENT, HIDE_CLASS } from "/assets/js/constants.js";
import createButton from "/assets/js/factory/createButton.js";

function doneTaskEvent(done, edit, inputElement, tools, allTasks, id) {
  done.addEventListener(CLICK_EVENT, () => {
    inputElement.classList.add("done");
    allTasks[id].done = true;
    done.classList.add(HIDE_CLASS);
    edit.classList.add(HIDE_CLASS);

    const currentDate = new Date();
    const diffTime = currentDate.getTime() - allTasks[id].date.getTime();
    const diffHours = diffTime / (1000 * 60 * 60);
    const diffDays = Math.ceil(diffHours / 24);

    const completeTimeButtonText = `Completed in ${diffDays.toString()} day${
      diffDays > 1 ? `s` : ``
    }`;
    let completeTime = createButton(
      "complete-time",
      completeTimeButtonText,
      "Time to complete the task"
    );

    allTasks[id].completeTime = diffDays;
    tools.appendChild(completeTime);
  });
}
export default doneTaskEvent;
