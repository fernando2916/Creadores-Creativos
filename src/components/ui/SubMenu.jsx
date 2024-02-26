import { IconBase } from "react-icons";
import { Link } from "react-router-dom";
import { servicios, company } from "../navegation/NavItems";

export const SubMenuServicios = ({ onClick, className }) => {
  return (
    <ul>
      {servicios.map((item) => (
        <li
          key={item.name}
          className="hover:bg-nav-700 pl-6 rounded-lg transition-all mr-2">
          <Link
            to={item.href}
            onClick={onClick}
            className={`flex items-center gap-3 p-3 rounded-lg text-lg ${className}`}>
            <span>{item.icon}</span>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const SubMenuEmpresa = ({ onClick, className }) => {
  return (
    <ul>
      {company.map((item) => (
        <li
          key={item.name}
          className="hover:bg-nav-700 pl-6 rounded-lg transition-all mr-2">
          <Link
            to={item.href}
            onClick={onClick}
            className={`flex items-center gap-3 p-3 rounded-lg text-lg ${className}`}>
            <span>{item.icon}</span>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
