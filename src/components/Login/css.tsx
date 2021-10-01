import styled from "styled-components";

const WrapperAuth = styled.div`
  position: relative;
  & > div {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding-top: 150px;
    & > div {
      max-width: 500px;
      width: 100%;
      margin: 0 auto;
      & > div {
        text-align: center;
        & > h2 {
          margin-top: 5px;
          font-size: 30px;
        }
      }
    }
  }
`;
export { WrapperAuth };
