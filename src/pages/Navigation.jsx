import React, { useEffect } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import NavButton from "../components/Buttons/NavButton";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [pageName, setPageName] = React.useState(localStorage.getItem("pageName") || "HOME");
  const [selectedPage, setSelectedPage] = React.useState(
    localStorage.getItem("selectedPage") || "HOME"
  );

  useEffect(() => {
    localStorage.setItem("pageName", pageName);
    localStorage.setItem("selectedPage", selectedPage);
  }, [pageName, selectedPage]);

  const getButtonColor = (page) => {
    return selectedPage === page ? "var(--warning-color)" : "var(--primary-color)";
  };
  return (
    <NavContainer>
      <HeaderContainer>
        <NavIcon>
          <HomeIcon />
        </NavIcon>
        <header>
          <p>{pageName}</p>
        </header>
      </HeaderContainer>
      <NavBar>
        <section>
          <NavButton
            isSelected={selectedPage === "HOME"}
            bgColor={true}
            rightBorder={"0px"}
            buttonWidth={"150px"}
          >
            <Link
              onClick={() => {
                setPageName("HOME");
                setSelectedPage("HOME");
              }}
              to="/"
            >
              HOME
            </Link>
          </NavButton>

          <NavButton
            isSelected={selectedPage === "ABOUT"}
            bgColor={true}
            rightBorder={"0px"}
            buttonWidth={"150px"}
          >
            <Link
              onClick={() => {
                setPageName("ABOUT");
                setSelectedPage("ABOUT");
              }}
              to="/About"
            >
              ABOUT
            </Link>
          </NavButton>

          <NavButton isSelected={selectedPage === "PORTFOLIO"} bgColor={true} buttonWidth={"260px"}>
            <Link
              onClick={() => {
                setSelectedPage("PORTFOLIO");
                setPageName("PORTFOLIO");
              }}
              to="/Portfolio"
            >
              PORTFOLIO
            </Link>
          </NavButton>
        </section>
        <NavButton className="empty" style={{ marginLeft: "6px" }}></NavButton>

        <div className="navEnd">
          <NavButton bgColor={true} style={{ marginLeft: "6px" }} buttonWidth={"150px"}>
            <Link to="/Admin">ADMIN</Link>
          </NavButton>
        </div>
      </NavBar>
    </NavContainer>
  );
};

export default Navigation;
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 920px;
  margin: 0 auto;
  a {
    display: flex;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: var(--dark-color);
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 6px;
  header {
    padding-left: 16px;
    padding-top: 8px;
    display: flex;
    align-items: start;
    justify-content: start;
    background-color: var(--dark-color);
    height: 85px;
    width: 100%;
    color: var(--bg-color);
    font-size: 40px;
  }
  p {
    font-size: 24px;
    font-weight: 600;
    height: inherit;
  }
`;

const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-color);
  height: 85px;
  width: 85px;
  svg {
    color: var(--bg-color);
    font-size: 66px;
  }
`;

const NavBar = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-shrink: 0;
  section {
    display: flex;
    justify-content: start;
    flex-direction: row;
  }
  & .navEnd {
    display: flex;
    justify-content: start;
    flex-direction: row;
  }
`;
