import React, { useState, useRef } from "react";

const InputSample = () => {
  const [inputs, setInputs] = useState({ name: "", nickname: "" });

  const nameInput = useRef(); //useRef()를 사용하여 Ref 객체를 생성

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값을 추출

  const changeValue = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value로 설정
    });
  };

  const resetValue = () => {
    setInputs({ name: "", nickname: "" });
    nameInput.current.focus();
  };
  return (
    <div>
      {/* 선택하고자 하는 DOM에 ref={}로 값을 설정하면, Ref객체의 .current 값은 선택된 DOM을 가리키게 됨 */}
      <input ref={nameInput} name="name" value={name} onChange={changeValue} placeholder="이름" />
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
