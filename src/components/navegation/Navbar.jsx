import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/icono emprende.png";
import {
  FaAngleDown,
  FaBook,
  FaBuffer,
  FaBuilding,
  FaHome,
  FaSearch,
  FaShoppingBag,
  FaVideo,
} from "react-icons/fa";
import { SubMenuServicios } from "./SubMenuServicios";
import { SubMenuEmpresa } from "./SubMenuEmpresa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const handleMouseEnter = () => {
    setShowMenu(true);
  };
  const handleMouseLeave = () => {
    setShowMenu(false);
  };
  const handleMouseEnter2 = () => {
    setShowMenu2(true);
  };
  const handleMouseLeave2 = () => {
    setShowMenu2(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleMenu2 = () => {
    setShowMenu2(!showMenu2);
  };
  return (
    <>
      <div className="">
        <div className="mx-5 md:mx-auto flex items-center">
          <Link to="/">
            <img src={Logo} alt="empresa" className="w-[43px] h-auto" />
          </Link>
        </div>
      </div>
      <form className="hidden xl:flex  z-30 relative left-40">
        <div className=" hidden xl:flex fixed z-30 ">
          <input
            type="text"
            placeholder="Buscar cualquier cosa..."
            className="w-[80px] focus:w-[350px] transition-all duration-1000 ease-in-out p-2 pl-10 focus:pr-5 rounded-md bg-nav-900 outline-none border-2 border-link-100"
          />
          <FaSearch className="absolute top-3 left-3 text-btn-200 text-[20px]" />
        </div>
      </form>
      <div className="lg:flex items-center justify-center hidden grow ">
        <nav>
          <ul className="flex space-x-7">
            <li className="hover:text-link-100 transition-all">
              <Link to="/" className="flex items-center gap-2">
                <FaHome />
                Inicio
              </Link>
            </li>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative">
              <div className="flex items-center gap-2">
                <FaBuffer className={showMenu ? "text-link-100" : ""} />
                <span
                  className={showMenu ? "text-link-500 cursor-pointer" : ""}>
                  Servicios
                </span>
                <FaAngleDown
                  className={
                    showMenu
                      ? "transform rotate-180 transition-all text-link-100"
                      : "transition-all"
                  }
                />
              </div>
              {showMenu && <SubMenuServicios onClick={toggleMenu} />}
            </li>

            <li className="hover:text-link-100 transition-all">
              <Link to="/blog" className="flex items-center gap-2">
                <FaBook />
                Blog
              </Link>
            </li>
            <li className="hover:text-link-100 transition-all">
              <Link to="/tienda" className="flex items-center gap-2">
                <FaShoppingBag />
                Tienda
              </Link>
            </li>
            <li className="text-gray-300 opacity-50 transition-all line-through">
              <Link to="#cursos" className="flex items-center gap-2">
                <FaVideo />
                Cursos
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}>
              <div className="flex items-center gap-2">
                <FaBuilding className={showMenu2 ? "text-link-100" : ""} />
                <span
                  className={showMenu2 ? "text-link-500 cursor-pointer" : ""}>
                  Empresa
                </span>
                <FaAngleDown
                  className={
                    showMenu2
                      ? "transform rotate-180 transition-all text-link-100"
                      : "transition-all"
                  }
                />
              </div>
              {showMenu2 && <SubMenuEmpresa onClick={toggleMenu2} />}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
