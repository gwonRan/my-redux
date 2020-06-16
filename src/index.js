import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import allReducer from './reducers/index';
//Global State와 Store 연결해준다.
import { Provider } from 'react-redux';

//STORE에는 현재의 앱 상태와 리듀서, 추가적인 내장 함수
// const store = createStore(counterReducer, isLoggedReducer)
//allReducer는 counter와 isLogged 둘 다 가지고 있다.
const myStore = createStore(
  allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
