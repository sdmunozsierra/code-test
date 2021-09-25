import React, { useEffect, useState } from 'react'
// import Display from './components/Display.js'
import Controls from './components/TodoControls.js'
// import Todo from './components/Todo.js'

// const todo_model = require('./TodoModel')

const { Client } = require('pg')


const App = () => {
  const [todos, setTodos] = useState(false)

  // useEffect(() => {
  //   todo_model.getAllTodos().then(console.log)
  // }, [])

  // async function getTodos() {
  //   todo_model
  //     .getAllTodos()
  //     .then((response) => {
  //       return response.text()
  //     })
  //     .then((data) => {
  //       setTodos(data)
  //     })
  //   return []
  // }
const client = new Client({
  host: 'localhost',
  port: 5334,
  user: 'postgres',
  password: 'password',
  database: 'interview',
})
  async function getAllTodos() {

    client
      .connect()
      .then(() => console.log('connected'))
      .catch((err) => console.error('connection error', err.stack))

    client.query('SELECT * FROM todo_entity', (err, res) => {
      if (err) throw err
      console.log(res)
      client.end()
    })
  // fetch('http://localhost:3001/', {})
  //   .then((response) => {
  //     return response.text()
  //   })
  //   .then((data) => {
  //     alert(data)
  //     // getTodos()
  //   })
  // }

  async function saveTodo() {
    let description = prompt('Enter Todo Description')
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    })
      .then((response) => {
        return response.text()
      })
      .then((data) => {
        alert(data)
        // getTodos()
      })
  }

  // const scoreHit = () => {
  //   setStrikes(0)
  //   setBalls(0)
  // }
  // print get todos

  return (
    <div className="App">
      <div>{todos ? todos : "There are no TODO's available"}</div>
      <Controls saveTodo={saveTodo} getAllTodos={getAllTodos} />
    </div>
  )
}

export default App
