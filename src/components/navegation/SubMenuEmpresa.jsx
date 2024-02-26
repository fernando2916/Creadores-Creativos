import { company } from "../navegation/NavItems";
import { ListMenu } from "../ui/ListMenu";

export const SubMenuEmpresa = ({ onClick: handleShowMenu }) => {
  return (
    <ul className="absolute top-6 -right-[90%] rounded-lg z-50  bg-nav-900 w-72 p-3 shadow-lg shadow-badges-300 transition-all duration-500 ">
      {company.map((item) => (
        <ListMenu
          onClick={handleShowMenu}
          Name={item.name}
          href={item.href}
          key={item.href}
          IconBase={item.icon}
        />
      ))}
    </ul>
  );
};
