import React from 'react';
import './css/App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Navbar from './navbar';
import tim from './tim/tim-profile';
import tong from './tong/tong-profile';
import pp from './pp/pp-profile'
import home from './page/home.js';

function App() {
  return (
    <BrowserRouter>

    <div class="my-app">
        <Navbar/>       
 

      <Switch>
        <Route exact path='/' component={home}/>
        <Route path='/tim' component={tim}/>
        <Route path='/tong' component={tong}/>
        <Route paht='/pp' component={pp}/>
      </Switch>
      
      </div>
        
    </BrowserRouter>
  );
}

export default App;
