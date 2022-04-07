import styled from "styled-components";
import Pagination from "./Pagination";

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

const Header = () => {
  return (
    <Heading>
      <h1>Pokedex</h1>
      <Pagination />
    </Heading>
  );
};

export default Header;
