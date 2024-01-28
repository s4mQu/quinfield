import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
const Popcard = ({ children, cardName, style, className }) => {
  return (
    <PopcardContainer className={className} style={style}>
      <CardTitle>
        <_CardName>
          <p>{cardName}</p>
        </_CardName>
        <CardClose>
          <CloseIcon />
        </CardClose>
      </CardTitle>
      {children}
    </PopcardContainer>
  );
};

export default Popcard;

const PopcardContainer = styled.div`
  width: 358px;
  /* height: 380px; */
  border: 3px solid var(--dark-color);
`;
const CardTitle = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 28px;
  color: var(--bg-color);
`;
const _CardName = styled.div`
  padding-left: 8px;
  height: 100%;
  width: 220px;
  background-color: var(--dark-color);
`;
const CardClose = styled.div`
  padding-left: 1px;
  background-color: var(--dark-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  width: 26px;
  svg {
    font-size: 24px;
    color: var(--bg-color);
  }
`;
