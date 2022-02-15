import React, { useReducer } from "react";

// reducer 는 현재상태와 액션객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수
// reducer 에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가 됨
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  // useReducer 사용방법
  // const [state, dispatch] = useReducer(reducer, initialState);
  // state: 컴포넌트에서 사용할 수 있는 상태
  // dispatch: 액션을 발생시키는 함수 (dispatch({type:'INCREMENT'})의 형태로 사용)
  // useReducer의 첫번째 파라미터는 reducer 함수, 두번째 파라미터는 초기 상태
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };
  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
