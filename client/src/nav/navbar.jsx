import React, { Component } from 'react';
import axios from 'axios';
import {clearAuthTokens} from "../util/SessionHeaderUtil"




// import Search from '../components/search';
class navbar extends Component {

        state = {
            query: '',
            results: [],
            signedIn: false,
        }


        handleChange = () => {
            this.setState({
              query: this.state.value
            }, () => {
              if (this.state.query && this.state.query.length > 1 ) {
                if (this.state.query.length % 2 === 0) {
                // returns all items in the db. 
                  this.getAllItems()
                }
              } else if (!this.state.query) {
              }
            })
          }

          getAllItems = async ()=> {
            try{ 
                const res = await axios.get(`/api/items/`);
                await this.setState({items: res.data});
                // for search 
                this.setState({results: res.data })               
                   console.log(res.data)
                return res.data;
            } 
            catch (err){
                console.log(err)
                await this.setState({ error: err.message})
                return err.message
            }
        }


        signOut = async (event) => {
            try {
                event.preventDefault()
                await axios.delete(`/auth/sign_out`)
                clearAuthTokens();
                this.setState({signedIn: false})
                console.log(clearAuthTokens())
                console.log("signing out")
                // need to add redirect to home on signout
            } catch(error) {
                console.log(error)
            }
        }


     



    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/"><i className="fas fa-globe-americas"></i>  I-W </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/"> <i className="fas fa-home"></i>  Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signIn"> <i className="fas fa-sign-in-alt"></i>  Sign In / Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/accounts"> <i className="fas fa-user-circle"></i>  My Account</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-toolbox"></i> <span> Admin tools</span> 
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/admin"> <i className="fas fa-users-cog"></i> admin</a>
                            <a className="dropdown-item" href="/Inventory"> <i className="fas fa-users"></i> Customer View </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/add-Inventory"><i className="fas fa-warehouse"></i>  Add Inventory</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-danger" onClick={this.signOut} href="/"> <i className="far fa-hand-spock"></i> sign out </button>
                        </li>
                        </ul>

                        {/* ///////////////
                        // Search function is not fully fuctional
                        // I believe that I need a 3rd party gem at this point 
                        // will try tweaking the search function as it could be that my call is wrong and I am not sending the values
                        /////////////// */}
                        
                        {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" 
                         type="search" placeholder="Search" 
                         ref={input => this.search = input}
                         onChange={this.handleChange} aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                         <div>
                            <Search  results={this.state.results}/>
                            
                        </div>

                        </form> */}
                    </div>
                    </nav>
            </div>
        );
    }
}

export default navbar;