import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GuestLyout, AuthLayout } from './pages/Layout'
import AuthPage from './pages/AuthPage'
const App = () => {
  return (
    <Routes>
      {/* Login Routes */}
      <Route element={<GuestLyout/>}>
        <Route path='/login' element={<AuthPage mode="login"/>}/>
        <Route path='/register' element={<AuthPage mode="register"/>}/>
      </Route>

       {/* Protected Routes */}
      <Route element={<AuthLyout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/builder/:id' element={<BuilderPage/>}/>
        <Route path='/preview/:id' element={<PreviewPage/>}/> 
      </Route>


    </Routes>
  )
}

export default App
