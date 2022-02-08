import React from "react";

const Hello = ({ name, color }) => {
  return (
    <>
      <h1 style={{ color: color }}>안녕하세요 {name}</h1>
    </>
  );
};

Hello.defaultProps = {
  name: "noName",
};
export default Hello;
