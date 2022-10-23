import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navbar() {
  return (
    <div className='float-right mr-32 text-xl text-black'>
      <nav>
        <Link to="/"><span className='hover:text-gray-600'>About</span></Link>
        <Link className='pl-8' to="/review"><span className='hover:text-gray-600'>Review</span></Link>
        <Link className='pl-8' to="/settings"><span className='hover:text-gray-600'>Settings</span></Link>
      </nav>
    </div>
  )
}
