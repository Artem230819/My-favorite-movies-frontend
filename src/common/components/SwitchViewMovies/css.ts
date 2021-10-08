import styled from "styled-components";

const SwitchBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  & > span {
    cursor: pointer;
    margin-right: 5px;
    padding: 5px;
    border: solid 1px black;
    background-color: ${({ theme }) =>
      theme.switchViewMovies ? "blue" : "column"};
  }
`;
const SwitchRow = styled.span`
  background-color: ${({ theme }) => (theme.switchViewMovies ? "blue" : "")};
`;
const SwitchColumn = styled.span`
  background-color: ${({ theme }) => (theme.switchViewMovies ? "" : "blue")};
`;

export { SwitchBtnWrapper, SwitchRow, SwitchColumn };
