import React from 'react';
/* Material ui */
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
/* redux */
import {editeTask} from '../../actions';
import { connect } from 'react-redux';

class EditTaskForm extends React.Component {
  state = {
    content: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onEditTask( this.props.id, this.state.content);
    this.handleReset();
  }
  handleReset = () => {
    this.setState({
        content: '',
    });
    this.props.toggleEditTaskForm();
  }
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12} >
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
        </Grid>
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditTask: (id,  content) => {
      dispatch(editeTask(id,  content))
    }
  }
}
  
export default connect(
  null, 
  mapDispatchToProps
)(EditTaskForm);
