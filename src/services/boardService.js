import { storageService } from './asyncStorageService.js'
// import { utilService } from './utilService.js'

export const boardService = {
    query,
    getById,
    save,
    remove,
}

async function query() {
    let boards = await storageService.query();
    return boards;
}

function getById(boardId) {
    console.log('boardId', boardId)
    return storageService.get(boardId)
}

function remove(boardId) {
    return storageService.remove(boardId)
}

function save(board) {
    if (board._id) {
        return storageService.put(board)
    } else {
        return storageService.post(board)
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 500}).then(x => console.log(x))