import React from "react"
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import { Routes, Route } from "react-router"
import ContactDataScreen from "./Screens/ContactScreen/ContactDataScreen"

function App() {

return (

    <div>
      <Routes>
        <Route
          path='/contacts/:contact_id/messages'
          element={<HomeScreen/>}
        />
        <Route
          path="/"
          element={<ContactScreen/>}
        />
        <Route
          path="/contacts/:contact_id/data"
          element={<ContactDataScreen/>}
        />
      </Routes>
    </div>
  
  )
}

export default App
