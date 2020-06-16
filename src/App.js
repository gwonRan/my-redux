import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
//folderName에서 index사용할 땐 뒤에 index안 써줘도 된다.

function App() {
  const counter = useSelector(state => state.myCounter);
  //내가 선언한 state 가져오기 allReducer를 store에 담아줌.
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : null}
    </div>
  );
}

export default App;
