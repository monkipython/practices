import { USER_LOGIN, USER_LOGOUT } from '../actions/ActionType'

const initialState = {
    token: '',
};

const AuthReducers = (state = initialState, action) => {
    switch(action.type){
        case USER_LOGIN:
            return [
                ...state,
                {
                    token: action.token,
                }
            ];
        default:
            return state;

    }
};

export default AuthReducers;