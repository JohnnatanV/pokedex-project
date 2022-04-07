import React from "react";
import styled from "styled-components";
import Button from "./Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Pagination = () => {
  return (
    <Container>
      <Button className="arrow">
        <FontAwesomeIcon icon="fa-caret-left" size="lg" />
      </Button>
      <div>1 de 100</div>
      <Button className="arrow">
        <FontAwesomeIcon icon="fa-caret-right" size="lg" />
      </Button>
    </Container>
  );
};

export default Pagination;
