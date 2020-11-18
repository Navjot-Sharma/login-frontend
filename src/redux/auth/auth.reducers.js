export default (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
        case "SIGNUP":
            return {
                ...state,
                fetchingAuth: false,
                currentUser: action.payload,
            };

        case "LOGOUT":
            return {
                ...state,
                fetchingAuth: false,
                currentUser: null,
            };

        case "FETCHING_AUTH":
            return {
                ...state,
                fetchingAuth: true
            };

        case "AUTH_ERROR":
            return {
                ...state,
                fetchingAuth: false
            };
        
        case "AUTO_LOGIN":
            const currentUser = localStorage.getItem('currentUser');
            console.log(currentUser);
            if (currentUser) {
                return {
                    ...state,
                    fetchingAuth: false,
                    currentUser
                };
            }
            return {
                ...state,
                fetchingAuth: false
            };
        default:
            return state;
    }
};
