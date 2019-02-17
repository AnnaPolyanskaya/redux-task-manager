import React from 'react';
/* Redux */
import { connect } from 'react-redux';
import TaskListItem from './ListItem';
import {  deleteTask, checkSubTask, checkTask, deleteSubTask } from '../actions';
/* Material ui */
import Grid from '@material-ui/core/Grid';

class SortedList extends React.Component {
   render() {
    const { tasks, onDelete, onCheckSub, onCheckTask, onDeleteSub, sort } = this.props;
    const checkedTasks = tasks.filter(it => it.complete === true);
    const notCheckedTasks = tasks.filter(it => it.complete === false);
    return (
        <Grid container spacing={8}>
            {sort === 'UNCHECKED' 
                ? notCheckedTasks.map(task =>  
                    <TaskListItem 
                        task={ task }
                        onDelete={ onDelete } 
                        onDeleteSub={ onDeleteSub }
                        onCheckSub={ onCheckSub }
                        onCheckTask={ onCheckTask }
                        key={ task.id } 
                        checked={ task.checked }
                        taskId = {  task.id } />
                )   
                    
                :  checkedTasks.map(task => {
                const id = task.id;
                    return (
                        <TaskListItem 
                        task={ task }
                        onDelete={ onDelete } 
                        onDeleteSub={ onDeleteSub }
                        onCheckSub={ onCheckSub }
                        onCheckTask={ onCheckTask }
                        key={ id } 
                        checked={ task.checked }
                        taskId = { id } />
                    );
                }
            
            )
        }
        </Grid>
      );
   }
  
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteTask(id));
    },
    onDeleteSub: (id, taskId) => {
      dispatch(deleteSubTask(id, taskId));
    },
    onCheckTask: (id, complete) => {
      dispatch(checkTask(id, complete))
    }, 
    onCheckSub: (id, taskId, complete) => {
      dispatch(checkSubTask(id, taskId, complete))
    }, 
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortedList);