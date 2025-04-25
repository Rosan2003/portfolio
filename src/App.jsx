import { useState } from 'react'
import './App.css'
import SunriseScene from './components/sunrise'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>

      SunriseScene();

    </>
  )
}

export default App
