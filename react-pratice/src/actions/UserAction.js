import { USER_LOGIN_PENDING, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, USER_LOGOUT_PENDING, USER_LOGOUT_SUCCESS, USER_LOGOUT_ERROR} from './ActionType';

export const LoginPending = () =>{
    return {
        type: USER_LOGIN_PENDING
    }
};

export const LoginSuccess = (token) =>{
    return {
        type: USER_LOGIN_SUCCESS,
        token: token
    }
};

export const LoginError = (error) =>{
    return {
        type: USER_LOGIN_ERROR,
        error: error
    }
};

export const LogoutPending = () =>{
    return {
        type: USER_LOGOUT_PENDING
    }
};

export const LogoutSuccess = (token) =>{
    return {
        type: USER_LOGOUT_SUCCESS,
        token: token
    }
};

export const LoginError = (error) =>{
    return {
        type: USER_LOGOUT_ERROR,
        error: error
    }
};