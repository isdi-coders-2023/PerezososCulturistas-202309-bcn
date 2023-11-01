import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    display: flex;
    justify-content: center;
    gap: 30px;
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-size: 25px;
  }

  .active {
    text-decoration: underline;
  }
`;

export default NavigationStyled;
