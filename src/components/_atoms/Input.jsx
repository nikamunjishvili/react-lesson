import React from "react";
import { styled } from "styled-components";

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <Inputs
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;

const Inputs = styled.input`
  width: 100%;
  height: 7vh;
`
