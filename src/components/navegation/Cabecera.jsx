import { useState } from "react";
import { Link } from "react-router-dom";

import SideBar from "./SideBar";
import { FaAngleDown, FaBars, FaBook, FaBuffer, FaBuilding, FaCircle, FaHeart, FaHome, FaShoppingBag, FaShoppingCart, FaTimes, FaUserCircle, FaVideo } from "react-icons/fa";

import Logo from '../../assets/icono emprende.png'
import { SubMenuServicios } from "./SubMenuServicios";
import { SubMenuEmpresa } from "./SubMenuEmpresa";
import DropAuth from "../../pages/autenticacion/components/DropAuth";
import { Search } from "./modales/Search";

export const Cabecera = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    const [dropMenu, setDropMenu] = useState(false);
    const [dropMenu2, setDropMenu2] = useState(false);
    const handleMouseEnter = () => {
        setDropMenu(true);
    };
    const handleMouseLeave = () => {
        setDropMenu(false);
    };
    const handleMouseEnter2 = () => {
        setDropMenu2(true);
    };
    const handleMouseLeave2 = () => {
        setDropMenu2(false);
    };

    const toggleMenu2 = () => {
        setDropMenu(!showMenu);
    };
    const toggleMenu3 = () => {
        setDropMenu2(!dropMenu2);
    };
    const [dropMenu3, setDropMenu3] = useState(false);
    const handleShowMenuEnter4 = () => {
        setDropMenu3(true);
    };

    const handleShowMenuLeave4 = () => {
        setDropMenu3(false);
    };
  return (
    <div className="fixed flex justify-between z-30 w-full bg-nav-900 py-3 px-1 md:px-5">
      {/* SIDEBAR */}
      <SideBar onClick={toggleMenu} showMenu={showMenu} isAuth={isAuth} />
      <div className="lg:hidden">
        {showMenu ? (
          <button
            className="rounded-full p-3 transition-colors text-xl font-semibold bg-btn-400 hover:bg-btn-600"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>
        ) : (
          <button
            className="rounded-full p-3 transition-colors text-xl font-semibold bg-btn-400 hover:bg-btn-600"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        )}
      </div>
      {/* NAVBAR */}
      <div>
        <Link to='/'>
          <img src={Logo} alt="identidad" className="w-[43px] hidden lg:flex" />
        </Link>
      </div>
      <div className="flex">
        <div className="md:pr-32">
          <Link to='/'>
            <img src={Logo} alt="identidad" className="w-[43px] lg:hidden " />
          </Link>
        </div>
        <nav className="lg:flex items-center justify-center hidden grow">
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
              className="relative"
            >
              <div className="flex items-center gap-2">
                <FaBuffer className={dropMenu ? "text-link-100" : ""} />
                <span
                  className={dropMenu ? "text-link-500 cursor-pointer" : ""}
                >
                  Servicios
                </span>
                <FaAngleDown
                  className={
                    dropMenu
                      ? "transform rotate-180 transition-all duration-150 text-link-100"
                      : "transition-all duration-150"
                  }
                />
              </div>
              {dropMenu && <SubMenuServicios onClick={toggleMenu2} />}
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
              onMouseLeave={handleMouseLeave2}
            >
              <div className="flex items-center gap-2">
                <FaBuilding className={dropMenu2 ? "text-link-100" : ""} />
                <span
                  className={dropMenu2 ? "text-link-500 cursor-pointer" : ""}
                >
                  Empresa
                </span>
                <FaAngleDown
                  className={
                    dropMenu2
                      ? "transform rotate-180 transition-all duration-150 text-link-100"
                      : "transition-all duration-150"
                  }
                />
              </div>
              {dropMenu2 && <SubMenuEmpresa onClick={toggleMenu3} />}
            </li>
          </ul>
        </nav>
      </div>
      {isAuth ? (
        //* ICONOS
        <div className="">
          <ul className="flex items-center text-2xl gap-1">
            <li className="flex items-center p-2">
              <Search/>
            </li>
            <li className="md:flex items-center p-2 hidden">
              <button>
                <div>
                  <FaHeart className="" />
                </div>
              </button>
            </li>
            <li className="relative p-2.5">
              <Link to="/carrito">
                <div>
                  <FaShoppingCart className="" />
                </div>
              </Link>
              <FaCircle className="text-alerts-500 hidden top-0 absolute right-1 text-sm" />
            </li>
            <li
              className="relative p-2.5 hidden lg:flex"
              onMouseEnter={handleShowMenuEnter4}
              onMouseLeave={handleShowMenuLeave4}
            >
              <FaUserCircle
                className={`text-2xl ${dropMenu3 ? "text-link-100" : ""}`}
              />
              <FaCircle className="text-alerts-700 hidden absolute top-1 right-1 text-sm" />
              {dropMenu3 && <DropAuth />}
            </li>
          </ul>
        </div>
      ) : (
        //*  BOTONES
        <div className="flex items-center">
          <ul className="flex items-center text-2xl">
            <li className="flex items-center p-2">
              <Search/>
            </li>
            <li className="relative p-2">
              <Link to="carrito">
                <div>

                <FaShoppingCart />
                </div>
              </Link>
              <FaCircle className="text-alerts-500 hidden top-0 absolute right-1 text-sm" />
            </li>
          </ul>
          <Link to="/crear-cuenta">
            <button className="hover:text-link-100 hidden 2xl:flex font-medium transition-all mx-2">
              Crear Cuenta
            </button>
          </Link>
          <Link to="/ingresar">
            <button className="bg-btn-400 hover:bg-btn-600 text-white rounded-lg p-2.5 px-3 transition-colors hidden lg:flex font-medium">
              Ingresar
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
