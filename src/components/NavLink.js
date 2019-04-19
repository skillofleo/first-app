import React from 'react'


const NavLink = (props) =>{
    return (
        <a className="nav-link" href={props.href}  >{props.name}</a>
    )
}

export default NavLink 
  