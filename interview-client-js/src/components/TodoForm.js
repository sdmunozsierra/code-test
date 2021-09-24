import React, { Component } from 'react'
import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a task..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button className="btn">Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm
