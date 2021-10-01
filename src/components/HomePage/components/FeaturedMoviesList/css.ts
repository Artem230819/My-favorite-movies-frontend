import styled from "styled-components";

const MoviesWrapper = styled.ul`
  margin-top: 30px;
  display: flex;
  justify-content: ${({ theme }) => (theme.switchViewMovies ? "" : "center")};
  flex-direction: ${({ theme }) => (theme.switchViewMovies ? "column" : "row")};
  flex-wrap: wrap;
`;

const MovieList = styled.label`
  position: relative;
  box-sizing: border-box;
  padding: 15px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ theme }) => (theme.switchViewMovies ? "row" : "column")};
  align-items: center;
  margin-bottom: 20px;
  border: solid 3px green;
  max-width: ${({ theme }) => (theme.switchViewMovies ? "100%" : "300px")};
  width: 100%;
  background-color: ${({ theme }) =>
    theme.completed ? "rgba(0,0,0,.2)" : "none"};
  text-align: center;
  & > img {
    max-width: 200px;
    width: 100%;
    max-height: 300px;
    height: 100%;
  }
  & > span {
    font-weight: bold;
    font-size: 30px;
    height: 100px;
  }
  & > p {
    font-size: 18px;
    max-width: 40%;
  }
  & > div {
    align-self: normal;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: flex-end;
    & span {
      margin-right: 5px;
    }
    & input {
      cursor: pointer;
    }
    & i {
      cursor: pointer;
      position: ${({ theme }) => (theme.switchViewMovies ? "" : "absolute")};
      top: 10px;
      right: 10px;
    }
  }
`;

export { MoviesWrapper, MovieList };
