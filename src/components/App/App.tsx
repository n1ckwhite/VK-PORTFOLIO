import React from 'react';
import styleApp from  './App.module.css';
import {Route, Routes} from "react-router-dom";
import cn from 'classnames'
import {MainPage} from "../../pages/MainPage/MainPage";
import {Header} from "../Header/Header";
import {Menu} from "../Menu/Menu";
export const App = () => {
  return (
    <div data-theme="light" className={cn(styleApp.div,"container")}>
        <Header/>
        <div className={styleApp.main}>
            <Menu/>
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="*" element={<h1>Error</h1>}/>
      </Routes>
    </div>
    </div>
  );
}

