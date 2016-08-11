import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginView from './login.view';
import { authenticate } from '../../actions/login-action';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login() {
        //localStorage.setItem('userInfo', "Sal");
        //location.href = "/dashboard";
        this.props.authenticate();
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

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: () => {
            dispatch(authenticate());
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);