import { USER_LOGIN, USER_LOGOUT} from './ActionType';

export const Login = (username, password) => dispatch => {
    fetch("https://reqres.in/api/login", {
        method: "POST",
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({email: username, password: password}),
    })
    .then(res => res.json)
    .then(data => dispatch({
        type: USER_LOGIN,
        payload: data
    }));
};