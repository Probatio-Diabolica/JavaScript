import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // let counter = 0
  const [counter,setCounter] = useState(0)

  const increment = () =>{
    let count = 1 + counter
    if(count > 20) count = 20
    setCounter(count)
    console.log(count);
  } 

    const decrement = () =>{
    let count =  counter - 1
    if(count < 0 ) count = 0
    setCounter(count)
    console.log(count);
  } 

  return (
    <>
      <h1>Me dying inside</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increment}>Add value</button>
      <br />
      <button onClick={decrement}>Remove value : {counter}</button>
      <br />
      <p> I wanna die in {counter} days</p>
    
    </>
  )
}

export default App
