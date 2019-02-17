import React, { Component } from 'react';
/* Material UI */
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
/* redux */
import { connect } from 'react-redux';


class Buttons extends Component {
    
    handleAll = () => {
        this.props.sortBy('ALL');
    }
    handleChecked = () => {
        this.props.sortBy('CHECKED');
    }
    handleUnChecked = () => {
        this.props.sortBy('UNCHECKED');
    }

  render() {
    
    return (
      <div className='filter-btn__container'>
        <Typography variant="h5" color="inherit">
            Tasks filter
        </Typography>
        <Button 
            variant="contained" 
            color="secondary" 
            className='filter-btn'
            onClick={this.handleAll}>
            Show All 
            <Icon>format_list_numbered</Icon>
        </Button>
        <Button 
            variant="contained" 
            color="secondary" 
            className='filter-btn'
            onClick={this.handleChecked}>
            Show Completed 
            <Icon>check_circle</Icon>
        </Button>
        <Button 
            variant="contained" 
            color="secondary" 
            className='filter-btn'
            onClick={this.handleUnChecked}>
            Show Uncompleted 
            <Icon>history</Icon>
        </Button>
      </div>
    )
  }
}
const mapStateToProps = state => {
    return {
      tasks: state.tasks
    };
  };
  export default connect(
    mapStateToProps,
    null
  )(Buttons);
  