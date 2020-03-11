import LoginActionType from '../type/LoginActionType'

export const signInSuccess = (response) => {

    const user = {
        ...response,
        expiry_date: Date.now() + response.expires_in * 1000
    }
    localStorage.setItem("user", JSON.stringify(user))

    return {
        type: LoginActionType.SIGN_IN_SUCCESS,
        payload: {
            user
        }
    }
}

export const signInFailed = (response) => {
    return {
        type: LoginActionType.SIGN_IN_FAILED,
        payload: {
            error: {
                ...response
            }
        }
    }
}