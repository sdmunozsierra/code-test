import React, { Component } from 'react'
function Task({ task, index, completeTask, onDelete }) {
  console.log(task)
  return (
    <li
      className="list-group-item"
      style={{ textDecoration: task.isCompleted ? 'line-through' : '' }}
    >
      {task.text}
      <i className="fas fa-trash-alt" onClick={() => onDelete(index)}></i>
      <button className="complete" onClick={() => completeTask(index)}>
        {' '}
        complete
      </button>
    </li>
  )
}

export default Task
