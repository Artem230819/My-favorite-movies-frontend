import styled from "styled-components";

const MoviesWrapper = styled.ul`
  margin-top: 30px;
  display: flex;
  justify-content: ${({ theme }) => (theme.switchViewMovies ? "" : "center")};
  flex-direction: ${({ theme }) => (theme.switchViewMovies ? "column" : "row")};
  flex-wrap: wrap;
`;

const MovieCard = styled.li`
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  max-width: ${({ theme }) => (theme.switchViewMovies ? "100%" : "300px")};
  width: 100%;
  border: solid 3px green;
  background-color: ${({ theme }) =>
    theme.completed || theme.disable ? "rgba(0,0,0,.2)" : "none"};
  & > label {
    display: flex;
    justify-content: space-between;
    flex-direction: ${({ theme }) =>
      theme.switchViewMovies ? "row" : "column"};
    align-items: center;
    text-align: center;
    width: 100%;
    i {
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
      display: block;
    }
    & > img {
      max-width: 200px;
      width: 100%;
      max-height: 300px;
      height: 100%;
    }
    & > span {
      font-weight: bold;
      font-size: 30px;
    }
    & > p {
      font-size: 18px;
      max-width: 40%;
    }
    & > div {
      align-self: flex-end;
      & span {
        margin-right: 5px;
      }
      & input {
        cursor: pointer;
      }
    }
  }
`;

export { MoviesWrapper, MovieCard };
