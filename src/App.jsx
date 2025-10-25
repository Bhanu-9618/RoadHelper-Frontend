import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import UserSignupUi from './components/UserSignupUi'
import RepairshopSignupUi from './components/RepairshopSignupUi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <Dashboard></Dashboard>
       <UserSignupUi></UserSignupUi> */}
       <RepairshopSignupUi></RepairshopSignupUi>
    </>

  )
}

export default App
