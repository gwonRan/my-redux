import counterReducer from './conter';
// import isLogged from './isLogged';
import { combineReducers } from 'redux';
import loggedReducer from './isLogged';

const allReducers = combineReducers({
    myCounter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;