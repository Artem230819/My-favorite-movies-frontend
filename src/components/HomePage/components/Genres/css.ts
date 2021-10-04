import styled from "styled-components";

const GenreWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const GenreList = styled.li`
  padding: 10px;
  border: ${({ theme }) => (theme.choice ? "2px solid black" : "none")};
  width: 15%;
  text-align: center;
  margin: 5px;
  cursor: pointer;
`;

export { GenreWrapper, GenreList };
