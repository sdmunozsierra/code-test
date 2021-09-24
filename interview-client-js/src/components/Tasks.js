import React, { Component } from 'react'
import Task from './Task'

function Tasks({ tasks, completeTask, onDelete }) {
  console.log(tasks)

  return (
    <ul className="list-group-items">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          completeTask={completeTask}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
export default Tasks
