import { useState } from 'react'
import './App.css'
import AppBar from './components/AppBar'
import PlayerForm from './components/PlayerForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AppBar pos="fixed" bgColor="black"/>
      <PlayerForm />
    </div>
  )
}

export default App
