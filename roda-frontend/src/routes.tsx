import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Trocas from "./pages/Trocas/Trocas";
import Chat from "./pages/Chat/Trocas";

function MainRoutes(){

    <BrowserRouter>

    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/trocas" element={<Trocas/>}/>

    </Routes>

    </BrowserRouter>

}