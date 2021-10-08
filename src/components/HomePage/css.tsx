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

const ToolBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > button {
    border: 2px solid green;
    :hover {
      background-color: red;
    }
  }
`;



export { HomeWrapper, ToolBox, HomeUserBox };
