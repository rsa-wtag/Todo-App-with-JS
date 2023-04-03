function doneTaskEventListener(done, edit, input_element, currentDate, tools) {
  done.addEventListener("click", () => {
    input_element.classList.add("done");

    done.classList.add("hide");
    console.log(edit);
    edit.classList.add("hide");

    const now = new Date();
    const diffTime = now.getTime() - currentDate.getTime();
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
export default doneTaskEventListener;
