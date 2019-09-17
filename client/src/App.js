import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import './App.css';
import homepage from './components/homepage';
import inventory from './components/inventory/inventory';
import addInventory from './components/inventory/addInventory';
import admin from './components/admin/admin';
import Navbar from '../src/nav/navbar';
import axios from 'axios';
import SignUp from './components/signUp';
// import signIn from './components/signUp'
import {saveAuthTokens, userIsLoggedIn, setAxiosDefaults, clearAuthTokens} from "./util/SessionHeaderUtil"



class App extends Component {
  state = {
    signedIn: false
    
  }




  async componentWillMount() {
    try {
      const signedIn = userIsLoggedIn()
      if(signedIn){
        setAxiosDefaults()
        this.setState({signedIn})
        console.log("setting defaults and changing state to true ")
      }
    } catch (error) {
      console.log(error)
    }
  }

      signUp = async(email,password,password_confirmation) => {
        try { 
          const payload = {
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
          const response = await axios.post(`/auth` ,payload)
          saveAuthTokens(response.headers)
          this.setState({signedIn: true,})
          console.log("submitting")
        } catch(error) {
          console.log(error)
        }
      }

      signIn = async(email,password)=> {
        try {
          const payload={
            email,
            password
          }
        const response = await axios.post(`/auth/sign_in`,payload)
        saveAuthTokens(response.headers);
          this.setState({signedIn: true})
          console.log("signing in")
        } catch(error) {
          console.log(error)
        }
      }
    
    





render(){

  const SignUpComponent = () => (
    <SignUp
    signUp={this.signUp}
    signIn={this.signIn}/>
  )

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
            <Route exact path="/signIn" render={SignUpComponent} />

          </Switch>
          {/* {this.state.signedIn ?   <Redirect to="/admin"/> : <Redirect to="/si"/>} */}

        </Router>
      </React.Fragment>
    </div>
  );
}
}

export default App;
