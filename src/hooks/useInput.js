import { useCallback, useState } from "react";

export const useInput = (initialValue) => {
  const [inputs, setInputs] = useState(initialValue);
  const onChange = useCallback((e) => {
    const { value, name } = e.target;
    setInputs((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  }, []);
  const reset = useCallback(() => setInputs(initialValue), [initialValue]);
  return [inputs, onChange, reset];
};
