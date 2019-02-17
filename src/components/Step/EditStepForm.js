import React from 'react';
/* Material ui */
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
/* redux */
import {editeSubTask} from '../../actions';
import { connect } from 'react-redux';

class EditStepForm extends React.Component {
  state = {
    content: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onEditStep( this.props.id, this.props.taskId, this.state.content);
    this.handleReset();
  }
  handleReset = () => {
    this.setState({
        content: ''
    })
    this.props.closeEditStepForm();
  }
  render() {
    return (
      
          <div className='step-form__edit'>
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <TextField
                  id="standard-name"
                  label="Task"
                  placeholder={this.props.content}
                  onChange={this.handleChange('content')}
                  margin="normal"
                />
                <Button color="secondary" type='submit'>Edit</Button>
            </form>
          </div>
        
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditStep: (id, taskId, content) => {
      dispatch(editeSubTask(id,  taskId, content))
    }
  }
}
  
export default connect(
  null, 
  mapDispatchToProps
)(EditStepForm);
