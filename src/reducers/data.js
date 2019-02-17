import * as C from '../actions/constants';

const initialState = [
  {
    id: 1,
    title: 'second',
    steps: [],
    complete: false,
  },
  {
    id: 2,
    title: 'second',
    steps: [
      {id: 11, title: 'one', checked: false},
      {id: 122, title: 'teo', checked: false},
      {id: 113, title: 'three', checked: false},
    ],
    complete: false
  }
]

export const tasksReducer = (state = initialState, action) => {
  switch(action.type){
    case C.ADD_TASK:
      return[
        ...state,
        {
          id: action.payload.id,
          title: action.payload.content,
          complete: false,
          steps: []
        }
      ]
    case C.CHECK_TASK:
      return state.map( task => 
        task.id === action.id ? Object.assign({}, task,  {complete: action.complete,  steps: task.steps.map( step => Object.assign({}, step, {checked: action.complete})) } ) : task 
      )  
    case C.DELETE_TASK:
        return state.filter(it => it.id !== action.id)
    case C.EDITE_TASK:
    console.log(action)
      return state.map( task => 
        task.id === action.id ? {...task,  title: action.content} : task 
      )  
    case C.ADD_SUBTASK:
      return state.map( task => 
        task.id === action.taskId ? Object.assign({}, task, {
          steps: [...task.steps, {id: action.id, title: action.content, checked: false}]
        }) : task 
      )
    case C.CHECK_SUBTASK:
      const sChecked =  state.map( i => {
        if( i.id === action.taskId){
          const checked = i.steps.map( step => {
            if(step.id === action.id){
              return Object.assign({} , step , {checked: action.checked})
            } else {
              return step
            }
          })
          return {...i, steps: checked}
        }else{
          return i
          }
        }
      )
      return sChecked
    case C.EDITE_SUBTASK:
      const sEdite =  state.map( i => {
        if( i.id === action.taskId){
          const edited = i.steps.map( step => {
            if(step.id === action.id){
              return Object.assign({} , step , {title: action.content})
            } else {
              return step
            }
          })
          return {...i, steps: edited}
        }else{
          return i
          }
        }
      )
      return sEdite
    case C.DELETE_SUBTASK:
      const deleted =  state.map( i => {
        if( i.id === action.taskId){
          const del = i.steps.filter( step => step.id !== action.id)
          return {...i, steps: del}
        }else{
          return i
          }
        }
      )
      return deleted
    
    default: 
      return state
  }
}




