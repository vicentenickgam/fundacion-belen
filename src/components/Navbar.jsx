import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Fundacion.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white border-b-2 border-white pb-1"
      : "hover:text-gray-300";

  return (
    <nav className="bg-green-800 text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">

      <div className="flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo Fundación"
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
          />
          <h1 className="text-lg font-bold">
            Fundación Belén
          </h1>
        </div>

        {/* MENU DESKTOP */}
        <div className="space-x-6 hidden md:flex">
          <NavLink to="/" className={linkClass}>Inicio</NavLink>
          <NavLink to="/nosotros" className={linkClass}>Nosotros</NavLink>
          <NavLink to="/programas" className={linkClass}>Programas</NavLink>
          <NavLink to="/videos" className={linkClass}>Videos</NavLink>
          <NavLink to="/donaciones" className={linkClass}>Donar</NavLink>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MÓVIL */}
      {open && (
        <div className="flex flex-col mt-4 space-y-4 md:hidden bg-green-700 p-4 rounded-lg">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Inicio</NavLink>
          <NavLink to="/nosotros" className={linkClass} onClick={() => setOpen(false)}>Nosotros</NavLink>
          <NavLink to="/programas" className={linkClass} onClick={() => setOpen(false)}>Programas</NavLink>
          <NavLink to="/videos" className={linkClass} onClick={() => setOpen(false)}>Videos</NavLink>
        </div>
      )}

    </nav>
  );
};

export default Navbar;