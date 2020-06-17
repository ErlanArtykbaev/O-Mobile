import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(){
  return(
    <div>
      <header className="NavBar-header">
				<NavLink className="Navbar-header-link" to='/' exact>
         
        </NavLink>
				<NavLink className='NavBar-header-link' to='/' exact style={{textDecoration: 'none'}}>Home</NavLink>
				<NavLink className='NavBar-header-link' to='/news' style={{textDecoration: 'none'}}>News</NavLink>
				<NavLink className='NavBar-header-link' to='/business' style={{textDecoration: 'none'}}>Business</NavLink>
      </header>
    </div>
  )
}

export default NavBar