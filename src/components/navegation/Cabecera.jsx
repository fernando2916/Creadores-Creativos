import { useEffect, useState } from "react"


import { Link } from "react-router-dom"
import { MenuMobile } from "./MenuMobile";
import { MenuAccount } from "./MenuAccount";
import { MenuIcons } from "./MenuIcons";
import { MenuPrincial } from "./MenuPrincipal";
import Logotipo from '../../assets/icono emprende.png'
import { useAuthStore } from "@/hooks/useAuthStore";
import { SkeletonNavigation } from "@/utils/SkeletonNavigation";


export const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const {status, loading} = useAuthStore()

  return (
    <header className="flex justify-between w-full items-center p-4 bg-nav-900 fixed w-ful z-50">
        
        <div>
            <Link to='/'>
            <img
            src={Logotipo}
            alt="logo emprendedores"
            className="w-10 h-10"

            />
            </Link>
        </div>
        <div className="md:hidden -order-1 md:order-none">
            <MenuMobile onClick={toggleMenu} showMenu={showMenu} auth={status}/>
        </div>
        <div className="hidden md:flex">
            <MenuPrincial/>
        </div>
        <div>
          {
            loading ? (
              <SkeletonNavigation />
            ) :
             (status === 'Authenticated') ? (
                <MenuIcons />

            ) : (
            <MenuAccount />
            )
          }
        {/* {status === 'Authenticated' ? (
            <MenuIcons />
          ) : (
            <MenuAccount />
          )} */}
        </div>

    </header>
  )
}
