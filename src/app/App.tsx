import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {PhotoPage} from "../pages/PhotoPage";
import {ContactPage} from "../pages/ContactPage";
import {VideoPage} from "../pages/VideoPage";
import {NavBarCustom} from "../widgets/NavBarCustom/NavBarCustom";



function App() {
  return (
    <>
        <NavBarCustom/>
        <Routes>
            <Route path={"/ksyshsnimay"} element={<MainPage/>}/>
            <Route path={"/photo"} element={<PhotoPage/>}/>
            <Route path={"/video"} element={<VideoPage/>}/>
            <Route path={"/contact"} element={<ContactPage/>}/>
        </Routes>
    </>
  );
}

export default App;
