import React from 'react'
import { TaskPreview } from './TaskPreview.jsx'
import { connect } from 'react-redux'
import { setBoard, loadBoards, saveBoard } from '../store/actions/boardActions.js'
import { Droppable, Draggable } from 'react-beautiful-dnd';

class _TaskList extends React.Component {

    state = {}

    render() {
        const { toggleTaskMember, isAddTaskOpen, onToggleAddTask, handleTaskChange, onAddTask, group, newTaskTitle } = this.props
        return (
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
                                            <TaskPreview toggleTaskMember={toggleTaskMember} updateLabel={this.props.updateLabel} addLabelToBoard={this.props.addLabelToBoard} checkLabel={this.props.checkLabel} onRemoveLabel={this.props.onRemoveLabel} onUpdateTask={this.props.onUpdateTask} onAddLabel={this.props.onAddLabel} onDeleteTask={this.props.onDeleteTask} board={this.props.board} task={task} group={this.props.group} />
                                        </div>
                                    )}
                                </Draggable>
                            )
                        })
                        }
                        {isAddTaskOpen &&
                        
                            <form className='add-task-form' onSubmit={onToggleAddTask}>
                                <textarea name='title' placeholder='Enter a title for this card...' className='task-title-input' cols="5" rows="5" onChange={handleTaskChange}></textarea>
                                <div className='add-task-controls'>
                                    <button className='add-task-add-btn' onClick={() => onAddTask(group.id, newTaskTitle)}>Add card</button>
                                    <button className='add-task-close-btn' onClick={this.onToggleAddTask}> X </button>
                                </div>
                            </form>
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