import React from 'react'
import {NavLink} from 'react-router-dom'

import Logo from '../img/logo.png'

import '../css/NavBar.css'

function NavBar(){
  return(
    <div>
      <header className="NavBar-header">
				<NavLink className="NavBar-header-link" to='/' exact style={{textDecoration: 'none'}}>
          <img className="NavBar-header-logo" src={Logo} alt='Logo' />
        </NavLink>
        <NavLink className='NavBar-header-link' to='/' exact style={{textDecoration: 'none'}}>Home</NavLink>
			  <NavLink className='NavBar-header-link' to='/news' style={{textDecoration: 'none'}}>News</NavLink>
				<NavLink className='NavBar-header-link' to='/business' style={{textDecoration: 'none'}}>Business</NavLink>
        <NavLink className='NavBar-header-link' to='/pocket' style={{textDecoration: 'none'}}>Pocket</NavLink>
				
      </header>
    </div>
  )
}

export default NavBar