import LoginActionType from '../type/LoginActionType'

const user = localStorage.getItem("user");

const initialState = {
    isLogged: user ? true : false,
    user: JSON.parse(user) ? JSON.parse(user) : {
        access_token: null,
        token_type: null,
        expires_in: null,
        expiry_date: null
    },
    error: {
        error: null
    }
}

const loggedReducer = (state = initialState, action) => {
    switch (action.type) {
        case LoginActionType.SIGN_IN_SUCCESS :
            return {
                isLogged: true,
                user: action.payload.user
            };
        case LoginActionType.SIGN_IN_FAILED:
            return {
                ...state,
                error: action.payload.error
            };
        default :
            return state;
    }
}


export default loggedReducer;
