import React, { useState } from "react";

const InputSample = () => {
  const [inputs, setInputs] = useState({ name: "", nickname: "" });
  const { name, nickname } = inputs;
  const changeValue = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };
  const resetValue = () => {
    setInputs({ name: "", nickname: "" });
  };
  return (
    <div>
      <input name="name" value={name} onChange={changeValue} placeholder="이름" />
      <input name="nickname" value={nickname} onChange={changeValue} placeholder="닉네임" />
      <button onClick={resetValue}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
};

export default InputSample;
