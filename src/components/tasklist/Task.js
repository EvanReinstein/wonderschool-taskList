import React, { Component } from 'react';

class Task extends Component {
  render() {
    const task = this.props.specificTaskData;
    return(
      <div>
        <ul>
          <li>{task.task}</li>
        </ul>
      </div>
    )
  }
}

export default Task;
