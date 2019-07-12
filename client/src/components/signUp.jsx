import React, { Component } from 'react';

class signUp extends Component {

    state: {
        signedIn: false 
    }

    render() {
        return (
            <div className="card mt-5" style={{width:"22rem", margin:" 0 auto"}}>
                <form>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password"/>
                    </div>
                    <div className="signin/up" style={{display:"flex", justifyContent:"space-evenly"}}>
                    <button type="submit" class="btn btn-success mb-2">SignIn</button>
                    <button type="submit" class="btn btn-success mb-2">SignUp</button>
                    </div>

                   

                </form>
            </div>
        );
    }
}

export default signUp;