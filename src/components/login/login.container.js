import React, { Component, PropTypes } from 'react';
import LoginView from './login.view';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    login() {
        localStorage.setItem('userInfo', "Sal");
        location.href = "/dashboard";
    }
    handleUserNameChange() {

    }
    handlePasswordChange() {

    }
    render() {
        return (
            <div>
                <LoginView 
                 login={this.login}
                 handleUserNameChange={this.handleUserNameChange}
                 handlePasswordChange={this.handlePasswordChange}/>
            </div>
        )
    }
}

export default LoginContainer