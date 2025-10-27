import { useState } from 'react'
import './App.css'
import Dashboard from "./pages/Dashboard"
import UserSignupUi from './pages/UserSignupUi'
import RepairshopSignupUi from './pages/RepairshopSignupUi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Dashboard></Dashboard>
       <UserSignupUi></UserSignupUi>
       <RepairshopSignupUi></RepairshopSignupUi>
    </>

  )
}

export default App
