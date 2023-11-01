import { useContext } from "react";
import CharactersContext from "../../features/characters/store/CharactersContext";
import CharactersListStyled from "./CharactersListStyled";

const CharactersList = (): React.ReactElement => {
  const { characters } = useContext(CharactersContext);

  return (
    <CharactersListStyled>
      <ul className="characters-list">
        {characters.map((character) => (
          <li key={character.id}>
            <h2>{character.name}</h2>
          </li>
        ))}
      </ul>
    </CharactersListStyled>
  );
};

export default CharactersList;
