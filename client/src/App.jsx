import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      {/* Login Routes */}
      <Route element={<Layout/>}>
        <Route path='login' element={<AuthPage mode="login"/>}/>
        <Route path='register' element={<AuthPage mode="register"/>}/>
      </Route>
    </Routes>
  )
}

export default App
