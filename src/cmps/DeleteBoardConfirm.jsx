
export function DeleteBoardConfirm({ onToggleDelete, board, onRemoveBoard }) {
    return (
        <div onClick={onToggleDelete} className='delete-board-window'>
            <div className='delete-board-container'>
                <div className='delete-board-header'>
                    <div className='title'>Do you want to remove board: <span>"{board.title}"</span>?</div>
                </div>
                <div className='delete-board-controls'>
                    <button className='delete-board-btn' onClick={(ev) => onRemoveBoard(board._id, ev)}>Delete</button>
                    <button className='cancel-delete-board-btn' onClick={onToggleDelete}>cancel</button>
                </div>
            </div>
        </div>
    )
}