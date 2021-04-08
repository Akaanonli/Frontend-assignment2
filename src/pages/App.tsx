import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';

import PageNotFound from './page-not-found/page-not-found';
import Home from './Home/Home';
import Signin from './Sign-in/Sign-in'


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

        <Route path="*" >
          <PageNotFound />
        </Route>
        
      </Switch>
    </div>  
  );
}

