import { utilService } from './utilService.js'

export const taskService = {
    getPreview,
    getDueDatePreview,
    addTask,
    updateTask,
    deleteTask,
    getTaskById,
    addLabel,
    onRemoveLabel,
    checkLabel,
    toggleTaskMember
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
    if (!board.groups[groupIdx].tasks) board.groups[groupIdx].tasks = []
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
    const updatedTaskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
    board.groups[groupIdx].tasks.splice(updatedTaskIdx, 1)
}

function getTaskById(taskId, groupId, board) {
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    const task = board.groups[groupIdx].tasks.find(task => task.id === taskId)
    return task
}

function addLabel(board, groupId, taskId, labelId) {
    const fitLabelId = labelId.substring(1, labelId.length)
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    const TaskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
    let labelIds = board.groups[groupIdx].tasks[TaskIdx].labelIds
    if (!labelIds) return board.groups[groupIdx].tasks[TaskIdx].labelIds = [fitLabelId]
    labelIds.push(fitLabelId)
}

function onRemoveLabel(board, groupId, taskId, labelId) {
    const fitLabelId = labelId.substring(1, labelId.length)
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    const TaskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
    let labelIds = board.groups[groupIdx].tasks[TaskIdx].labelIds
    const labelIdx = labelIds.findIndex(currLabelId => currLabelId === fitLabelId)
    labelIds.splice(labelIdx, 1)
}

function checkLabel(board, groupId, taskId, labelId) {
    const fitLabelId = labelId.substring(1, labelId.length)
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    const TaskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
    let labelIds = board.groups[groupIdx].tasks[TaskIdx].labelIds
    if (!labelIds) return false
    const labelIdx = labelIds.findIndex(currLabelId => currLabelId === fitLabelId)
    if (labelIdx === -1) return false
    return true
}
function toggleTaskMember(task, member) {
    var memberIdx = -1
    memberIdx = task.members?.findIndex(taskMember => taskMember._id === member._id)
    if (memberIdx >= 0) {
        task.members.splice(memberIdx, 1)
    } else {
        if(!task.members) task.members = []
        task.members.push(member)
    }
}
