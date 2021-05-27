import React from 'react';
import { connect } from 'react-redux'
import { loadBoards } from '../store/actions/boardActions.js'

export class _BoardList extends React.Component {
    componentDidMount() {
    }
    render() {

        return (
            <section>
                <h1>boardlist</h1>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
}
const mapDispatchToProps = {
    loadBoards
}


export const BoardList = connect(mapStateToProps, mapDispatchToProps)(_BoardList)