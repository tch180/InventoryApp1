import React, {component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import homepage from './components/homepage';
import inventory from './components/inventory/inventory';
import addInventory from './components/inventory/addInventory';


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={homepage}/>
            <Route exact path='/Inventory' component={inventory}/>
            <Route exact path='/add-inventory' component={addInventory}/>

          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
