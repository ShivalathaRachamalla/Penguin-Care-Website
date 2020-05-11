import React, { Component } from "react";
import SignupForm from "./SignupForm";
import Auth from "../../services/Auth";

class SignupPage extends Component {

     register = async (registrationData)  => {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Couldn't register check credentials and try again");
        }else {
            this.props.history.push('/posts');

        }
    }

    render() {
        return (
                        <div>
                            <SignupForm onSubmit={this.register}/>
                    </div>
        );
    }
}

export default SignupPage;
