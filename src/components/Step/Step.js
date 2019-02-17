import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import EditStepForm from './EditStepForm';

class Step extends React.Component{
    state = {
        showEditStepForm: false,
        stepId: 0,
        stepTitle: ''
    }

    openEditStepForm = (id, title) => {
        this.setState({
            showEditStepForm: !this.state.showEditStepForm,
            stepId: id,
            stepTitle: title
        })  
    }
    
    closeEditStepForm = () => {
        this.setState({
            showEditStepForm: !this.state.showEditStepForm
        })
    }
    
    render(){
        const { steps, onCheckSub, onDeleteSub, taskId } = this.props;
        const { showEditStepForm, stepId,  stepTitle } = this.state;
        return(
            <div>
               <List>   
                    {steps.map(step => (
                        <ListItem key={step.id}  button >
                            <Checkbox
                                checked={step.checked}
                                tabIndex={-1}
                                disableRipple
                                onChange={() => onCheckSub(step.id, taskId, !step.checked)}
                            />
                        <ListItemText primary={step.title} />
                        
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => this.openEditStepForm(step.id, step.title)}>
                                <Icon color='primary'>create</Icon>
                            </IconButton>
                            <IconButton onClick={() => onDeleteSub(step.id, taskId)}>
                                <Icon color='secondary'>delete</Icon>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    ))}
                </List> 
                {showEditStepForm 
                ? <EditStepForm 
                    id={stepId} 
                    taskId={taskId} 
                    content={ stepTitle} 
                    closeEditStepForm={this.closeEditStepForm}
                    /> 
                : ''}
            </div>
            
        )
    }
}

export default Step;