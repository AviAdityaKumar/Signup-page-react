import React, { Component } from "react";
import classes from './SignupPage.module.css';
import GSearch from '../../Assets/Icons/Gsearch.svg';
import Fb from '../../Assets/Icons/facebook.svg';
import visible from '../../Assets/Icons/visibilityOn.svg';
import notVisible from '../../Assets/Icons/visibilityOff.svg';

class SignupPage extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        revealPass: false
    };

    googleButtonHandler = () => {
        alert("Functionality not currently included :(");
    }

    fbButtonHandler = () => {
        window.FB.login(function (response) {
            // console.log(response)
            if (response.status === "connected") {
                alert("Login Successful!");
            } else {
                alert("Error : " + response.error);
            }
        });
    }

    firstNameChangedhandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    lastNameChangedhandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    emailAddressChangedhandler = (event) => {
        this.setState({ emailAddress: event.target.value });
    }

    passwordChangedhandler = (event) => {
        this.setState({ password: event.target.value });
    }

    revealPasswordHandler = () => {
        const current = this.state.revealPass;
        this.setState({ revealPass: !current });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.postFormData('https://reqres.in/api/register', { "email": this.state.emailAddress, "password": this.state.password })
            .then(data => {
                if (data.error) {
                    alert("Error : " + data.error);
                } else {
                    alert("Login Successful!");
                }
            });
    }

    postFormData = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    render() {
        return (
            <div className={classes.Signup}>
                <div className={classes.FormPanel}>
                    <div className={classes.head}>Sign Up</div>
                    <div className={classes.FormContent}>
                        <div>
                            <h1>Create your account</h1>
                            <p>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </p>
                        </div>
                        <div>
                            <form>
                                <div className={classes.FormButtonsPanel}>
                                    <div className={classes.Buttons}>
                                        <div>
                                            <button className={classes.button} type="button" onClick={this.googleButtonHandler}>
                                                <span>
                                                    <i className={classes.icon}>
                                                        <img src={GSearch} alt="Google" />
                                                    </i>
                                                    Sign up with Google
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div style={{ "minWidth": "10px" }}></div>
                                    <div className={classes.Buttons}>
                                        <div>
                                            <button className={classes.button} type="button" onClick={this.fbButtonHandler}>
                                                <span>
                                                    <i className={classes.icon}>
                                                        <img src={Fb} alt="FB" />
                                                    </i>
                                                Sign up with Facebook
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={classes.OrSeprator}>
                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <hr />
                                <div> or </div>
                                <hr />
                            </div>
                        </div>
                        <div>
                            <form>
                                <fieldset className={classes.FormFieldset}>
                                    <div className={classes.TextInputField}>
                                        <input id="first-name" placeholder="First Name" required type="text" onChange={this.firstNameChangedhandler} />
                                    </div>
                                    <div className={classes.TextInputField}>
                                        <input id="last-name" placeholder="Last Name" required type="text" onChange={this.lastNameChangedhandler} />
                                    </div>
                                    <div className={classes.TextInputField}>
                                        <input id="email-address" placeholder="Email Address" required type="email" onChange={this.emailAddressChangedhandler} />
                                    </div>
                                    <div style={{ "position": "relative" }}>
                                        <div className={classes.TextInputField}>
                                            <input id="password" placeholder="Password" required
                                                type={this.state.revealPass ? "text" : "password"}
                                                onChange={this.passwordChangedhandler} />
                                        </div>
                                        <span className={classes.EyeIcon}>
                                            <i className={classes.icon}>
                                                <img src={this.state.revealPass ? notVisible : visible}
                                                    alt="Visibility On"
                                                    onClick={this.revealPasswordHandler} />
                                            </i>
                                        </span>
                                    </div>
                                    <div className={classes.TOU} label="Terms Of Use">
                                        <span>
                                            {"By clicking Sign Up, you agree to our "}
                                            <a href="#">Terms of use</a>
                                            {" and our "}
                                            <a href="#">Privacy Policy</a>.
                                        </span>
                                    </div>
                                    <button className={classes.SubmitButton} onClick={this.submitHandler}>
                                        <span>Sign Up</span>
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default SignupPage;