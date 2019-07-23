import React, { Component } from 'react';

class LoginForm extends Component{

    render(){
        let { updateEmail, updatePassword, loginClick } = this.props;
        return (
            <div>
                <h4>Username</h4>
                <input type="text" placeholder="Email" onChange={updateEmail}/>
                <hr/>
                <h4>Password</h4>
                <input type="password" placeholder="Password" onChange={updatePassword}/>
                <button onClick={loginClick}>Login</button>
            </div>
        );
    }
}

export default LoginForm;