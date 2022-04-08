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

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <Container>
      <Button className="arrow" onClick={onLeftClick}>
        <FontAwesomeIcon icon="fa-caret-left" size="lg" />
      </Button>
      <div>
        {page} de {totalPages}
      </div>
      <Button className="arrow" onClick={onRightClick}>
        <FontAwesomeIcon icon="fa-caret-right" size="lg" />
      </Button>
    </Container>
  );
};

export default Pagination;
