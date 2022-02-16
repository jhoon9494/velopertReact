import { useCallback, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.name]: action.value };
    case "RESET_INPUT":
      return state;
    default:
      return state;
  }
};

export const useInput = (initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const onChange = useCallback((e) => {
    const { value, name } = e.target;
    dispatch({ type: "CHANGE_INPUT", value, name });
  }, []);
  const reset = useCallback(() => {
    dispatch({ type: "RESET_INPUT" });
  }, []);
  return [state, onChange, reset];
};
