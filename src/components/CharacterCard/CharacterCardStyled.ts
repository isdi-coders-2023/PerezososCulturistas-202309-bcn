import styled from "styled-components";

const CharacterCardStyled = styled.article`
  background-color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.typography.mainFont};
  border-radius: 15px;
  width: 332px;
  height: 545px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 25px #00000080;
  padding: 20px;

  .character-card {
    padding: 10px;
    display: flex;

    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__name {
      font-size: 32px;
      font-weight: 800;
      margin-top: 20px;
    }

    &__details {
      font-size: 16px;
    }

    &__image {
      object-fit: contain;
    }
  }

  @media (max-width: 320px) {
    width: 220px;
  }
`;

export default CharacterCardStyled;
