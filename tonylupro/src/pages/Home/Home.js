import React, {Component} from 'react';
import { LoginForm } from './../../components';
import { connect } from 'react-redux'; 

class Home extends Component{
    state = {
        email: '',
        password: '',
        token: '',
    };

    updateEmail = (usr) => {
            this.setState({
                email: usr
            });
    };

    updatePassword = (pwd) => {
            this.setState({
                password: pwd
            });
    };

    loginClick = () => {
        let { email, password } = this.state;
        // console.log(email + ", " + password);
        
    }

    render(){
        return (
            <div>
                <h1>Home Page</h1>
                <LoginForm 
                    updateEmail={(e) => this.updateEmail(e.target.value)}
                    updatePassword={(e) => this.updatePassword(e.target.value)}
                    loginClick={this.loginClick} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    email: state.email,
    password: state.password,
    token: state.token
});

export default connect(mapStateToProps)(Home);