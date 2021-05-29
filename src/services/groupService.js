import { utilService } from './utilService.js'

export const groupService = {
    deleteGroup,
    copyGroup,
    addGroup
}




function addGroup(board, newTitle) {
    console.log('newTitle', newTitle)
    console.log('board', board.groups)
    board.groups.push({
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
