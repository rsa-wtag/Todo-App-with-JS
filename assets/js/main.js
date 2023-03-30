window.addEventListener('load', () => {
    const form = document.querySelector('#create-task')
    const inputTask = document.querySelector('#input-task')
    const taskList = document.querySelector('#tasks')
    const createBtn = document.querySelector('#create')
    const cancel = document.querySelector('#cancel')

    createBtn.addEventListener('click', () => {
        if (form.className == "hide"){
            form.classList.remove("hide")
        }
        inputTask.focus()
    })

    cancel.addEventListener('click', () => {
        form.classList.add("hide")
        inputTask.value = ""
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        if (!inputTask.value){
            return
        }

        const task =document.createElement('div')
        task.classList.add("task")

        const task_content =document.createElement('div')
        task_content.classList.add("content")
        task_content.innerText = inputTask.value

        task.appendChild(task_content)

        taskList.prepend(task)

        inputTask.value = ""
        form.classList.add("hide")
    })
})