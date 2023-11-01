import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";
import CharactersList from "../CharactersList/CharactersList";

const App = (): React.ReactElement => {
  return (
    <>
      <AppStyled>
        <Header />
        <main className="main-content">
          <CharactersList />
        </main>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </AppStyled>
    </>
  );
};

export default App;
