import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Programas from "../pages/Programas";
import Videos from "../pages/Videos";
import Donaciones from "../pages/Donaciones";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/programas" element={<Programas />} />
      <Route path="/videos" element={<Videos />} />      
      <Route path="/donaciones" element={<Donaciones />} /> 
    </Routes>
  );
};




export default AppRouter;