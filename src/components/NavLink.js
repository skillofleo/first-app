import React from 'react'


const NavLink = ({href,children}) =>{
    return (
        <a className="nav-link" href={href}  >{children}</a>
    )
}

export default NavLink 
  