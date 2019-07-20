import React, { Component } from 'react';

class LoginForm extends Component{

    render(){
        let { updateEmail, updatePassword, loginClick } = this.props;
        return (
            <div>
                <h4>Username</h4>
                <input type="text" name="email" placeholder="Email" onkeyup={updateEmail} />
                <hr/>
                <h4>Password</h4>
                <input type="password" name="password" placeholder="Password" onkeyup={updatePassword} />
                <button onclick={loginClick}>Login</button>
            </div>
        );
    }
}

export default LoginForm;