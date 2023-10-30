import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>path= "/" element={<Navigate to="home" />}</Route>
        <div />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
