const tasks = JSON.parse(localStorage.getItem("tasks")) || []




const createTask = (titleFiled , descriptionFiled) => {
    const taskObj = {
        title : titleFiled.value,
        description : descriptionFiled.value,
        mark : false
    }
    cleanInputs(titleFiled ,descriptionFiled)
    return taskObj
}
const cleanInputs = (...inputs) => {
    inputs.forEach((input) => {
        input.value = ""
    })
}

const appendToArry = (obj , array ) => {
    array.push(obj)
}

const addToLocalStorage = (array , key) => {
    window.localStorage.setItem(key , JSON.stringify(array))
}

const renderTasks = (tasks) => {
    while(notCompletedOrderedList.firstChild){
        notCompletedOrderedList.removeChild(notCompletedOrderedList.firstChild);
    }
    while(completedOrderedList.firstChild){
        completedOrderedList.removeChild(completedOrderedList.firstChild);
    }

    tasks.forEach((task , index) => {
        let taskList = createList(task.title , task.description , index)
        if(task.mark){
            completedOrderedList.appendChild(taskList)
        }else{
            notCompletedOrderedList.appendChild(taskList)
        }
    })

}

const deleteTask = (index) => {
    tasks.splice(index , 1)
    console.log(tasks)

}

const markDoList = (index) => {
    tasks[index].mark = true
    console.log(tasks[index])
    console.log(index)

}

const updateTask = (index , taskFiled , descriptionFiled) => {
    // taskFiled.value = tasks[index].title
    // descriptionFiled.value = tasks[index].description
    console.log(taskFiled.value)
    console.log(descriptionFiled.value)

}
renderTasks(tasks)