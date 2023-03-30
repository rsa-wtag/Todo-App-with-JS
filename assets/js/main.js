window.addEventListener('load', () => {
    const form = document.querySelector('#create-task')
    const inputTask = document.querySelector('#input-task')
    const taskList = document.querySelector('#tasks')
    const createBtn = document.querySelector('#create')

    createBtn.addEventListener('click', () => {
        console.log(form.style.display);
        if(form.style.display == "none"){
            form.style.display = "block"
        }
        else{
            form.style.display = "none"
        }
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

        taskList.appendChild(task)
    })
})