import { storageService } from './asyncStorageService.js'
import { utilService } from './utilService.js';
import { httpService } from './httpService.js'

export const boardService = {
    query,
    getById,
    save,
    changeBg,
    remove,
    addActivity
}

async function query() {
    const boards = await httpService.get('board');
    return boards;
}

function getById(id) {
    return httpService.get(`board/${id}`)
}

function remove(id) {
    return httpService.delete(`board/${id}`)
}

async function save(board) {
    console.log('board', board)
    if (board._id) {
        return await httpService.put(`board/${board._id}`, board)
    } else {
        return await httpService.post('board', board)
    }
}

function changeBg(pick, imgUrl, bgColor, board) {
    if (pick === 'photos') return board.style = { ...board.style, imgUrl }
    board.style = { bgColor }
}

function addActivity(loggedInUser, board, group, action, task) {
    console.log('action', action)
    console.log('group', group)
    console.log('board', board)
    const date = new Date()
    const createdAt = utilService.convertToCreatedAtDate(date)
    const member = (loggedInUser) ? loggedInUser : { fullname: 'guest' }
    const newActivity = {
        byMember: member,
        createdAt,
        id: 'a' + utilService.makeId(),
        task,
        group,
        txt: action
    }
    console.log('newActivity', newActivity)
    board.activities = [ newActivity, ...board.activities]
    console.log('board', board)

}