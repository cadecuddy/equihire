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
        <Link to="/"><span className='hover:text-pink-400 font-semibold'>home</span></Link>
        <Link className='pl-8' to="/screening"><span className='hover:text-pink-400 font-semibold'>screening</span></Link>
        <Link className='pl-8' to="/settings"><span className='hover:text-pink-400 font-semibold'>settings</span></Link>
      </nav>
    </div>
  )
}
