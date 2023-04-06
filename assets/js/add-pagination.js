function addPagination(allChild, loadButton) {
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

      console.log(index);
      if (index >= Math.min(index + numTasksToShow, allChild.length)) {
        console.log("wajkdgha");
        loadButton.classList.add("hide");
      }
    });
  }
}
export default addPagination;
