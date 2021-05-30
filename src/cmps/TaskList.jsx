import React from 'react'
import { TaskPreview } from './TaskPreview.jsx'
import { connect } from 'react-redux'
import { setBoard, loadBoards, saveBoard } from '../store/actions/boardActions.js'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// export function TaskList({ tasks, group, board, onDeleteTask, onUpdateTask, onAddLabel, updateLabel, addLabelToBoard, checkLabel, onRemoveLabel }) {
class _TaskList extends React.Component {

    state = {}

    handleOnDragEnd = (result) => {
        const { board, group } = this.props
        const items = Array.from(group.tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem)
        group.tasks = items
        this.props.saveBoard(board)
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.handleOnDragEnd}>
                <Droppable droppableId={this.props.group.id}>
                    {(provided) => (
                        <div className="task-list" {...provided.droppableProps} ref={provided.innerRef}>
                            {this.props.tasks.map((task, index) => {
                                return (
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(provided) => (
                                            <div
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}>
                                                <TaskPreview updateLabel={this.props.updateLabel} addLabelToBoard={this.props.addLabelToBoard} checkLabel={this.props.checkLabel} onRemoveLabel={this.props.onRemoveLabel} onUpdateTask={this.props.onUpdateTask} onAddLabel={this.props.onAddLabel} onDeleteTask={this.props.onDeleteTask} board={this.props.board} task={task} group={this.props.group} />
                                            </div>
                                        )}
                                    </Draggable>
                                )
                            })
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

        )
    }
}

function mapStateToProps(state) {
    return {
        currBoard: state.boardModule.currBoard,
        boards: state.boardModule.boards,
    }
}

const mapDispatchToProps = {
    setBoard,
    loadBoards,
    saveBoard
}

export const TaskList = connect(mapStateToProps, mapDispatchToProps)(_TaskList)