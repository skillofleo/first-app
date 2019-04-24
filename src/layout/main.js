import React from 'react'


const MainLayout = ({navbar,children}) => {
     return(
        <div>
          <section className="header" >
            <div className="container">
              <div className="row">
                {navbar}
              </div>  
            </div>
          </section>
          <section className="main">
            <div className="container">
            {children}
            
            </div>
          </section>
        </div>
       
    )
}

export default MainLayout