import React, { Component } from "react";
import SignupForm from "./SignupForm";
import Auth from "../../services/Auth";

class SignupPage extends Component {

    async register(registrationData) {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Couldn't register check credentials and try again");
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-6 " style={{color: "white"}}>
                        </div>
                            <SignupForm onSubmit={this.register}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupPage;
