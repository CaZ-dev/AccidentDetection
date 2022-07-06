import React, { useState } from "react";
import gps from "../assets/gps.svg";
import current from "../assets/current.svg";
import location from "../assets/location.svg";
import about from "../assets/about.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;
const SidebarConatiner = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;
const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  padding: 2rem 0;
  position: absolute;
  top: 4rem;
  left: 0;
  width: ${(props) => (props.clicked ? "13rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;
const Item = styled.li`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1.5rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;
const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  white-space: nowrap;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;
const Container = styled.div`
  position: fixed;
  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Sidebar = () => {
  const navigate = useNavigate();
  const [click, setclick] = useState(false);
  const handdleClick = () => setclick(!click);

  return (
    <Container>
      <Button clicked={click} onClick={() => handdleClick()}>
        Click
      </Button>
      <SidebarConatiner>
        <Logo>
          <img src={gps} alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Item onClick={() => navigate("/")}>
            <img src={current} alt="Current" />
            <Text clicked={click}>Live Location</Text>
          </Item>
          <Item onClick={() => navigate("/location")}>
            <img src={location} alt="Location" />
            <Text clicked={click}>Current Location</Text>
          </Item>
          <Item onClick={() => navigate("/about")}>
            <img src={about} alt="About" />
            <Text clicked={click}>About Us</Text>
          </Item>
        </SlickBar>
      </SidebarConatiner>
    </Container>
  );
};

export default Sidebar;
