import { Link } from "react-router-dom";
import {
  FaBell,
  FaCircle,
  FaCog,
  FaFileAlt,
  FaHeart,
  FaHome,
  FaLaptopCode,
  FaSearch,
  FaShoppingBag,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
// import { useAuthStore } from "../../hooks";

const SideAuthItems = ({ toggleMenu }) => {
  // const { startLogout } = useAuthStore();

  return (
    <div>
      <ul className="p-3 border-b">
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link to="/" className="flex items-center gap-3 p-3 text-xl">
            <FaHome />
            Inicio
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link to="buscar?" className="flex items-center gap-3 p-3 text-xl">
            <FaSearch />
            Buscar
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link
            to="notificaciones"
            className="flex items-center justify-between gap-3 p-3 text-xl">
            <div className="flex items-center gap-3">
              <FaBell />
              Notificaciones
            </div>
            <div className=" flex text-alerts-500 items-center pr-3 justify-center text-3xl relative">
              <FaCircle />
              <span className="text-sm absolute mx-auto text-white">5</span>
            </div>
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link to="mis-cursos" className="flex items-center gap-3 p-3 text-xl">
            <FaLaptopCode />
            Mi aprendizaje
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link
            to="mis-compras"
            className="flex items-center gap-3 p-3 text-xl">
            <FaShoppingBag />
            Mis compras
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link
            to="lista-de-deseos"
            className="flex items-center gap-3 p-3 text-xl">
            <FaHeart />
            Deseos
          </Link>
        </li>

        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link to="mi-cuenta" className="flex items-center gap-3 p-3 text-xl">
            <FaUserCircle />
            Mi cuenta
          </Link>
        </li>

        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link to="soporte" className="flex items-center gap-3 p-3 text-xl">
            <FaCog />
            Soporte técnico
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link
            to="facturacion"
            className="flex items-center gap-3 p-3 text-xl">
            <FaFileAlt />
            Facturación
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}>
          <Link
            to="/"
            // onClick={startLogout}
            className="flex items-center gap-3 p-3 text-xl">
            <FaSignOutAlt />
            Salir
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideAuthItems;
