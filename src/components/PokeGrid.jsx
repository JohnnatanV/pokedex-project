import styled from "styled-components";

const PokeGrid = styled.div`
  width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-content: center;
  justify-items: center;
  gap: 5px 5px;
  margin-bottom: 40px;
`;

export default PokeGrid;
