import React from "react";
import styled from "styled-components";
import pokeball from "../img/pokeball.jpeg";

const Nav = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Img = styled.img`
  width: 80px;
`;

const Navbar = () => {
  return (
    <div>
      <Nav>
        <Img src={pokeball} alt="Pokedex" />
      </Nav>
    </div>
  );
};

export default Navbar;
