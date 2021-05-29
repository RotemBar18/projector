import { utilService } from './utilService.js'

export const taskService = {
    getPreview,
    getDueDatePreview,
    addTask,
    updateTask,
    deleteTask,
    getTaskById
}

function getPreview(checklists) {
    var todosSum = 0
    var doneTodosSum = 0
    checklists.forEach(checklist => {
        const currTodosSum = checklist.todos.length
        var currDoneTodosSum = checklist.todos.filter(todo => todo.isDone).length
        currDoneTodosSum = (!currDoneTodosSum) ? 0 : currDoneTodosSum
        todosSum += currTodosSum
        doneTodosSum += currDoneTodosSum
    })
    return `${doneTodosSum}/${todosSum}`
}

function getDueDatePreview(deuDate) {
    const date = new Date(deuDate * 1000);
    const month = date.getUTCMonth()
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const subMonth = monthNames[month].substring(0, 3)
    const day = date.getUTCDate()
    return `${subMonth} ${day} `
}

function addTask(board, groupId, newTitle) {
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    board.groups[groupIdx].tasks.push({
        id: 'c' + utilService.makeId(),
        title: newTitle
    })
}

function updateTask(board, groupId, updatedTask) {
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    const updatedTaskId = board.groups[groupIdx].tasks.findIndex(task => task.id === updatedTask.id)
    board.groups[groupIdx].tasks.splice(updatedTaskId, 1, updatedTask)
}

function deleteTask(board, groupId, taskId) {
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    const updatedTaskId = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
    board.groups[groupIdx].tasks.splice(updatedTaskId, 1)
}

function getTaskById(taskId, groupId, board) {
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    const task = board.groups[groupIdx].tasks.find(task => task.id === taskId)
    return task
}