import CharactersList from "../../components/CharactersList/CharactersList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  return (
    <HomePageStyled>
      <h2 className="page-title">Characters list</h2>
      <CharactersList />
    </HomePageStyled>
  );
};

export default HomePage;
