import { useState } from "react";

import SideBar from "./SideBar";
import { FaBars, FaTimes } from "react-icons/fa";
import Navbar from "./Navbar";
import AuthItems from "./AuthItems";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* SIDEBAR */}
      <SideBar onClick={toggleMenu} showMenu={showMenu} isAuth={isAuth} />
      {/* NAVBAR DESKTOP */}
      <div className="flex fixed justify-between z-30 w-full bg-nav-900 py-3 px-1 md:px-2.5">
        <div className="lg:hidden">
          {showMenu ? (
            <button
              className="rounded-full p-3 transition-all duration-300 text-xl font-semibold bg-btn-400 hover:bg-btn-600"
              onClick={toggleMenu}>
              <FaTimes />
            </button>
          ) : (
            <button
              className="rounded-full items-start p-3 transition-all duration-300 text-xl font-semibold bg-btn-400 hover:bg-btn-600 "
              onClick={toggleMenu}>
              <FaBars />
            </button>
          )}
        </div>
        {/* Navbar */}

        <Navbar />
        {/* ItemsAuth */}
        <AuthItems isAuth={isAuth} />
      </div>
    </>
  );
};

export default Header;
