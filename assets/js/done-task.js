function doneTaskEventListener(done, input_element){
    done.addEventListener("click", () => {
        input_element.classList.add("done")
    })
}
export default doneTaskEventListener