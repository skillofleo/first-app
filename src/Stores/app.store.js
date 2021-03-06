import React from 'react'

import {  Route} from "react-router-dom";

import Docs from "../containers/Docs";
import Help from "../containers/Help";
import Tutorial from "../containers/Tutorial";

import Page1 from "../containers/page1";
import Count from "../containers/count";

export const InitialState = {
  counter: 1,
  todos: [],
};

export const items = [
    { name: "Docs", path: "/docs" },
    { name: "Tutorial", path: "/tutorial" },
    { name: "Help", path: "/help" },
    { name: "Page 1", path: "/page1" },
    { name: "Count", path: "/count" },
   
  ];

  export  const routeList = [
    { name: "Docs", component: Docs, path: "/docs", exact: false },
    { name: "Tutorial", component: Tutorial, path: "/tutorial", exact: false },
    { name: "Help", component: Help, path: "/help", exact: false },
    { name: "Page1", component: Page1, path: "/page1", exact: false },
    { name: "Page1", component: Count, path: "/count", exact: false }
    
  ];

export  const routers = routeList.map(({ component, path, exact }, key) => {
    return <Route exact={exact} path={path} component={component} key={key} />;
  });

  export const initState = {
    count: 0,
    todos: []
  } ;
  

export const Context = React.createContext(initState);