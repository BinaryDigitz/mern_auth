import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-slate-200  p-4 min-h-14 text-black flex items-center justify-around'>
      <h2 className='text-2xl font-bold text-cente'>
        Auth App
      </h2>
      <ul className='flex justify-center space-x-4 text-lg gap-6'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/signin'>Sign In</Link>
        </li>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
