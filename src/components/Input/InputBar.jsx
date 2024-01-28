import React, { useState } from "react";
import styled from "styled-components";

const InputBar = ({ inputTitle, inputType }) => {
  return (
    <InputContainer>
      <_InputTitle>{inputTitle}</_InputTitle>
      <input type={inputType} />
    </InputContainer>
  );
};

export default InputBar;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  width: 270px;
  input {
    font-weight: 700;
    font-size: 18px;
    height: 45px;
    padding-left: 8px;
    border: 3px solid var(--dark-color);
    background-color: var(--bg-color);
    font-family: var(--main-font);
    &:focus {
      outline: none;
    }
  }
  input[type="password"] {
    font-size: 30px;
  }
`;
const _InputTitle = styled.div`
  display: flex;
  align-content: center;
  padding-left: 8px;
  padding-top: 2px;
  color: var(--bg-color);
  height: 26px;
  width: 140px;
  background-color: var(--dark-color);
`;
