import { useContext, useEffect } from "react";
import CharactersContext from "../../features/characters/store/CharactersContext";
import CharactersListStyled from "./CharactersListStyled";
import { charactersMock } from "../../mocks/charactersMock";

const CharactersList = (): React.ReactElement => {
  const { characters, loadCharacters } = useContext(CharactersContext);

  useEffect(() => {
    loadCharacters(charactersMock);
  }, [loadCharacters]);

  return (
    <CharactersListStyled>
      {characters.map((character) => (
        <li key={character.id}>
          <h2>{character.name}</h2>
        </li>
      ))}
    </CharactersListStyled>
  );
};

export default CharactersList;
