import { storageService } from './asyncStorageService.js'
// import { utilService } from './utilService.js'

export const boardService = {
    query,
    getById,
    save,
    remove,
}

var dataBase = 'board_db'

async function query() {
    let boards = await storageService.query(dataBase);
    return boards;
}

function getById(boardId) {
    return storageService.get(dataBase, boardId)
}

function remove(boardId) {
    return storageService.remove(boardId)
}

async function save(board) {
    console.log('board._id', board._id)
    if (board._id) {
        console.log('board put', board)
        return await storageService.put('board_db',board)
    } else {
        console.log('board post', board)
        return await storageService.post('board_db',board)
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 500}).then(x => console.log(x))