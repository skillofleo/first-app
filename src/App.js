import React from "react";
import "./App.css";
import MainLayout from "./layout/main";

import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import NoMatch from "./containers/noMatch";
import {items,routers} from "./Stores/app.store"


const history = createBrowserHistory()
const App = () => {


  return (
    
    <Router history={history}>
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
        leftSide={<div>left side</div>}
      >
        {/* <Route exact path="/" component={Docs}/>
         <Route  path="/tutorial" component={Tutorial}/>
         <Route  path="/help" component={Help}/> */}

        <Switch>
          {routers}
          <Route component={NoMatch} />
        </Switch>
      </MainLayout>
    </Router>
  
  );
};
export default App;
