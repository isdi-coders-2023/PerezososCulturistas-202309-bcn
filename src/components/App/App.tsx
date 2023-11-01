import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
