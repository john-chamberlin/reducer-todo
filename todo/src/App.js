import React, {useReducer} from 'react'
import reducer, {initialState} from './reducers/index'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
import {setInputValue, addToDo,  setToDoList, toggleCompleted, clearCompleted} from './actions/index'
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
  

  const handleCompleted = () => {
    dispatch(clearCompleted())
  }

  const handleToggle = (taskId) => {
    dispatch(toggleCompleted(taskId))
  }

  return (
    <div className="App">
      <ToDoForm inputValue={inputValue} handleChanges={handleChanges} handleSubmit={handleSubmit} handleCompleted={handleCompleted}/>
      <ToDoList state={toDoData} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;
