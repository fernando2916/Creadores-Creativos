import { SidebarDash } from "./SidebarDash"
import { SidebarPrincipal } from "./SidebarPrincipal"

export const MenuMobile = ({onClick: toggleMenu,
  showMenu: showMenu, auth: status}) => {
   
  return (
    <aside>
      {status === 'Authenticated' ? (
        <SidebarDash onClick={toggleMenu} showMenu={showMenu} />
      ) : (
        <SidebarPrincipal onClick={toggleMenu} showMenu={showMenu} />
      )}
    </aside>
  )
}
