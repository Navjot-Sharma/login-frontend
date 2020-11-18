const defaultHome = {
    fetchingHome: true,
    banners: [{}],
    trending: [],
    picks: [],
    latest: [],
    blog: []
};

export default (state = {fetchingHome: true}, action) => {
    switch (action.type) {
        case "FETCHING_HOME":
            return {
                ...state,
                fetchingHome: action.payload,
            };

        case "SET_HOME":
            return {
                ...state,
                ...action.payload
            }

        case "HOME_ERROR":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};
