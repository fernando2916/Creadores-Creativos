import { Link } from "react-router-dom";

import {
  FaFileAlt,
  FaHome,
  FaMailBulk,
  FaShoppingBag,
  FaBook,
  FaVideo,
} from "react-icons/fa";
import { ListItem } from "../ui/ListItem";
import { company, servicios } from "./NavItems";

const SideItems = ({ onClick: toggleMenu }) => {
  const today = new Date();
  const reserv = today.getFullYear();
  return (
    <div className="">
      <ul className="p-2 border-b">
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link
            to="/"
            className="flex items-center gap-3 p-3 rounded-lg text-lg">
            <FaHome />
            Inicio
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link
            to="mis-compras"
            className="flex items-center gap-3 p-3 rounded-lg text-lg">
            <FaShoppingBag />
            Mis Compras
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link
            to="contacto"
            className="flex items-center gap-3 p-3 rounded-lg text-lg">
            <FaMailBulk />
            Contacto
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link
            to="facturacion"
            className="flex items-center gap-3 p-3 rounded-lg text-lg">
            <FaFileAlt />
            Facturación
          </Link>
        </li>
        <li
          onClick={toggleMenu}
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all">
          <Link to="/blog" className="flex items-center gap-3 p-3 text-xl">
            <FaBook />
            Blog
          </Link>
        </li>
        <li
          onClick={toggleMenu}
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all">
          <Link to="/tienda" className="flex items-center gap-3 p-3 text-xl">
            <FaShoppingBag />
            Tienda
          </Link>
        </li>
        <li
          onClick={toggleMenu}
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all">
          <Link
            to="#Cursos"
            className="flex opacity-50 line-through items-center gap-3 p-3 text-xl">
            <FaVideo />
            Cursos
          </Link>
        </li>
      </ul>
      <ul className="p-2 border-b">
        <div className="flex items-center justify-start pl-7 text-gray-300 gap-3">
          <span className="">Nuestros Servicios</span>
        </div>
        {servicios.map((item) => (
          <ListItem
            onClick={toggleMenu}
            key={item.name}
            href={item.href}
            Name={item.name}
            IconBase={item.icon}
          />
        ))}
      </ul>
      <ul className="p-2 border-b">
        <div className="flex items-center justify-start pl-7 text-gray-300 gap-3">
          <span className="">Más de Emprendedores</span>
        </div>
        {company.map((item) => (
          <ListItem
            onClick={toggleMenu}
            href={item.href}
            key={item.name}
            Name={item.name}
            IconBase={item.icon}
          />
        ))}
      </ul>
      <ul className="p-2">
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link to="/" className="text-sm text-link-100 font-semibold">
            Emprendedores Creativos &copy; {""}
          </Link>
          <span className="text-sm font-semibold">
            {reserv} Todos los derechos reservados.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SideItems;
