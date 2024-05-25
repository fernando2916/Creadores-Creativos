import { Link } from "react-router-dom";

import { FaAngleRight, FaTimes, FaUser } from "react-icons/fa";
import SideAuthItems from "./SideAuthItems";
import SideItems from "./SideItems";

const SideBar = ({ onClick: toggleMenu, showMenu, isAuth }) => {
  return (
    <>
      <div
        className={`fixed h-full z-50 top-14 w-full sm:w-4/6 bg-nav-950/60 md:bg-transparent justify-start items-end p-2 flex flex-col duration-300 ease-out ${
          showMenu ? "left-0" : "-left-full"
        }`}>
        <button
          onClick={toggleMenu}
          className="bg-btn-400 p-3.5 rounded-full flex -translate-y-14">
          <FaTimes className="text-xl" />
        </button>
        <aside
          className={`bg-nav-900 w-5/6 sm:w-3/6 top-0 h-full fixed transition-all duration-300 justify-between overflow-y-scroll ease-out ${
            showMenu ? "left-0" : "-left-full"
          } `}>
          <div className="flex items-center gap-4 w-full p-7 bg-nav-800">
            {isAuth ? (
              <div className="flex items-center gap-3 py-3">
                <div className="rounded-full">
                  <FaUser className="text-3xl" />
                </div>
                <div>
                  <span className="text-2xl">Nombre </span>
                  <span className="text-2xl">Apellido</span>
                  <div className="flex items-center gap-1">
                    <Link to="mi-cuenta" className="flex items-center gap-1">
                      <span className="text-base text-link-400">Mi Cuenta</span>
                      <FaAngleRight className="text-link-500 font-medium text-lg" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 justify-center mx-5 pb-3">
                  <div className="rounded-full">
                    <FaUser className="text-3xl" />
                  </div>
                  <div className="">
                    <span className="text-lg font-semibold ">
                      Entra a tu cuenta
                    </span>
                    <p className="text-xs text-justify text-gray-300">
                      Podrás comprar un artículo, comentar una publicación o continuar con tu aprendizaje.
                    </p>
                  </div>
                </div>
                <Link to="ingresar" onClick={toggleMenu}>
                  <button className="flex justify-center items-center mx-auto bg-btn-400 hover:bg-btn-600 text-white w-full p-2 rounded-lg">
                    Ingresar
                  </button>
                </Link>
              </div>
            )}
          </div>

          {isAuth ? (
            <SideAuthItems onClick={toggleMenu} />
          ) : (
            <SideItems onClick={toggleMenu} />
          )}
        </aside>
      </div>
    </>
  );
};

export default SideBar;
