import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const plusPlus = () =>{
    // let counter  = count + 1
    // setCount(count+1)
    // setCount(count+1)

    // setCount(count+1)

    // setCount(count+1)
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)


  }

  const minusMinus = () => {
    setCount(count-1)
        setCount(count-1)
    setCount(count-1)

  }

  return (
    <>
      <h1>Counter</h1>
      <button onClick={plusPlus}>
        Increment : {count}
      </button>
        <br/>

      <button onClick={minusMinus}>
        decrement : {count}
        <br/>
      </button>

    </>
  )
}

export default App
