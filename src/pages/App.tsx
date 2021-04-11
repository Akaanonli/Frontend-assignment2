import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';

import Menu from '../Global-Components/Menu';
import Footer from '../Global-Components/Footer';

import PageNotFound from './Page-Not-Found/pageNotFound';
import Home from './Home/Home';
import Signin from './Sign-In/Signin'
import Configurations from './Configurations/Configurations';
import Environments from './Environments/Environments';
import Environment from './Environment/Environment';



export default function App() {
  return (
    <div>

      <Menu/>

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

        <Route path="/environment/:id">
        <Environment />
        </Route>

        <Route path="/admin-environments">
        <EditEnvironments />
        </Route>


        <Route path="*" >
          <PageNotFound />
        </Route>
        
      </Switch>

      <Footer/>
    </div>  
  );
}

