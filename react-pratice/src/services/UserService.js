import { LoginPending, LoginSuccess, LoginError } from '../actions/UserAction';

function LoginService(username, password) {
    return dispatch => {
        dispatch(LoginPending());
        fetch('https://reqres.in/api/login',{
            method: "POST",
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({email: username, password: password}),
        })
        .then(res => res.json())
        .then(res => {
            if(!res.token) {
                throw(res.error);
            }
            dispatch(LoginSuccess(res.token));
            return res.token;
        })
        .catch(error => {
            dispatch(LoginError(error));
        })
    }
}

export default LoginService;