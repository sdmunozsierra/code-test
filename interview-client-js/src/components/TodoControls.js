import React from 'react'

const Controls = (props) => {
  return (
    <div>
      <button onClick={props.saveTodo}>Save Todo</button>
      <button onClick={props.getAllTodos}>Get All Todos</button>
    </div>
  )
}

export default Controls
