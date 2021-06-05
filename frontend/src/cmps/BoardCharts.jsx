
import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { setBoard } from '../store/actions/boardActions.js'

class _BoardCharts extends React.Component {

    state = {
        groupsTitles: [],
        tasksAmount: [],
        tasksPerMember: {}
    }


    componentDidMount() {
        // this.getBoardDetails()
        this.createData()
    }

    // getBoardDetails = () => {
    //     const { boardId } = this.props.match.params;
    //     this.props.setBoard(boardId)
    // }

    createData = () => {
        const board = this.props.board
        let tasksAmount = []
        let roeyCount = 0
        let noaCount = 0
        let rotemCount = 0

        const groupsTitles = board.groups.map((group) => {
            const tasks = group.tasks
            let tasksCount = 0
            tasks.forEach((task) => {
                ++tasksCount
                const members = task.members
                members.forEach((member) => {
                    if (member.fullname === 'Roey Barda') ++roeyCount
                    if (member.fullname === 'Noa Kaplan') ++noaCount
                    if (member.fullname === 'Rotem Bar') ++rotemCount
                })
            })
            tasksAmount.push(tasksCount)
            return group.title
        })
        const tasksPerMember = { "Roey Barda": roeyCount, "Noa Kaplan": noaCount, "Rotem Bar": rotemCount }
        this.setState({ tasksPerMember })
        this.setState({ groupsTitles, tasksAmount }, () => { console.log('this.state', this.state); })
    }

    render() {
        const board = this.props.currBoard
        const { groupsTitles, tasksAmount, tasksPerMember } = this.state
        if (!board || !groupsTitles && !tasksAmount && !tasksPerMember) return <div>Loading...</div>

        const tasksPerGroupData = {
            labels: Object.values(this.state.groupsTitles),
            datasets: [
                {
                    label: 'Tasks Per Group',
                    data: Object.values(this.state.tasksAmount),
                    backgroundColor: [
                        '#ff595e',
                        '#ffca3a',
                        '#8ac926',
                        '#6a4c93',
                        '#a3cef1',
                        '#ea3546',
                    ],
                    borderWidth: 0,
                }
            ]
        }

        const tasksPerMemberData = {
            labels: Object.keys(tasksPerMember),

            datasets: [
                {
                    label: 'Tasks Per Member',
                    data: Object.values(tasksPerMember),
                    backgroundColor: [
                        '#ff595e',
                        '#ffca3a',
                        '#8ac926',
                        '#6a4c93',
                        '#a3cef1',
                        '#ea3546',
                    ],
                    borderWidth: 0,
                    options: {                            
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    },
                }
            ]
        }
        return (
            <section className="board-charts">
                <div className='header-title'>Statistics</div>
                <div className='chart-container a'>
                    <div className='title'>Tasks Per Group</div>
                    <Doughnut className='chart' options={{ maintainAspectRatio: false }} data={tasksPerGroupData} />
                </div>
                <div className='chart-container b'>
                    <div className='title'>Tasks Per Member</div>
                    <Bar
                        className='chart'
                        data={tasksPerMemberData}
                        options={{ maintainAspectRatio: false }} />
                </div>
            </section>
        )
    }

}


function mapStateToProps(state) {
    return {
        currBoard: state.boardModule.currBoard
    }
}
const mapDispatchToProps = {
    setBoard
}

export const BoardCharts = connect(mapStateToProps, mapDispatchToProps)(_BoardCharts)