import React from 'react'

// Todo model
const Todo = (props) => {
  return (
    <div>
      <div>id: {props.id}</div>
      <div>content: {props.content}</div>
    </div>
  )
}

export default Todo
