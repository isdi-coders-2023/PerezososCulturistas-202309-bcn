import styled from "styled-components";

const LoadingStyled = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000c;

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;

    &--feedback {
      color: #fff;
      font-size: 40px;
      font-weight: 800;
    }
  }
`;

export default LoadingStyled;
