import React from "react";
import styled from "styled-components";

const Button = ({ children, icon }) => {
  return (
    <ButtonContainer>
      <PrimeButton>{children}</PrimeButton>
      <IconBox>{icon}</IconBox>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: var(--dark-color);

  svg {
    color: var(--bg-color);
    font-size: 34px;
  }
`;
const PrimeButton = styled.button`
  width: 225px;
  height: 45px;
  padding-left: 8px;
  text-align: start;
  font-family: var(--main-font);
  font-weight: 700;
  font-size: 18px;
  border: 3px solid var(--dark-color);
  color: var(--dark-color);
  background-color: var(--primary-color);
  transition: background-color 0.4s ease-out;
  cursor: pointer;
  &:hover {
    background-color: var(--secondary-color);
  }
  &:active {
    background-color: var(--warning-color);
  }
`;
