import { Link } from "react-router-dom";
import logo from "../assets/Fundacion.jpeg";

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white px-6 py-4 flex justify-between items-center shadow-md">

      {/* LOGO + NOMBRE */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo Fundación" className="w-10 h-10 object-contain" />
        <h1 className="text-lg font-bold">
          Fundación Belén
        </h1>
      </div>

      {/* LINKS */}
      <div className="space-x-6 hidden md:flex">
        <Link to="/" className="hover:text-gray-300">Inicio</Link>
        <Link to="/nosotros" className="hover:text-gray-300">Nosotros</Link>
        <Link to="/programas" className="hover:text-gray-300">Programas</Link>
        <Link to="/contacto" className="hover:text-gray-300">Contacto</Link>
      </div>

    </nav>
  );
};

export default Navbar;