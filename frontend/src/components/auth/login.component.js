import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Auth from "../../services/Auth";

export default class Login extends Component
{
    async login(loginData) {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials");
        }
    }
    render() {
        return(
            <div>
                <LoginForm onSubmit={this.login}/>
            </div>
            );

    }
}