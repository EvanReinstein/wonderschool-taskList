import React, { Component } from 'react';
import Task from './Task';

class TaskGroup extends Component {
  render() {
    let tasks = this.props.taskListData.map( (task, i) => {
      if (this.props.group === task.group) {
        return <Task specificTaskData = {task}/>
      }
    })
    return(
      <div>
        <h4>{this.props.group}</h4>
        {tasks}
      </div>
    )
  }
}

export default TaskGroup;
