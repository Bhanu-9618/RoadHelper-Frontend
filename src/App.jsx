import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import UserSignupUi from './components/UserSignupUi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <Dashboard></Dashboard> */}
       <UserSignupUi></UserSignupUi>
    </>

  )
}

export default App
