import React, { Component } from 'react';
import TaskGroup from './TaskGroup';

class TaskContainer extends Component {
  render() {
      let currentGroups = [];
      this.props.taskListData.forEach( task => {
        if (currentGroups.indexOf(task.group) === -1) {
          currentGroups.push(task.group);
        }
      });
      let groups = currentGroups.map( (group, i) => <TaskGroup group={group} key={i} taskListData={this.props.taskListData} />);
      console.log(groups);
    return (
      <div>
        <h1>This is the task list</h1>
        { groups }
      </div>
    );
  }
}

export default TaskContainer;
