const counterReducer = (state = 0, action) => {
    switch (action.type) {
        //action의 typed이 INCREMENT이거냐? action folder의 index파일
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;