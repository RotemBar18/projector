import React from 'react'
import { TaskPreview } from './TaskPreview.jsx'
import { connect } from 'react-redux'
import { setBoard, loadBoards, saveBoard } from '../store/actions/boardActions.js'
import { Droppable, Draggable } from 'react-beautiful-dnd';

class _TaskList extends React.Component {

    state = {
        isDragDisabled : false
    }

    render() {
        const {isDragDisabled} = this.state;
        const { toggleTaskMember } = this.props;
        return (
            <Droppable droppableId={this.props.group.id}>
                {(provided) => (
                    <div className="task-list" {...provided.droppableProps} ref={provided.innerRef}>
                        {this.props.tasks.map((task, index) => {
                            return (
                                <Draggable isDragDisabled={this.props.isDragDisabled} key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                        <div
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}>
                                            <TaskPreview setDate={this.props.setDate} toggleDroppable= {this.props.toggleDroppable} toggleTaskMember={toggleTaskMember} updateLabel={this.props.updateLabel} addLabelToBoard={this.props.addLabelToBoard} checkLabel={this.props.checkLabel} onRemoveLabel={this.props.onRemoveLabel} onUpdateTask={this.props.onUpdateTask} onAddLabel={this.props.onAddLabel} onDeleteTask={this.props.onDeleteTask} board={this.props.board} task={task} group={this.props.group} />
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
            // </DragDropContext>

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