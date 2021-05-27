import React from 'react'
// import { Link } from 'react-router-dom'


export function LabelPreview({ lable }) {

    return (
        <div className='label' style={{ backgroundColor: lable.color }}>
            {lable.title}
        </div>
    )

}

