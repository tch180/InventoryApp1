import React, { Component } from 'react';
import axios from 'axios';
import Search from '../components/search';

class navbar extends Component {

        state = {
            query: '',
            results: [],
        }


        handleChange = () => {
            this.setState({
              query: this.search.value
            }, () => {
              if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
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
                this.setState({results: res.data })               
                   console.log(res.data)
                console.log("Port = ",process.env.PORT)
                return res.data;
                
            } 
            catch (err){
                console.log(err)
                await this.setState({ error: err.message})
                return err.message
            }
        }
        



    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#"><i className="fas fa-globe-americas"></i>  I-W </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/"> <i class="fas fa-home"></i>  Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-tools"></i> <span>Admin tools</span> 
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/admin"> <i class="fas fa-users-cog"></i> admin</a>
                            <a className="dropdown-item" href="/Inventory"> <i class="fas fa-users"></i> Customer View </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/add-Inventory"><i class="fas fa-warehouse"></i>  Add Inventory</a>
                            </div>
                        </li>
                        </ul>

                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"  ref={input => this.search = input}
                         onChange={this.handleChange} aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                         <div>
                            <Search  results={this.state.results}/>
                            
                        </div>

                        </form>
                    </div>
                    </nav>
            </div>
        );
    }
}

export default navbar;