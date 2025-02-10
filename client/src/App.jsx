import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About, SignIn, SignUp, Home, Profile, Navbar } from './components/exportComp.js'
function App() {
  return (
    <div className='h-scree'>
      <header>
          <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} /> 
        <Route path='/profile' element={<Profile />} /> 
      </Routes>
    
    </div>
  )
}

export default App
