import Header from "../Header/Header";
import AppStyled from "./AppStyled";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <>
      <AppStyled>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" />
            <main className="main-content"></main>
          </Routes>
        </BrowserRouter>
      </AppStyled>
    </>
  );
};

export default App;
