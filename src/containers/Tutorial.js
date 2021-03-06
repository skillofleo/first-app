import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Page1 from './page1';



const tuto= ({match})=>{
    return(
        <h3>Requested Param: {match.params.id}</h3>
    )
}

const Docs =({match})=> {
    return (
        <Router>
        <div className="row">
                <article>
                <Route path={`${match.path}/:id`} component={tuto} />
                <Route path={`${match.path}/page1`} component={Page1} />
                <Route
                    exact
                    path={match.path}
                    render={() => <h3>Please select a Tutorial.</h3>}
                />
                   
                </article>

                <div className="nav-left">
                    <div >
                        <ul>
                            <li><Link to={`${match.url}/page1`}>page1</Link></li>   
                            <li><Link to={`${match.url}/Tutorial_01`}>Tutorial_01</Link></li>   
                            
                            <li><Link to={`${match.url}/Tutorial_02`}>Tutorial_02</Link></li>   
                        </ul>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Docs