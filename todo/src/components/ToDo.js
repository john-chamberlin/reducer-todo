import React from 'react'
import '../App.css'

const ToDo = (props) => {
    const {task, handleToggle} = props

    const handleCLick = () => {
        handleToggle(task.id)
    }
    return(
        <div onClick ={handleCLick} className={`item${task.completed ? ' completed' : ''}`}>
            <p>{task.item}</p>
        </div>
    )
}

export default ToDo