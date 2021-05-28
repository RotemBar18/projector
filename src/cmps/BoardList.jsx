import { BoardPreview } from './BoardPreview'

export function BoardList ({boards}){
    return(
        <div className="board-list">
            <div>
            {boards.map(board => <div key={board._id}><BoardPreview board={board}/></div>)}
            </div>
        </div>
    )
}