import { CharacterStructure } from "../features/characters/types";
import useCharactersApi from "./useCharactersApi";

describe("Given a useCharactersApi custom hook", () => {
  describe("When it calls the url 'https://kame-kame-cloud-api.onrender.com/characters?_limit=10'", () => {
    test("Then it should a list of DragonBall characters", async () => {
      const expectedCharacters: CharacterStructure[] = [
        {
          id: 4,
          name: "Frieza",
          description:
            "Frieza (フリーザ Furīza) is the de facto ruler of Universe 7 and a powerful alien overlord. Frieza is a Frost Demon with no specified planet of origin, and he is male.",
          picture:
            "https://static.wikia.nocookie.net/villains/images/5/5d/Frieza.png/revision/latest?cb=20200625063534",
          race: "Frost Demon",
          planet: "Coldoria",
          gender: "Male",
        },
        {
          id: 5,
          name: "Gohan",
          description:
            "Son Gohan (孫そん悟ご飯はん Son Gohan) is the elder son of the series' primary protagonist Goku and his wife Chi-Chi. Gohan is a Saiyan-Human hybrid, with his Saiyan heritage coming from his father. He is from Earth, and he is male.",
          picture:
            "https://static.wikia.nocookie.net/dragonball/images/9/9a/Son_Gohan_en_Super_Hero.png/revision/latest?cb=20211227034049&path-prefix=es",
          race: "Saiyan-Human Hybrid",
          planet: "Earth",
          gender: "Male",
        },
      ];

      const { getCharacters } = useCharactersApi();

      const currentCharacters = await getCharacters();

      expect(currentCharacters).toStrictEqual(expectedCharacters);
    });
  });
});
