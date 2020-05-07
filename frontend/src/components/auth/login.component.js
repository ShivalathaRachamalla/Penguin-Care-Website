import React, { Component } from "react";
import Auth from "../../services/Auth";

export default class Login extends Component {
    
    async login(loginData) {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials");
        }
    }

    constructor(props) {
        super(props);
        this.state = { email: '', password: ''  };
      }

      getvalueEmail = (event) => {
        this.setState({email: event.target.value});
      }

      getvaluePassword = (event) => {
        this.setState({password: event.target.value});
      }

    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.getvalueEmail} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  onChange={this.getvaluePassword} />
                </div>


                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <div className="form-group"> onSubmit={this.login} </div>

            </form>
        );
    }
}
