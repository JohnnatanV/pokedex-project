import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  background-color: #363636;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 50%;
  height: 100%;
  cursor: pointer;

  &.arrow {
    padding: 10px 15px;
    margin: 0 5px;
  }
`;

export default Button;
