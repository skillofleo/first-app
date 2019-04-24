import React from "react";
import "./App.css";
import MainLayout from "./layout/main";

import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import { BrowserRouter as Router,  Link } from "react-router-dom";
import {items,routers} from "./Stores/app.store"
import { ContextProvider } from "./ContextProvider";

const App = () => {
  
  return (
    <ContextProvider>
    <Router >
      <MainLayout
        navbar={
          <Navbar
            title={
              <Link className="navbar-brand" to="/">
                First App
                             </Link>
            }
          >
            {items.map(({ name, path }, key) => (
              <NavItem key={key}>
                <Link className="nav-link" to={path}>
                  {name}
                </Link>
              </NavItem>
            ))}
          </Navbar>
        }
        
      >
        {/* <Route exact path="/docs" component={Docs}/>
         <Route  path="/tutorial" component={Tutorial}/>
         <Route  path="/help" component={Help}/> */}

          {routers}
          {/* <Route exact component={NoMatch} /> */}
          
      </MainLayout>
    </Router>
    </ContextProvider>
  );
};
export default App;
