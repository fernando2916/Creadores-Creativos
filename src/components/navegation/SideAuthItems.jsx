import { Link } from "react-router-dom";
import {
  FaBell,
  FaBook,
  FaBriefcase,
  FaCamera,
  FaChalkboardTeacher,
  FaCircle,
  FaCog,
  FaDownload,
  FaFileAlt,
  FaHeart,
  FaHome,
  FaInfoCircle,
  FaLaptopCode,
  FaMailBulk,
  FaNewspaper,
  FaPen,
  FaPrint,
  FaShoppingBag,
  FaSignOutAlt,
  FaVideo,
  // FaUserCircle,
} from "react-icons/fa";
// import { useAuthStore } from "../../hooks";

const SideAuthItems = ({ onClick: toggleMenu }) => {
  // const { startLogout } = useAuthStore();
    const today = new Date();
  const reserv = today.getFullYear();

  return (
    <div>
      <ul className="p-3 border-b">
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link to="/" className="flex items-center gap-3 p-3 text-lg">
            <FaHome />
            Inicio
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
            to="/Cursos"
            className="flex items-center gap-3 p-3 text-xl">
            <FaVideo />
            Cursos
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            to="notificaciones"
            className="flex items-center justify-between gap-3 p-3 text-lg"
          >
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
          onClick={toggleMenu}
        >
          <Link to="mis-cursos" className="flex items-center gap-3 p-3 text-lg">
            <FaLaptopCode />
            Mi aprendizaje
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            to="mis-compras"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaShoppingBag />
            Mis compras
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            to="lista-de-deseos"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaHeart />
            Lista de deseos
          </Link>
        </li>

        {/* <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link to="mi-cuenta" className="flex items-center gap-3 p-3 text-lg">
            <FaUserCircle />
            Mi cuenta
          </Link>
        </li> */}
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            to="facturacion"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaFileAlt />
            Facturación
          </Link>
        </li>
         <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link to="soporte" className="flex items-center gap-3 p-3 text-lg">
            <FaCog />
            Soporte técnico
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            to="/"
            // onClick={startLogout}
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaSignOutAlt />
            Salir
          </Link>
        </li>
      </ul>
      <ul className="p-3 border-b">
        <div className="flex items-center justify-start pl-7 text-gray-300 gap-3">
          <span className="">Nuestros Servicios</span>
        </div>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link to="/diseño-grafico" className="flex items-center gap-3 p-3 text-lg">
            <FaPen />
            Diseño Gráfico
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link to="/fotografia" className="flex items-center gap-3 p-3 text-lg">
            <FaCamera />
            Fotografía
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link to="/diseño-y-desarrollo-web" className="flex items-center gap-3 p-3 text-lg">
            <FaLaptopCode />
            Diseño y Desarrollo Web
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link to="/impresion" className="flex items-center gap-3 p-3 text-lg">
            <FaPrint />
           Impresión
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link to="/asesorias" className="flex items-center gap-3 p-3 text-lg">
            <FaChalkboardTeacher />
           Asesorias
          </Link>
        </li>
      </ul>
      <ul className="p-3 border-b">
        <div className="flex items-center justify-start pl-7 text-gray-300 gap-3">
          <span className="">Más de Emprendedores</span>
        </div>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link to="/sobre-nosotros" className="flex items-center gap-3 p-3 text-lg">
            <FaInfoCircle />
            Sobre Nosotros
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link to="/contacto" className="flex items-center gap-3 p-3 text-lg">
            <FaMailBulk />
            Contacto
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link to="/Recursos" className="flex items-center gap-3 p-3 text-lg">
            <FaDownload />
            Recursos
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link to="/bolsa-de-trabajo" className="flex items-center gap-3 p-3 text-lg">
            <FaBriefcase />
            Vacantes
          </Link>
        </li>
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link to="/responsabilidad-social" className="flex items-center gap-3 p-3 text-lg">
            <FaNewspaper />
            Responsabilidad Social
          </Link>
        </li>
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

export default SideAuthItems;
