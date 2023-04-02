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

    const input_element = document.createElement("input");
    input_element.type = "text";
    input_element.value = inputTask.value;
    input_element.setAttribute("readonly", "readonly");

    task_content.appendChild(input_element);

    const tools = document.createElement("div");

    tools.innerHTML +=
      "Created At: " +
      formattedDate +
      "<br>" +
      `<img src="./assets/images/check.png" alt="Done button" id="done" />` +
      `<img src="./assets/images/pen.png" alt="Edit button" id="edit" />` +
      `<img src="./assets/images/trash.png" alt="Delete button" id="delete" /><br><br>`;

    task_content.appendChild(tools);

    task.appendChild(task_content);

    taskList.prepend(task);

    inputTask.value = "";
    form.classList.add("hide");
  });
});
