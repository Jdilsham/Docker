import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-coontainer'>
      <div className='card'>
        <h1>Welcome</h1>
        <p>This is a frontend app with volumes</p>
      </div>
    </div>
  )
}

export default App;
