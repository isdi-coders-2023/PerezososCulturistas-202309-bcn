import { CharacterStructure } from "../../features/characters/types";
import CharacterCardStyled from "./CharacterCardStyled";

interface CharacterProps {
  character: CharacterStructure;
}
const CharacterCard = ({
  character: { name, picture, race },
}: CharacterProps): React.ReactElement => {
  return (
    <CharacterCardStyled className="character-card">
      <div className="character-card__info">
        <img
          className="character-card__image"
          src={picture}
          alt={name}
          width="216"
          height="363"
        />
        <h2 className="character-card__name">{name}</h2>
        <ul className="character-card__details">
          <li>{race}</li>
        </ul>
      </div>
    </CharacterCardStyled>
  );
};

export default CharacterCard;
