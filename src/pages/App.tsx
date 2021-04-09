import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';

import PageNotFound from './Page-Not-Found/pageNotFound';
import Home from './Home/Home';
import Signin from './Sign-In/Signin'
import Environments from './Environments/Environments';
//import Environment from './Environment';


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

        <Route path="/environments">
        <Environments />
        </Route>

        <Route path="*" >
          <PageNotFound />
        </Route>
        
      </Switch>
    </div>  
  );
}

/*


<Route path="/environment/:id">
<Environment />
</Route>
*/