import { USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_PENDING, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_PENDING } from '../actions/ActionType';

const initialState = {
    pending: false,
    token: '',
    error: null,
};

export const Authlogin = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN_PENDING: 
            return {
                ...state,
                pending: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                pending: false,
                token: action.payload
            }
        case USER_LOGIN_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const AuthToken = state => state.token;
export const AuthPending = state => state.pending;
export const AuthError = state => state.error;