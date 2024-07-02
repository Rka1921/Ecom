import { useState } from 'react'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './layouts/login'
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
