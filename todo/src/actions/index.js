export const SET_INPUT_VALUE = 'SET_INPUT_VALUE'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const SET_TODO_LIST = 'SET_TODO_LIST'
export const CLEAR_COMPLETED = "CLEAR_COMPLETED"

export const setInputValue = (value) => {
    return({type: SET_INPUT_VALUE, payload: value})
}
export const addToDo = (value) => {
    return({type: ADD_TODO, payload: value})
}
export const toggleCompleted = (value) => {
    return({type: TOGGLE_COMPLETED, payload: value})
}
export const setToDoList = (value) => {
    return({type: SET_TODO_LIST, payload: value})
}
export const clearCompleted = () => {
    return ({type: CLEAR_COMPLETED})
}