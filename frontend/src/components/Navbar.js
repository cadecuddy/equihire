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
        <Link to="/">Review</Link>
        <Link className='pl-8' to="/settings">Settings</Link>
        <Link className='pl-8' to="/about">About</Link>
      </nav>
    </div>
  )
}
