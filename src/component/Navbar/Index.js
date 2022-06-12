import React from 'react'
import Bars from './Bars'
import Nav from './NavElement'
import NavIcon from './NavIcon'
import NavLink from './NavLink'

const Navbar=({toggle})=>{
  return (
    
      <Nav>
      <NavLink to ="/">Pizza</NavLink>
      <NavIcon onClick={toggle}>

        <p>Menu</p>
        <Bars />
      </NavIcon>
      </Nav>
    
  )
}

export default Navbar
