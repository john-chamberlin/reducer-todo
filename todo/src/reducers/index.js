import {SET_INPUT_VALUE, ADD_TODO, SET_TODO_LIST, TOGGLE_COMPLETED, CLEAR_COMPLETED} from '../actions/index'


export const initialState = {
    toDoData: [
        {
            item: 'finish module project',
            completed: false,
            id: 123
        },
        {
            item: 'watch guided project',
            completed: false ,
            id: 456
        },
        {
            item: 'eat burrito',
            completed: false,
            id: 789
        },
        {
            item: 'pet doggo',
            completed: false,
            id: 321
        }
    ],
    inputValue: ''
}

const reducer = (state, action) => {
    switch(action.type) {
        case(SET_INPUT_VALUE):
            return({...state, inputValue: action.payload})
        case(ADD_TODO):
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return({
                ...state, toDoData:
                [...state.toDoData, newItem]
            })
        case(SET_TODO_LIST):
            return({...state, toDoData: action.payload})
        case(TOGGLE_COMPLETED):
            return({...state, toDoData: state.toDoData.map(task => {
                if(task.id === action.payload) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            })
         })
        case(CLEAR_COMPLETED):
         return({...state, toDoData: state.toDoData.filter(task=> {
             return (!task.completed)
         })})
        default:
            return(state)
    }
}

export default reducer

