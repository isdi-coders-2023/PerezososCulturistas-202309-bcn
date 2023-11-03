import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";
import Loading from "../Loading/Loading";
import { useContext } from "react";
import UiContext from "../../features/ui/store/UiContext";

const App = (): React.ReactElement => {
  const { isLoading } = useContext(UiContext);

  return (
    <AppStyled>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
      {isLoading && <Loading />}
    </AppStyled>
  );
};

export default App;
