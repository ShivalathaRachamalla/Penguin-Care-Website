import React, { Component } from "react";
import SignupForm from "./SignupForm";
import Auth from "../../services/Auth";

export default class SignUp extends Component {

    async register(registrationData) {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Couldn't register check credentials and try again");
        }
    }

    render() {
        return(
            <div>
                <SignupForm onSubmit={this.register}/>
            </div>
            );

    }
}
