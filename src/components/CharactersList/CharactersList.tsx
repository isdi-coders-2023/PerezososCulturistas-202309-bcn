import { useContext, useEffect } from "react";
import CharactersContext from "../../features/characters/store/CharactersContext";
import CharactersListStyled from "./CharactersListStyled";
import useCharactersApi from "../../hooks/useCharactersApi";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharactersList = (): React.ReactElement => {
  const { characters, loadCharacters } = useContext(CharactersContext);
  const { getCharacters } = useCharactersApi();

  useEffect(() => {
    (async () => {
      const characters = await getCharacters();

      loadCharacters(characters);
    })();
  }, [loadCharacters, getCharacters]);

  return (
    <CharactersListStyled>
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </CharactersListStyled>
  );
};

export default CharactersList;
