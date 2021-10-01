import styled from "styled-components";

const HomeWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  h1 {
    text-align: center;
    font-size: 20px;
  }
`;

const HomeUserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

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
const SwitchList = styled.span`
  background-color: ${({ theme }) => (theme.switchViewMovies ? "blue" : "")};
`;
const SwitchBlock = styled.span`
  background-color: ${({ theme }) => (theme.switchViewMovies ? "" : "blue")};
`;

export { HomeWrapper, SwitchBtnWrapper, SwitchList, SwitchBlock, HomeUserBox };
