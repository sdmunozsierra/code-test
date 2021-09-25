import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import TodoForm from './components/TodoForm'
import Display from './components/Display.js'
import Controls from './components/TodoControls.js'

function App() {
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  let today = new Date()
  let day = days[today.getDay()]
  let month = months[today.getMonth()]
  let date = today.getDate()

  const dayActivity = `${day}, ${month}  ${date}`

  const [tasks, setTasks] = useState([
    {
      text: 'Learn React',
      isCompleted: true,
    },
    {
      text: 'Attend BTC Confrence',
      isCompleted: false,
    },
    {
      text: 'Particpate in a Blockchain Hackathon',
      isCompleted: true,
    },
    {
      text: 'Meet the optician',
      isCompleted: false,
    },
    {
      text: 'Play Fifa',
      isCompleted: false,
    },
  ])

  const addTodo = (text) => {
    const newTask = [...tasks, { text }]
    setTasks(newTask)
  }

  const completeTask = (index) => {
    const newTasks = [...tasks]
    newTasks[index].isCompleted = true
    setTasks(newTasks)
  }

  const deleteTask = (index) => {
    const newTasks = [...tasks]
    console.log(index)
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div className="container">
      <Header dayActivity={dayActivity} tasks={tasks} />
      <TodoForm addTodo={addTodo} />
      <Tasks tasks={tasks} completeTask={completeTask} onDelete={deleteTask} />
    </div>
  )
}

export default App
