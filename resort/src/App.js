import React from 'react';

import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return <>

  <Navbar />
  {/* The navbar is outside of the switch so that it can be displayed on every pages */}
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms" component={Rooms}/>
    <Route exact  path="/rooms/:slug" component={SingleRoom}/>
    <Route component ={Error} />>
  </Switch>

  

  
  
  </>;
}

export default App;
