import { utilService } from './utilService.js'

export const groupService = {
    addTask,
    deleteGroup,
    copyGroup,
    updateTask
}

function addTask(board, groupId, newTitle) {
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    board.groups[groupIdx].tasks.push({
        id: 'g' + utilService.makeId(),
        title: newTitle
    })
}

function deleteGroup(board, groupId) {
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    board.groups.splice(groupIdx, 1)
}

function copyGroup(board, group) {
    const groupIdx = board.groups.findIndex(currGroup => group.id === currGroup.id)
    board.groups.splice(groupIdx, 0, group)
}

function updateTask(board, groupId, updatedTask) {
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    const updatedTaskId = board.groups[groupIdx].tasks.findIndex(task => task.id === updatedTask.id)
    board.groups[groupIdx].tasks.splice(updatedTaskId, 1, updatedTask)
}