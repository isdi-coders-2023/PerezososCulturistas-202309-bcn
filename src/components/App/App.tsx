import Header from "../Header/Header";
import AppStyled from "./AppStyled";
import { Routes, Route } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <>
      <AppStyled>
        <Header />
        <main className="main-content"></main>
        <Routes>
          <Route path="/" />
        </Routes>
      </AppStyled>
    </>
  );
};

export default App;
