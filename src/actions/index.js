import *  as C from './constants';
import V4 from 'uuid-v4';

/* Tasks and SubTasks */
export const addTask = (content) => ({
  type: C.ADD_TASK,
  payload: {
    id: V4(),
    content
  }
})

export const checkTask = (id, complete) => ({
  type: C.CHECK_TASK,
  id,
  complete
})

export const addSubTask = (content, id) => ({
  type: C.ADD_SUBTASK,
  id: V4(),
  taskId: id,
  content: content
})

export const checkSubTask = (id, taskId, checked) => ({
  type: C.CHECK_SUBTASK,
  id,
  taskId,
  checked
})

export const fetchTasks = () => ({
  type: C.FETCH_TASKS,
})

export const deleteTask = (id) => ({
  type: C.DELETE_TASK,
  id
})

export const deleteSubTask = (id, taskId) => ({
  type: C.DELETE_SUBTASK,
  id,
  taskId
})

export const editeTask = (id,  content) => ({
  type: C.EDITE_TASK,
  id,
  content
})

export const editeSubTask = (id, taskId, content) => ({
  type: C.EDITE_SUBTASK,
  id,
  taskId,
  content
})

