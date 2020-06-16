const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state; //True
        default:
            return state;
    }
};

export default loggedReducer;