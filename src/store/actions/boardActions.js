import { boardService } from '../../services/boardService'
import { userService } from '../../services/userService'
import { socketService, SOCKET_EVENT_BOARD_ADDED } from '../../services/socketService'


export function loadBoard() {
  return async dispatch => {
    try {
      const board = await boardService.query()
      dispatch({ type: 'SET_BOARDS', boards })

      // socketService.on(SOCKET_EVENT_BOARD_ADDED, board =>{
      //   dispatch({ type: 'ADD_BOARD', board })
      // })

    } catch (err) {
      console.log('BoardActions: err in loadBoards', err)
    }
  }
}

export function addBoard(board) {
  return async dispatch => {
    try {
      const addedBoard = await boardService.add(board)
      dispatch({ type: 'ADD_BOARD', board: addedBoard })
    } catch (err) {
      console.log('BoardActions: err in addBoard', err)
    }
  }
}

export function removeBoard(boardId) {
  return async dispatch => {
    try {
      await boardService.remove(boardId)
      dispatch({ type: 'REMOVE_BOARD', boardId })
    } catch (err) {
      console.log('BoardActions: err in removeBoard', err)
    }
  }
}
