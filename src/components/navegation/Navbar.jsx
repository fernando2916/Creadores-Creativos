import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/icono emprende.png";
import {
  FaAngleDown,
  FaBook,
  FaBuffer,
  FaBuilding,
  FaHome,
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
      <div>
        <div className="flex items-center ml-16">
          <Link to="/">
            <img src={Logo} alt="empresa" className="w-[43px] h-auto" />
          </Link>
        </div>
      </div>
      <div className="lg:flex items-center justify-center hidden grow ">
        <nav>
          <ul className="flex space-x-7">
            <li className="hover:text-link-100 transition-colorss">
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
                      ? "transform rotate-180 transition-colors text-link-100"
                      : "transition-colors"
                  }
                />
              </div>
              {showMenu && <SubMenuServicios onClick={toggleMenu} />}
            </li>

            <li className="hover:text-link-100 transition-colors">
              <Link to="/blog" className="flex items-center gap-2">
                <FaBook />
                Blog
              </Link>
            </li>
            <li className="hover:text-link-100 transition-colors">
              <Link to="/tienda" className="flex items-center gap-2">
                <FaShoppingBag />
                Tienda
              </Link>
            </li>
            <li className="hover:text-link-100 transition-colors">
              <Link to="/cursos" className="flex items-center gap-2">
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
                      ? "transform rotate-180 transition-colorss text-link-100"
                      : "transition-colorss"
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
