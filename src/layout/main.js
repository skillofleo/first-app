import React from 'react'


const MainLayout = ({mainSide,leftSide,children}) => {
     return(
        <div>
          <section className="header" >
            <div className="container">
              <div className="row">
               
                {children}
              </div>  
            </div>
          </section>
          <section className="main">
            <div className="container">
              <div className="row">
                <article>
                  {mainSide}
                </article>
                <div className="nav-left">
                {leftSide}
                </div>
              </div>
            </div>
          </section>
        </div>
       
    )
}

export default MainLayout