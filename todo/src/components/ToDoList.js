import React from 'react'
import ToDo from './ToDo'

const ToDoList = (props) => {
    const {state, handleToggle} = props
    return(
        <div>
            {state.map(task => (
                <ToDo key={task.id} task={task} handleToggle={handleToggle}/>
            ))}
        </div>
    )
}

export default ToDoList