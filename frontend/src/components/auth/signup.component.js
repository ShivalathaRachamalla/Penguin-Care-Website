import React, { Component } from "react";
//import RegisterForm from "./SignupForm";
import Auth from "../../services/Auth";

export default class SignUp extends Component {


    async register(registrationData) {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Couldn't register check credentials and try again");
        }
    }
    constructor(props) {
        super(props);
        this.state = { firstname: '', lastname: '', email: '', password: ''  };
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        alert("Click Ok to register in Pengiun Care " );
     const registereddata =  {firstname : this.state.firstname , lastname : this.state.lastname , email : this.state.email , password : this.state.password};
        this.register(registereddata);
    }
      getvalueFname = (event) => {
        this.setState({firstname: event.target.value});
      }

      getvalueLname = (event) => {
        this.setState({lastname: event.target.value});
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
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" onChange={this.getvalueFname} className="form-control"   placeholder="First name" />

                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" onChange={this.getvalueLname} className="form-control"  placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"  onChange={this.getvalueEmail} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={this.getvaluePassword} className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" /*onClick={event => onSubmit({firstname,lastname,email, password})}*/>Sign Up</button>
            </form>
        );
    
    
    }
}
