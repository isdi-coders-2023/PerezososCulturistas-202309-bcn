import { PropsWithChildren, useMemo, useState } from "react";
import CharactersContext from "./CharactersContext";
import { CharacterStructure } from "../types";

const CharactersProviderWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [characters] = useState<CharacterStructure[]>([]);

  const charactersProviderValue = useMemo(() => ({ characters }), [characters]);

  return (
    <CharactersContext.Provider value={charactersProviderValue}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProviderWrapper;
