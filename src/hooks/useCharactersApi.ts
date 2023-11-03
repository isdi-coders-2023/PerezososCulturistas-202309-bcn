import { useCallback } from "react";
import { CharacterStructure } from "../features/characters/types";

const useCharactersApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getCharacters = useCallback(async () => {
    const response = await fetch(`${apiUrl}/characters?_limit=10`);
    const characters = (await response.json()) as CharacterStructure[];

    return characters;
  }, [apiUrl]);

  return { getCharacters };
};

export default useCharactersApi;
