import React, { Component } from 'react';
import Buttons from './Buttons';
import List from '../List';
import SortedList from '../SortedList';

export default class Sort extends Component {
    state={
        show: 'ALL'
    }
    sortBy = (show) => {
        this.setState({show});
    }
  render() {
    const {show} = this.state;
    return (
      <div>
        <Buttons sortBy={this.sortBy} />
        {show === 'ALL' 
        ? <List />
        : <SortedList 
            sort={show}
            />
        }
      </div>
    )
  }
}
