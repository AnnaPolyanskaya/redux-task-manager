import React from 'react';
/* Redux */
import { connect } from 'react-redux';
import TaskListItem from './ListItem';
import {  deleteTask, checkSubTask, checkTask, deleteSubTask } from '../actions';
/* Material ui */
import Grid from '@material-ui/core/Grid';

class List extends React.Component {
   render() {
    const { tasks, onDelete, onCheckSub, onCheckTask, onDeleteSub } = this.props;
    return (
        <Grid container spacing={8}>
          {tasks.map(task => {
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
          })}
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
)(List);