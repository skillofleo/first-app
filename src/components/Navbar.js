import React,{userState} from 'react'

const Navbar =({title,children}) => {



    return (
      <nav className="navbar navbar-expand-lg text-white w-100">
      <a className="navbar-brand"  >{title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
           {children}
        </ul>
        
      </div>
    </nav>
    )
  
}

export default Navbar