import React, {useReducer} from 'react'
import reducer, {initialState} from './reducers/index'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
import {setInputValue, addToDo,  setToDoList} from './actions/index'
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {toDoData, inputValue} = state

  const handleChanges = e => {
    dispatch(setInputValue(e.target.value))
  }

  const handleSubmit = (value) => {
    dispatch(addToDo(value))
    dispatch(setInputValue(''))

  }
  const handleToggle = (taskId) => {
    dispatch(setToDoList(
      toDoData.map(task => {
        if(task.id === taskId){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    ))
  }

  const handleCompleted = () => {
    const newToDoList = toDoData.filter(task => {
      return (!task.completed)
    })
    dispatch(setToDoList(newToDoList))
  }

  return (
    <div className="App">
      <ToDoForm inputValue={inputValue} handleChanges={handleChanges} handleSubmit={handleSubmit} handleCompleted={handleCompleted}/>
      <ToDoList state={toDoData} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;
