import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';
/*
import Menu from './Menu';
import About from './About';
*/ 
import PageNotFound from './Page-Not-Found/pageNotFound';
import Home from './Home/Home';
import Signin from './Sign-In/Signin'
import Configurations from './Configurations/Configurations';
import Environments from './Environments/Environments';
import Configuration from './Configuration/Configuration';



export default function App() {
  return (
    <div>

      <Switch>

        <Route exact path="/" >
          <Home />
        </Route>

        <Route exact path="/sign-in" >
          <Signin />
        </Route>

        <Route path="/configurations">
        <Configurations />
        </Route>

        <Route path="/environments">
        <Environments />
        </Route>

        <Route path="/configuration/:id">
        <Configuration />
        </Route>

        <Route path="*" >
          <PageNotFound />
        </Route>
        
      </Switch>
    </div>  
  );
}

