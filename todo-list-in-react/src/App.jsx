import { useState } from 'react'
import Todo from './compnents/Todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
       <h1>TODO LIST</h1>
      <Todo/>
    </>
  )
}

export default App
