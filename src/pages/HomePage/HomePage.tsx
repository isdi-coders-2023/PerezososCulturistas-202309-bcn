import CharactersList from "../../components/CharactersList/CharactersList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  return (
    <HomePageStyled>
      <section>
        <h2 className="page-title">Characters list</h2>
        <CharactersList />
      </section>
    </HomePageStyled>
  );
};

export default HomePage;
