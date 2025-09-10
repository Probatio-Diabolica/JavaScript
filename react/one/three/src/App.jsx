import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Somethiing from './components/somethiing'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Somethiing some="wut" heading="go back" />
    <Somethiing some="nuh uh" heading="SO LONG LONDON"/>
    <h1>HOwdy</h1>

    </>
  )
}

export default App
 