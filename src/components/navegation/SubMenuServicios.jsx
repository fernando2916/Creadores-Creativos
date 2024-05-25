import { servicios } from "../navegation/NavItems";
import { ListMenu } from "../../pages/autenticacion/components/ListMenu";

export const SubMenuServicios = ({ onClick: handleShowMenu }) => {
  return (
    <ul className="absolute top-6 -right-[90%] rounded-lg z-50 bg-nav-900 w-72 p-3 shadow-lg shadow-badges-300 ">
      {servicios.map((item) => (
        <ListMenu
          onClick={handleShowMenu}
          Name={item.name}
          key={item.href}
          IconBase={item.icon}
          href={item.href}
        />
      ))}
    </ul>
  );
};
