import styled from "styled-components";

const ErrorAuth = styled.span`
  color: red;
`;

const FormWrapper = styled.div`
  & > form {
    margin-top: 2rem;
    & > div {
      & > input {
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
        border-color: rgb(209, 213, 219);
        width: 100%;
        line-height: 1.25rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
    }
    & > div {
      & > button {
        margin-top: 1rem;
        position: relative;
        color: rgba(255, 255, 255);
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        background-color: rgba(79, 70, 229);
        border-width: 1px;
        border-radius: 0.375rem;
        width: 100%;
        & > span {
          position: absolute;
          content: "";
          left: 1rem;
        }
      }
    }
  }
`;

export { ErrorAuth, FormWrapper };
