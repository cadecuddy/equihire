import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navbar() {
  return (
    <div className='float-right mr-32 text-xl '>
      <nav>
        <Link to="/">Review</Link>
        <Link className='pl-8' to="/settings">Settings</Link>
      </nav>
    </div>
  )
}
