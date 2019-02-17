import React, { Component } from 'react';
import './App.css';
import Form from './components/Task/Form';
import Sort from './components/Sort/Sort';
import Typography from '@material-ui/core/Typography';
class App extends Component {
  state = {
    showForm: false,
  };

  render() {
    return (
     <div className='app'>
       <div className='main-form'>
          <Typography variant="h4" color="inherit">
            Add task here
          </Typography>
          <Form />
          
       </div>
        <Sort />
     </div>
    );
  }
}

export default App;
