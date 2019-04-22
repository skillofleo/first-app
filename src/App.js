import React from "react";
import "./App.css";
import MainLayout from "./layout/main";

import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";

import Docs from "./containers/Docs";
import Help from "./containers/Help";
import Tutorial from "./containers/Tutorial";
import NoMatch from "./containers/noMatch";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";


import Page1 from "./containers/page1";
import Count from "./containers/count";

const history = createBrowserHistory()
const App = () => {
  const items = [
    { name: "Docs", path: "/Docs" },
    { name: "Tutorial", path: "/tutorial" },
    { name: "Help", path: "/help" },
    { name: "Page 1", path: "/page1" },
    { name: "Count", path: "/count" },
   
  ];

  const routeList = [
    { name: "Docs", component: Docs, path: "/Docs", exact: true },
    { name: "Tutorial", component: Tutorial, path: "/tutorial", exact: false },
    { name: "Help", component: Help, path: "/help", exact: false },
    { name: "Page1", component: Page1, path: "/page1", exact: false },
    { name: "Page1", component: Count, path: "/count", exact: false }
    
  ];

  const routers = routeList.map(({ component, path, exact }, key) => {
    return <Route exact={exact} path={path} component={component} key={key} />;
  });

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
