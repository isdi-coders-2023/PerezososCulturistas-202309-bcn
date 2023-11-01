import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.typography.mainFont};
  border: 1px solid #000;
  border-radius: 14px;
  padding: 8px 16px;
  width: 300px;
  height: 40px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 800;
  justify-content: center;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
`;

export default ButtonStyled;
