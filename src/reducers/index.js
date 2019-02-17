import {combineReducers} from 'redux';
import {tasksReducer} from './data';
const reducers = combineReducers({
  tasks: tasksReducer
});
export default reducers;