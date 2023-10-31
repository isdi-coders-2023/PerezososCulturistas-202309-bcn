import { CharacterStructure } from "../types";

interface CharacterContextStructure {
  characters: CharacterStructure[];
  loadCharacters: (characters: CharacterStructure[]) => void;
}

export default CharacterContextStructure;
