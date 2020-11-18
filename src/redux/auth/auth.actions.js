export function login(user) {
    return {
        type: LOGIN,
        payload: user
    };
}

export function signup(user) {
    return {
        type: SIGNUP,
        payload: user
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function fetchingAuth(isFetching) {
    return {
        type: FETCHING_AUTH,
        payload: isFetching
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function autoLogin() {
    return {
        type: AUTO_LOGIN
    }
}

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";
export const AUTH_ERROR = "AUTH_ERROR";
export const AUTO_LOGIN = "AUTO_LOGIN";
export const FETCHING_AUTH = "FETCHING_AUTH";
