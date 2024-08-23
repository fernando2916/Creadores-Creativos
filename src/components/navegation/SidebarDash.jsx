
import { useAuthStore } from "@/hooks";
import {
  FaTimes,
  FaBars,
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
  FaUser,
  FaAngleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export const SidebarDash = ({ onClick: toggleMenu,
  showMenu: showMenu }) => {
  const today = new Date();
  const reserv = today.getFullYear();
  const {user, startLogout} = useAuthStore()
  return (
    <>
      <div>
        <button
          className=" bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-3 rounded-md outline-none"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
      </div>
      {/* contenido */}
      <div
        className={`w-full bg-nav-950/60 fixed inset-0 z-50 duration-150 ease-out justify-start items-end 
            ${showMenu ? "left-0" : "-left-full"}`}
      >
        <button
          className=" bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-3 rounded-md outline-none absolute top-5 right-5"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>
        <div
          className={`w-3/4 h-full bg-nav-900 fixed transition-all duration-150 justify-between overflow-y-scroll ease-out 
              ${showMenu ? "left-0" : "-left-full"}`}
        >
          <div className="flex h-32 p-5 items-center gap-3 py-3 bg-nav-800">
            <div className="rounded-full">
              <FaUser className="text-3xl" />
            </div>
            <div>
              <div className=" capitalize flex gap-2">
              <span className="text-2xl">{user.name} {user.last_name}</span>
                </div>              
              <div className="flex items-center gap-1">
                <Link to="mi-cuenta" className="flex items-center gap-1" onClick={toggleMenu}>
                  <span className="text-base text-link-400">Mi Cuenta</span>
                  <FaAngleRight className="text-link-500 font-medium text-lg" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <ul className="p-3 border-b">
              <li
                className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
                onClick={toggleMenu}
              >
                <Link href="/" className="flex items-center gap-3 p-3 text-lg">
                  <FaHome />
                  Inicio
                </Link>
              </li>
              <li
                onClick={toggleMenu}
                className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
              >
                <Link
                  to="/blog"
                  className="flex items-center gap-3 p-3 text-xl"
                >
                  <FaBook />
                  Blog
                </Link>
              </li>
              <li
                onClick={toggleMenu}
                className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
              >
                <Link
                  to="/tienda"
                  className="flex items-center gap-3 p-3 text-xl"
                >
                  <FaShoppingBag />
                  Tienda
                </Link>
              </li>
              <li
                onClick={toggleMenu}
                className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
              >
                <Link
                  to="/cursos"
                  className="flex items-center gap-3 p-3 text-xl"
                >
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
                    <span className="text-sm absolute mx-auto text-white">
                      5
                    </span>
                  </div>
                </Link>
              </li>
              <li
                className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
                onClick={toggleMenu}
              >
                <Link
                  to="mis-cursos"
                  className="flex items-center gap-3 p-3 text-lg"
                >
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
                  to="/facturacion"
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
                <Link
                  to="/soporte"
                  className="flex items-center gap-3 p-3 text-lg"
                >
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
                  onClick={startLogout}
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
                <Link
                  to="/diseno-grafico"
                  className="flex items-center gap-3 p-3 text-lg"
                >
                  <FaPen />
                  Diseño Gráfico
                </Link>
              </li>
              <li
                className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
                onClick={toggleMenu}
              >
                <Link
                  to="/fotografia"
                  className="flex items-center gap-3 p-3 text-lg"
                >
                  <FaCamera />
                  Fotografía
                </Link>
              </li>
              <li
                className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
                onClick={toggleMenu}
              >
                <Link
                  to="/diseno-y-desarrollo-web"
                  className="flex items-center gap-3 p-3 text-lg"
                >
                  <FaLaptopCode />
                  Diseño y Desarrollo Web
                </Link>
              </li>
              <li
                className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
                onClick={toggleMenu}
              >
                <Link
                  to="/impresion"
                  className="flex items-center gap-3 p-3 text-lg"
                >
                  <FaPrint />
                  Impresión
                </Link>
              </li>
              <li
                className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
                onClick={toggleMenu}
              >
                <Link
                  to="/asesorias"
                  className="flex items-center gap-3 p-3 text-lg"
                >
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
                <Link
                  to="/sobre-nosotros"
                  className="flex items-center gap-3 p-3 text-lg"
                >
                  <FaInfoCircle />
                  Sobre Nosotros
                </Link>
              </li>
              <li
                className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
                onClick={toggleMenu}
              >
                <Link
                  to="/contacto"
                  className="flex items-center gap-3 p-3 text-lg"
                >
                  <FaMailBulk />
                  Contacto
                </Link>
              </li>
              <li
                className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
                onClick={toggleMenu}
              >
                <Link
                  to="/recursos"
                  className="flex items-center gap-3 p-3 text-lg"
                >
                  <FaDownload />
                  Recursos
                </Link>
              </li>
              <li
                className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
                onClick={toggleMenu}
              >
                <Link
                  to="/bolsa-de-trabajo"
                  className="flex items-center gap-3 p-3 text-lg"
                >
                  <FaBriefcase />
                  Vacantes
                </Link>
              </li>
              <li
                className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
                onClick={toggleMenu}
              >
                <Link
                  to="/responsabilidad-social"
                  className="flex items-center gap-3 p-3 text-lg"
                >
                  <FaNewspaper />
                  Responsabilidad Social
                </Link>
              </li>
            </ul>
            <ul className="p-2">
              <li
                className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
                onClick={toggleMenu}
              >
                <Link to="/" className="text-sm text-link-100 font-semibold">
                  Emprendedores Creativos &copy; {""}
                </Link>
                <span className="text-sm font-semibold">
                  {reserv} Todos los derechos reservados.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};