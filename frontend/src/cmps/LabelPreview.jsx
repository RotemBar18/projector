import React from 'react'
// import { Link } from 'react-router-dom'


export function LabelPreview({ lable, isLabelsOpen }) {

    return (
        <div className={`label ${isLabelsOpen ? 'open' : ''}`} data-content={isLabelsOpen ? lable.title : ''} style={{ backgroundColor: lable.color }}>
        </div>
    )

}

