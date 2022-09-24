import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Trocas from "./pages/Trocas/Trocas";
import Chat from "./pages/Chat/Chat";

export function MainRoutes(){

   return( 
   <BrowserRouter>

    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/trocas" element={<Trocas/>}/>
    <Route path="/chat" element={<Chat/>}/>

    </Routes>

    </BrowserRouter>
)  
}