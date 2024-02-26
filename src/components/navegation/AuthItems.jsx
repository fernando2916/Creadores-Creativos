import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaCircle,
  // FaHeart,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";
import DropAuth from "../ui/DropAuth";

const AuthItems = ({ isAuth }) => {
  const [showMenu4, setShowMenu4] = useState(false);
  const handleShowMenuEnter4 = () => {
    setShowMenu4(true);
  };

  const handleShowMenuLeave4 = () => {
    setShowMenu4(false);
  };
  return (
    <div>
      {isAuth ? (
        <div>
          <ul className="flex gap-x-3 box-content">
            <li className="relative p-2.5">
              <Link to="/carrito">
                <FaShoppingCart className="text-2xl" />
              </Link>
              <FaCircle className="text-alerts-500 hidden top-0 absolute right-1 text-sm" />
            </li>
            <li
              className="relative p-2.5 hidden md:flex"
              onMouseEnter={handleShowMenuEnter4}
              onMouseLeave={handleShowMenuLeave4}>
              <FaUserCircle
                className={`text-2xl ${showMenu4 ? "text-link-100" : ""}`}
              />
              <FaCircle className="text-alerts-700 hidden absolute top-1 right-1 text-sm" />
              {showMenu4 && <DropAuth />}
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex items-center gap-3 justify-center">
          <ul className="flex md:gap-x-3 box-content">
            {/* <li className="2xl:flex hidden items-center">
              <button>
                <FaHeart className="text-2xl" />
              </button>
            </li> */}
            <li className="relative py-2.5 lg:px-2">
              <Link>
                <FaShoppingCart className="text-2xl" />
              </Link>
              <FaCircle className="text-alerts-500 hidden top-0 absolute right-1 text-sm" />
            </li>
          </ul>
          <Link to="/crear-cuenta">
            <button className="hover:text-link-100 hidden 2xl:flex font-medium transition-all">
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
};

export default AuthItems;
