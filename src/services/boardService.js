import { storageService } from './asyncStorageService.js'
// import { utilService } from './utilService.js'

export const boardService = {
    query,
    getById,
    save,
    changeBg,
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
    if (board._id) {
        return await storageService.put('board_db', board)
    } else {
        return await storageService.post('board_db',board)
    }
}

function changeBg(pick, imgUrl, bgColor, board) {
    if (pick === 'photos') return board.style = { ...board.style, imgUrl }
    console.log('pick', pick)
    board.style = { bgColor }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 500}).then(x => console.log(x))