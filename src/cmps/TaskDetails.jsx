import { Component } from 'react';
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom';

class _TaskDetails extends Component {

    state = {
        task: null,
    }

    componentDidMount() {
        // const taskId = this.props.match.params.taskId
        // taskService.getById(taskId).then(task => {
        //     this.setState({ task })
        // })
    }

    goBack = () => {
        this.props.history.push('/task')
    }

    render() {
        // const { task } = this.state
        // if (!task) return <div>loading</div>
        return (
            <section className="task-details full flex column container">
              <button className='btn task-details-close' onClick={this.props.toggleAddMail}><i className="fas fa-times"></i></button>
              hi noa
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        setBoard,
    }
}


export const TaskDetails = connect(mapStateToProps)(_TaskDetails)