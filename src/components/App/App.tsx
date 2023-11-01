import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main className="main-content"></main>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
