import React, { Component, PropTypes } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    login(){
        localStorage.setItem('userInfo',"Sal");
        location.href="/dashboard";
    }
    handleUserNameChange(){

    }
    handlePasswordChange(){

    }
    render() {
        return (
            <div>
                <p>User name: 
                <input type="text" name="firstname" onChange={this.handleUserNameChange} value="Mickey"/></p><br/>
                <p>Password: 
                <input type="text" name="lastname"  onChange={this.handlePasswordChange}  value="Mouse" /></p> <br/><br/>
                <button  onClick={this.login} >Login</button>
            </div>
        )
    }
}

Login.propTypes = {
};

export default Login