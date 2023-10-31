import { createContext } from "react";
import CharacterContextStructure from "./types";

const CharactersContext = createContext<CharacterContextStructure>(
  {} as CharacterContextStructure,
);

export default CharactersContext;
