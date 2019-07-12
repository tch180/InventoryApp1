import React, {component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import homepage from './components/homepage';
import inventory from './components/inventory/inventory';
import addInventory from './components/inventory/addInventory';
import admin from './components/admin/admin';
import Navbar from '../src/nav/navbar';
import signIn from '../src/components/signUp';


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar/>
        <Router>
          <Switch>
            <Route exact path='/' component={homepage}/>
            <Route exact path='/Inventory' component={inventory}/>
            <Route exact path='/add-inventory' component={addInventory}/>
            <Route exact path="/admin" component={admin}/>
            <Route exact path="/signIn-SignUp" component={signIn} />

          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
