import styled from "styled-components";
import Pagination from "./Pagination";

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

const Header = (props) => {
  const { page, setPage, total } = props;

  const lastPage = () => setPage(Math.max(page - 1, 0));
  const nextPage = () => setPage(Math.min(page + 1, total));

  return (
    <Heading>
      <h1>Pokedex</h1>
      <Pagination
        page={page + 1}
        totalPages={total}
        onLeftClick={() => lastPage()}
        onRightClick={() => nextPage()}
      />
    </Heading>
  );
};

export default Header;
