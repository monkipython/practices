import React, {Component} from 'react';
import { LoginForm } from './../../components';
import { connect } from 'react-redux'; 

class Home extends Component{
    state = {
        email: '',
        password: '',
        token: '',
    };

    updateEmail = (email) => {
        if(email != "" && email != null){
            this.setState(email);
        }
    };

    updatePassword = (password) => {
        if(password != "" && password != null){
            this.setState(password);
        }
    };

    loginClick = () => {
        let { email, password } = this.state;
        console.log(email + ", " + password);
    }

    render(){
        return (
            <div>
                <h1>Home Page</h1>
                <LoginForm 
                    updateEmail={(email) => this.updateEmail(email)}
                    updatePassword={(password) => this.updatePassword(password)}
                    loginClick={this.loginClick} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    token: state.token,
};

export default connect(mapStateToProps, )(Home);