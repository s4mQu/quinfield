import React from "react";
import styled from "styled-components";
import Popcard from "../components/Popcard/Popcard";
import GridPage from "../components/Grid/GridPage";
import NavButton from "../components/Buttons/NavButton";
import { Height } from "@mui/icons-material";
const Home = () => {
  return (
    <HomeContainer>
      <StyledPopcard cardName="HOME CONTENT">
        <p>THIS SHOULD LST SOME ICONS THAT POPUP A MODAL</p>
        <GridPage gridHeight={"180px"} />
        <NavButton fontSize={"18px"} buttonWidth={"150px"} buttonHeight={"30px"}>
          ADD
        </NavButton>
      </StyledPopcard>
    </HomeContainer>
  );
};

export default Home;

const StyledPopcard = styled(Popcard)`
  width: 100%;
  margin-top: 6px;
  border-left: none;
  border-right: none;
  border-bottom: none;
  header {
    border-right: solid 3px var(--dark-color);
  }
`;

const HomeContainer = styled.div`
  max-width: 920px;
  p:nth-child(2) {
    border-left: 3px solid var(--dark-color);
    border-right: 3px solid var(--dark-color);
    font-size: 16px;
    font-weight: 400;
    padding-left: 6px;
    padding-bottom: 6px;
    padding-top: 6px;
  }
`;
