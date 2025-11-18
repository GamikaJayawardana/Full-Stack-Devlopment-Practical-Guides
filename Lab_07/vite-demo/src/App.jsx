import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './Box.Jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <h1>Project 4: Vite JSX Demo</h1>
        <Box />
      </div>
      
  )
}

export default App
