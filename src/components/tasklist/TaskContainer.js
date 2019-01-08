import React, { Component } from 'react';

class TaskContainer extends Component {
  render() {
      let currentGroups = [];
      this.props.taskListData.forEach( task => {
        // debugger;
        if (currentGroups.indexOf(task.group) === -1) {
          currentGroups.push(task.group);
        }
      });
      console.log(currentGroups);
    return (
      <div>
        <h1>This is the task list</h1>
      </div>
    );
  }
}

export default TaskContainer;
