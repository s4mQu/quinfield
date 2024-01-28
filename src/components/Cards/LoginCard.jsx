import React from "react";
import styled from "styled-components";
import Button from "../Buttons/Button";
import ForwardIcon from "@mui/icons-material/Forward";
import Popcard from "../Popcard/Popcard";
import InputBar from "../Input/InputBar";
function LoginCard() {
  return (
    <Popcard cardName="LOGIN">
      <LoginCardContent>
        <InputBar inputTitle="USERNAME" inputType="text" />
        <InputBar inputTitle="PASSWORD" inputType="password" />
        <Button icon={<ForwardIcon />}>LOGIN</Button>
      </LoginCardContent>
    </Popcard>
  );
}

export default LoginCard;
const LoginCardContent = styled.div`
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 33px;
`;
