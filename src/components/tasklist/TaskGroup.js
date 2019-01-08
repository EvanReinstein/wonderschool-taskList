import React, { Component } from 'react';

class TaskGroup extends Component {
  render() {
    return(
      <div>
        <h4>{this.props.group}</h4>
      </div>
    )
  }
}

export default TaskGroup;
