import { CharacterStructure } from "../../features/characters/types";

interface CharacterProps {
  character: CharacterStructure;
}
const CharacterCard = ({
  character: { name, picture, race },
}: CharacterProps): React.ReactElement => {
  return (
    <div className="character-card">
      <div className="character-card__info">
        <img className="" src={picture} alt={name} width="" height="" />
        <h2 className="character-card__name">{name}</h2>
        <dl className="character-card__details">
          <dd>{race}</dd>
        </dl>
      </div>
    </div>
  );
};

export default CharacterCard;
