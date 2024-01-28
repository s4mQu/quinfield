import React from "react";
import styled from "styled-components";

const NavButton = ({
  children,
  buttonWidth,
  rightBorder,
  bgColor,
  isSelected,
  fontSize,
  buttonHeight,
  style,
}) => {
  return (
    <ButtonNavContainer style={style} buttonWidth={buttonWidth}>
      <ButtonNav
        fontSize={fontSize}
        buttonHeight={buttonHeight}
        ButtonNav
        isSelected={isSelected}
        bgColor={bgColor}
        rightBorder={rightBorder}
      >
        {children}
      </ButtonNav>
      <ButtonFooter />
    </ButtonNavContainer>
  );
};

export default NavButton;

const ButtonNavContainer = styled.div`
  width: ${(props) => props.buttonWidth || "100%"};
`;

const ButtonNav = styled.div`
  font-size: ${(props) => props.fontSize || "18px"};
  padding-left: 6px;
  height: ${(props) => props.buttonHeight || "60px"};
  border: 3px solid var(--dark-color);

  background-color: ${(props) =>
    props.isSelected
      ? "var(--warning-color)"
      : props.bgColor
      ? "var(--primary-color)"
      : "var(--bg-color)"};
  border-bottom: 0px;
  border-right: 3px solid var(--dark-color);
  border-right: ${(props) => props.rightBorder || "3px solid var(--dark-color)"};
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: var(--secondary-color);
  }
  &:active {
    background-color: var(--warning-color);
  }
`;
const ButtonFooter = styled.div`
  height: 18px;
  /* width: 100%; */
  background-color: var(--dark-color);
`;
