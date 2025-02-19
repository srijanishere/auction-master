import { useState } from 'react'
import './App.css'
import AppBar from './components/AppBar'
import PlayerForm from './components/PlayerForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AppBar pos="static" bgColor="black" description="BCL SEASON - 4 AUCTION (2025)"/>
      <PlayerForm />
    </div>
  )
}

export default App
