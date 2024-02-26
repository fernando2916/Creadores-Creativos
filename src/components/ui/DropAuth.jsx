import {
  FaBell,
  FaCircle,
  FaHeart,
  FaLaptopCode,
  FaShoppingBasket,
  FaSignOutAlt,
  FaUserCircle,
  FaUserCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ListItem } from "./ListItem";

const DropAuth = () => {
  return (
    <div className="bg-nav-900 w-[280px] p-2 absolute z-50 rounded-lg -right-7 top-10">
      <div className="p-4 flex items-center gap-3">
        <div>
          <Link to="/mi-cuenta">
            <FaUserCircle className="w-9 h-9" />
          </Link>
        </div>
        <div className="">
          <div className="flex gap-2">
            <span className="text-base font-bold text-link-100">
              {/* {user.first_name} */}
              Nombre
            </span>
            <span className="text-base font-bold text-link-100">
              Apellido
              {/* {user.last_name} */}
            </span>
          </div>
          <div>
            <span className="text-sm text-gray-300">
              {/* {user.email} */}
              Email
            </span>
          </div>
        </div>
      </div>
      <ul>
        <ListItem
          href="/mi-cuenta"
          Name={"Mi cuenta"}
          IconBase={<FaUserCircle />}
        />
        <li className="hover:bg-nav-700 pl-3 rounded-lg transition-all">
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
        <ListItem
          href="/lista-de-deseos"
          Name={"Lista de Deseos"}
          IconBase={<FaHeart />}
        />
        <ListItem
          href="/mis-cursos"
          Name={"Mi aprendizaje"}
          IconBase={<FaLaptopCode />}
        />
        <ListItem
          href="/mis-compras"
          Name={"Mis Compras"}
          IconBase={<FaShoppingBasket />}
        />
        <ListItem href="/soporte" Name={"Soporte"} IconBase={<FaUserCog />} />
        <ListItem
          href="/#"
          //   onClick={startLogout}
          Name={"Salir"}
          IconBase={<FaSignOutAlt />}
        />
      </ul>
    </div>
  );
};

export default DropAuth;
