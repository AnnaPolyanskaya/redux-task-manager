import React from 'react';
/* Material ui */
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
/* redux */
import {addTask} from '../../actions';
import { connect } from 'react-redux';

class Form extends React.Component {
  state = {
    name: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddTask(this.state.name);
    this.handleReset();
  }
  handleReset = () => {
    this.setState({
      name: ''
    })
  }
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12} >
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              <TextField
                className='add-form'
                id="standard-name"
                label="Task"
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
              <Button 
                variant="contained" 
                color="primary" 
                type='submit'
                className='btn-add'
              >
                Add
              </Button>
          </form>
        </Grid>
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: task => {
      dispatch(addTask(task))
    }
  }
}
  
export default connect(
  null, 
  mapDispatchToProps
)(Form);
