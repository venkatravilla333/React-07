import React from 'react'
import './style.css'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink
            to='/login'>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header