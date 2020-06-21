import React from 'react'
import {NavLink, Link} from 'react-router-dom'

import Logo from '../img/logo.png'

import '../css/NavBar.css'

function NavBar(){
 

  function menuOpen(){
    var x = document.getElementsByClassName('NavBar-header')
    
    if(x.className === "NavBar-header"){
      x.className += "responsive"
    }else{
      x.className = "NavBar-header"
    }
  }

  return(
    <div>
      <nav className="NavBar-header">
        <NavLink className="NavBar-header-link" to='/' exact>
          <img className="NavBar-header-logo" src={Logo} alt='Logo' />
        </NavLink>
        <NavLink className='NavBar-header-link' to='/' exact >Home</NavLink>
        <NavLink className='NavBar-header-link' to='/news' >News</NavLink>
        <NavLink className='NavBar-header-link' to='/business' >Business</NavLink>
        <NavLink className='NavBar-header-link' to='/pocket'>Pocket</NavLink>
        <Link onClick={menuOpen()} className="NavBar-burger">&#9776;</Link>
      </nav>
    </div>
  )
  
}

export default NavBar