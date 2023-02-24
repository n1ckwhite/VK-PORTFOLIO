import React from "react";
import styleApp from "./App.module.css";
import { Route, Routes, HashRouter, useLocation } from "react-router-dom";
import cn from "classnames";
import { MainPage } from "../../pages/MainPage/MainPage";
import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import { HardsPage } from "../../pages/HardsPage/HardsPage";
export const App = () => {
  const location = useLocation()
  const background = location.state && location?.state?.background
  return (
    <div className={cn(styleApp.div, "container")}>
      <Header />
      <div className={styleApp.main}>
        <Menu />
        <HashRouter>
        <Routes location={background || location}>
          <Route path="/" element={<MainPage />} />
          <Route path="/hards" element={<HardsPage />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
        </HashRouter>
      </div>
    </div>
  );
};
