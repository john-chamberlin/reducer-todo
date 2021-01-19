import React from 'react'


const ToDoForm = (props) => {
    const {inputValue, handleChanges, handleSubmit, handleCompleted} = props
    const onSubmit = e => {
        e.preventDefault()
    }
    return(
        <form onSubmit={onSubmit}>
            <input type='text' name='newTaskText' value={inputValue} onChange={handleChanges}/>
            <button onClick={()=> {
                handleSubmit(inputValue)
            }} >Add Task</button>
            <button onClick={handleCompleted}>Clear Completed</button>
        </form>
    )
}

export default ToDoForm