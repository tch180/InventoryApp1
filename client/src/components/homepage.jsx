import React, { Component } from 'react';
// import Inventory from './inventory';
import pic1 from '../assets/images/stock-photo-building-and-measuring-tools-175644863.jpg'

import 'bootstrap';

class homepage extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">

                    <div className="container">

                    <h1 className="display-4">Inventory World!</h1>
                     <p className="lead">Welcome Admin</p>
                     <img src={pic1} alt="" style={{maxWidth:"100%"}}/>

                    <hr className="my-4"/>
                    <a className="btn btn-primary btn-lg" href="/Inventory" role="button">Continue</a>
                    </div>
                   
                </div>






            </div>
        );
    }
}

export default homepage;