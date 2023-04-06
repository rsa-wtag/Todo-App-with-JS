function addPagination(allChild, loadButton, lessButton) {
  let numTasksToShow = 2;

  if (allChild.length > numTasksToShow) {
    loadButton.classList.remove("hide");
    let index = numTasksToShow;

    for (let i = index; i < allChild.length; i++) {
      allChild[i].classList.add("hide");
    }

    loadButton.addEventListener("click", () => {
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
}
export default addPagination;
