import React from 'react';
/* Material ui */
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
/* redux */
import {addSubTask} from '../../actions';
import { connect } from 'react-redux';

class StepsForm extends React.Component {
  state = {
    name: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddStep(this.state.name, this.props.id);
    this.handleReset();
  }
  handleReset = () => {
    this.setState({
      name: ''
    })
    this.props.toggleStepForm();
  }
  render() {
    return (
      <Grid container spacing={8} >
        <Grid item xs={12} >
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              <TextField
                id="standard-name"
                label="Task"
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
              <Button color="secondary" type='submit'>Add</Button>
          </form>
        </Grid>
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddStep: (step , id) => {
      dispatch(addSubTask(step, id))
    }
  }
}
  
export default connect(
  null, 
  mapDispatchToProps
)(StepsForm);
