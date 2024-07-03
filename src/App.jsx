import { useState } from 'react'
import './App.css'
import {NextUIProvider} from "@nextui-org/react";
import { Routing } from './routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <NextUIProvider>
  <Routing/>
  </NextUIProvider>
  )
}

export default App
