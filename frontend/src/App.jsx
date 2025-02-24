import { useState } from 'react'
import './App.css'
import AppBar from './components/AppBar'
import PlayerForm from './components/PlayerForm'
import Container from '@mui/material/Container';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppBar pos="fixed" bgColor="rgb(74, 120, 136)"/>
      <PlayerForm />
    </>
  )
}

export default App
