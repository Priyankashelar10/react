import React, { Component, PropTypes } from 'react';
import "../../../assets/pages/css/login.min.css";

class LoginView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className=" login">
                <div className="logo">
                    <a href="index.html">
                        <img src="../assets/pages/img/logo-big.png" alt="" /> </a>
                </div>
                <div className="content">
                    <div className="login-form" >
                        <h3 className="form-title font-green">Sign In</h3>
                        <div className="alert alert-danger display-hide">
                            <button className="close" data-close="alert"></button>
                            <span> Enter any username and password.</span>
                        </div>
                        <div className="form-group">
                            <label className="control-label visible-ie8 visible-ie9">Username</label>
                            <input className="form-control form-control-solid placeholder-no-fix" type="text" autocomplete="off" placeholder="Username" name="username" /> </div>
                        <div className="form-group">
                            <label className="control-label visible-ie8 visible-ie9">Password</label>
                            <input className="form-control form-control-solid placeholder-no-fix" type="password" autocomplete="off" placeholder="Password" name="password" /> </div>
                        <div className="form-actions">
                            <button onClick={this.props.login} className="btn green uppercase">Login</button>
                            <label className="rememberme check mt-checkbox mt-checkbox-outline">
                                <input type="checkbox" name="remember" value="1" />Remember
                                <span></span>
                            </label>
                            <a href="javascript:;" id="forget-password" className="forget-password">Forgot Password?</a>
                        </div>
                        <div className="login-options">
                            <h4>Or login with</h4>
                            <ul className="social-icons">
                                <li>
                                    <a className="social-icon-color facebook" data-original-title="facebook" href="javascript:;"></a>
                                </li>
                                <li>
                                    <a className="social-icon-color twitter" data-original-title="Twitter" href="javascript:;"></a>
                                </li>
                                <li>
                                    <a className="social-icon-color googleplus" data-original-title="Goole Plus" href="javascript:;"></a>
                                </li>
                                <li>
                                    <a className="social-icon-color linkedin" data-original-title="Linkedin" href="javascript:;"></a>
                                </li>
                            </ul>
                        </div>
                        <div className="create-account">
                            <p>
                                <a href="javascript:;" id="register-btn" className="uppercase">Create an account</a>
                            </p>
                        </div>
                    </div>
                    <form className="forget-form">
                        <h3 className="font-green">Forget Password?</h3>
                        <p> Enter your e-mail address below to reset your password.</p>
                        <div className="form-group">
                            <input className="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Email" name="email" /> </div>
                        <div className="form-actions">
                            <button type="button" id="back-btn" className="btn green btn-outline">Back</button>
                            <button type="submit" className="btn btn-success uppercase pull-right">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="copyright"> 2014 © Metronic.Admin Dashboard Template.</div>
            </div>
        )
    }
}

LoginView.propTypes = {
};

export default LoginView