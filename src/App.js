import React from "react";
import Hello from "./Hello";
import Wrapper from "./wrapper";

function App() {
  return (
    // Wrapper태그 내부에 있는 Hello컴포넌트를 보여지게 하기 위해서는
    // Wrapper에서 props.children을 렌더링 해주어야 한다.
    <Wrapper>
      <Hello color="pink" />
      <Hello name="react" color="red" />
    </Wrapper>
  );
}

export default App;
