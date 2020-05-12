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
            <div className="wrapper">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-6 " style={{color: "white"}}>


                        </div>

                            <div className="row">
                                    <LoginForm onSubmit={this.login} />
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
