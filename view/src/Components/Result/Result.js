import React from 'react'
import './result.css'

const Result = ({score}) => {
    return (
        <div className='result-container'> <br />
           GRADE
           <p className='score'>{score}</p>
        </div>
    )
}

export default Result