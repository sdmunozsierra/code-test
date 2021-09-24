import React, { useEffect, useState } from 'react'
import Display from './components/Display.js'
import Controls from './components/Controls.js'

// async function getTodos() {
//   return []
// }

const App = () => {
  // useEffect(() => {
  //   // @ts-ignore
  //   getTodos().then(console.log)
  // }, [])
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)
  // const [todos, setTodos] = useState(0)

  const scoreStrike = () => {
    if (strikes === 2) {
      setStrikes(0)
      setBalls(0)
    } else {
      setStrikes(strikes + 1)
    }
  }

  const scoreBall = () => {
    if (balls === 3) {
      setStrikes(0)
      setBalls(0)
    } else {
      setBalls(balls + 1)
    }
  }

  const scoreFoul = () => {
    if (strikes !== 2) {
      setStrikes(strikes + 1)
    }
  }
  const scoreHit = () => {
    setStrikes(0)
    setBalls(0)
  }
  // print get todos

  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} />
      <Controls
        strike={scoreStrike}
        ball={scoreBall}
        foul={scoreFoul}
        hit={scoreHit}
      />
    </div>
  )
}

export default App
