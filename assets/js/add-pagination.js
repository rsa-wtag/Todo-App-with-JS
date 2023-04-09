function addPagination(allChild, loadButton, lessButton, numTasksShown) {
  const numTasksToShow = 2;
  let index = numTasksToShow;

  if (numTasksShown <= numTasksToShow) {
    console.log(lessButton.classList);
    lessButton.classList.add("hide");
  }

  if (allChild.length > numTasksToShow) {
    loadButton.classList.remove("hide");
  } else {
    loadButton.classList.add("hide");
  }

  for (let i = 0; i < allChild.length; i++) {
    if (i >= index) {
      allChild[i].classList.add("hide");
    } else {
      allChild[i].classList.remove("hide");
    }
  }

  loadButton.addEventListener("click", () => {
    console.log(index + numTasksToShow, allChild.length);
    for (
      let i = index;
      i < Math.min(index + numTasksToShow, allChild.length);
      i++
    ) {
      allChild[i].classList.remove("hide");
    }

    index = Math.min(index + numTasksToShow, allChild.length);

    if (index >= Math.min(index + numTasksToShow, allChild.length)) {
      loadButton.classList.add("hide");
      lessButton.classList.remove("hide");
    }
  });

  lessButton.addEventListener("click", () => {
    loadButton.classList.remove("hide");
    lessButton.classList.add("hide");

    for (let i = numTasksToShow; i < allChild.length; i++) {
      allChild[i].classList.add("hide");
    }
    index = numTasksToShow;
  });
}
export default addPagination;
