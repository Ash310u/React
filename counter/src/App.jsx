import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter <= 0) {
      setCounter(0)
      alert('Be Positive')
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <hr />

      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value</button>

    </>
  )
}

export default App
