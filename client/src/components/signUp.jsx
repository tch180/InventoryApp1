import React, { Component } from 'react';

class signUp extends Component {

    state= {
        email: '',
        password: '',
        password_confirmation:'',
        
    }

    signUp = (event) =>{
        event.preventDefault();

        this.props.signUp(
            this.state.email,
            this.state.password,
            this.state.password_confirmation
        )
                
     }



     signIn = (event) => {
         event.preventDefault()
         this.props.signIn(
             this.state.email,
             this.state.password,
         )
         console.log("submitting")
     }


     handleChange =(event)=> {
         const newState = {...this.state}
         newState[event.target.name] = event.target.value
         this.setState(newState)
     }





    render() {
        return (
            <div className="card mt-5" style={{width:"22rem", margin:" 0 auto"}}>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>

                        <input type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        required
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>

                        <input type="password"
                          className="form-control"
                          id="password" 
                          onChange={this.handleChange}
                          required
                          name="password"
                          value={this.state.password}
                          placeholder="Password"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>

                        <input type="password"
                          className="form-control"
                          id="password_confirmation" 
                          required
                          onChange={this.handleChange}
                          name="password_confirmation"
                          value={this.state.password_confirmation}
                          placeholder="password confirmation"/>
                    </div>
                    <div className="signin/up" style={{display:"flex", justifyContent:"space-evenly"}}>
                    <button type="submit" onClick={this.signIn} className="btn btn-success mb-2">SignIn</button>
                    <button type="submit" onClick={this.signUp} className="btn btn-success mb-2">SignUp</button>
                    </div>

                   

                </form>
            </div>
        );
    }
}

export default signUp;