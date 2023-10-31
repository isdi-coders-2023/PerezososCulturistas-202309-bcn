import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import CharactersContext from "./CharactersContext";
import { CharacterStructure } from "../types";

const CharactersProviderWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [characters, setCharacters] = useState<CharacterStructure[]>([]);

  const loadCharacters = useCallback((characters: CharacterStructure[]) => {
    setCharacters(characters);
  }, []);

  const charactersProviderValue = useMemo(
    () => ({ characters, loadCharacters }),
    [characters, loadCharacters],
  );

  return (
    <CharactersContext.Provider value={charactersProviderValue}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProviderWrapper;
