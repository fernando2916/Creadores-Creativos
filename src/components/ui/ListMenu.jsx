import { IconBase } from "react-icons";
import { Link } from "react-router-dom";

export const ListMenu = ({ IconBase, href, Name, onClick: handleShowMenu }) => {
  return (
    <li className="hover:bg-nav-700 pl-3 rounded-lg transition-all">
      <Link
        onClick={handleShowMenu}
        to={href}
        className="flex items-center text-white gap-3 py-3 rounded-lg text-sx">
        {IconBase}
        {Name}
      </Link>
    </li>
  );
};
