window.addEventListener("load", () => {
  const form = document.querySelector("#create-task");
  const inputTask = document.querySelector("#input-task");
  const taskList = document.querySelector("#tasks");
  const createBtn = document.querySelector("#create");
  const cancel = document.querySelector("#cancel");

  createBtn.addEventListener("click", () => {
    if (form.className == "hide") {
      form.classList.remove("hide");
    }
    inputTask.focus();
  });

  cancel.addEventListener("click", () => {
    form.classList.add("hide");
    inputTask.value = "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!inputTask.value) {
      return;
    }

    const task = document.createElement("div");
    task.classList.add("task");

    const task_content = document.createElement("div");
    task_content.classList.add("content");

    const currentDate = new Date();
    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    const formattedDate = currentDate
      .toLocaleDateString("en-UK", options)
      .replace(/\//g, ".");

    task_content.innerText = inputTask.value + "\nCreated At: " + formattedDate;

    task.appendChild(task_content);

    taskList.prepend(task);

    inputTask.value = "";
    form.classList.add("hide");
  });
});
