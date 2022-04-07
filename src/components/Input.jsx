import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  placeholder: "Buscar pokemon...",
  type: "text",
}))`
  padding: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;
  color: #444;

  &::placeholder {
    color: #777;
  }

  &:focus {
    outline: none;
  }
`;

export default Input;
