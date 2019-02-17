import React from 'react';

/* Components */
import StepsForm from './Step/StepsForm';
/* Material UI */
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Checkbox from '@material-ui/core/Checkbox';

import Step from './Step/Step';
import EditTaskForm from './Task/EditTaskForm';


class TaskListItem extends React.Component {
    state ={
        showForm: false,
        showEditTaskForm: false
    }

    toggleStepForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    toggleEditTaskForm = () => {
        this.setState({
            showEditTaskForm: !this.state.showEditTaskForm
        })
    }

    
    
    
    

    render() {
        const { task, onDelete, onCheckSub, onCheckTask, onDeleteSub, taskId  } = this.props;
        const { showForm, showEditTaskForm } = this.state;
        
        return(
            <Grid item xs={12} sm={3}>
                <Card className='task-item'>
                    <CardHeader 
                        action={
                            <Checkbox
                                checked={task.complete}
                                onChange={() => onCheckTask(taskId, !task.complete)}
                                value="checkedG"
                            />
                        }
                        title={task.title}
                    />
                    { task.steps  ? (
                        <CardContent>
                            <Step 
                                taskId={task.id}
                                steps={task.steps} 
                                onCheckSub={onCheckSub}
                                onDeleteSub={onDeleteSub}
                            />
                        </CardContent>
                    )
                    : ''}
                    <CardActions  disableActionSpacing>
                        <IconButton onClick={this.toggleEditTaskForm}>
                            <Icon color='primary'>create</Icon>
                        </IconButton>
                        <IconButton  onClick={() => onDelete(task.id)}>
                            <Icon color='secondary'>delete</Icon>
                        </IconButton>
                        <IconButton  onClick={this.toggleStepForm}>
                            <Icon>add</Icon>
                        </IconButton>
                    </CardActions>
                    <div className='hidden-form'>
                        {showForm ? <StepsForm id={task.id} toggleStepForm={this.toggleStepForm}/> : ''}
                        {showEditTaskForm ? <EditTaskForm id={task.id} content={task.title} toggleEditTaskForm={this.toggleEditTaskForm}/> : ''}
                    </div>
                </Card>
            </Grid>
        )
    }
}

export default TaskListItem;