import { IconBase } from "react-icons";
import { Link } from "react-router-dom";

export const ListItem = ({
  IconBase,
  href,
  toggleMenu,
  Name,
  onClick,
  className,
  children,
}) => {
  return (
    <li
      className="hover:bg-nav-700 pl-3 rounded-lg transition-all mr-2"
      onClick={toggleMenu}>
      <Link
        to={href}
        onClick={onClick}
        className={`flex items-center gap-3 p-3 rounded-lg text-lg ${className}`}>
        <span className="text-xl">{IconBase}</span>
        {Name}
        <p>{children}</p>
      </Link>
    </li>
  );
};
