import React from 'react'
import Navbar from '../components/Navbar';

const MainLayout = ({children}) => {
    return(
        <div>
          <section className="header" >
            <div className="container">
              <div className="row">
                <Navbar className="navbar navbar-expand-lg text-white w-100" />
                {children}
              </div>  
            </div>
          </section>
          <section className="main">
            <div className="container">
              <div className="row">
                <article>
                  cotent
                </article>
                <div className="nav-left">

                </div>
              </div>
            </div>
          </section>
        </div>
       
    )
}

export default MainLayout