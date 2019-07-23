import React, {Component} from 'react';
import { LoginForm } from './../../components';
import { connect } from 'react-redux'; 
import * as UserAction from '../../actions/UserAction';
import { Authlogin, AuthError, AuthToken, AuthPending } from '../../reducers/AuthReducers';
import UserService from '../../services/UserService';

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
        let { UserLogin } = this.props; 
        UserLogin(email, password);
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
    pending: AuthPending(state),
    token: AuthToken(state),
    error: AuthError(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    UserLogin: UserService
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);