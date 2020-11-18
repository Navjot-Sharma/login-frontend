export function setHome(data) {
    return {
        type: SET_HOME,
        payload: data
    };
}

export function fetchingHome(isFetching) {
    return {
        type: FETCHING_HOME,
        payload: isFetching
    }
}

export function homeError(error) {
    return {
        type: HOME_ERROR,
        payload: error
    }
}

export const SET_HOME = "SET_HOME";
export const FETCHING_HOME = "FETCHING_HOME";
export const HOME_ERROR = "HOME_ERROR";
