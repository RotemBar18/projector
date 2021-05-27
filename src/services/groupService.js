import { utilService } from './utilService.js'

export const groupService = {
    addTask,
}


function addTask(board, groupId, newTitle) {
    console.log('board', board)
    console.log('groupId', groupId)
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    board.groups[groupIdx].tasks.push({
        id: 'g' + utilService.makeId(),
        title: newTitle
    })
}