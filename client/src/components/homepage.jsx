import React, { Component } from 'react';
// import Inventory from './inventory';

import 'bootstrap';

class homepage extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Inventory World!</h1>
                     <p className="lead">Welcome Admin</p>
                    <hr className="my-4"/>
                    <a className="btn btn-primary btn-lg" href="/Inventory" role="button">Continue</a>
                </div>






            </div>
        );
    }
}

export default homepage;