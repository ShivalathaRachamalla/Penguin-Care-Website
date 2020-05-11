import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Auth from "../../services/Auth";
import PostPage from "../posts/PostPage.js";

class LoginPage extends Component {

     
   login = async (loginData) => {
        const loginSuccess = await Auth.login(loginData);

        if(loginSuccess) {
          this.props.history.push('/posts')
        } else {
          alert("Invalid credentials");
        }
    } 


    render() {

        return (
                        <div>
                            <LoginForm onSubmit={this.login} />
                            </div>
        );
    }
}

export default LoginPage;
