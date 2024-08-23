
import { FaShoppingCart } from "react-icons/fa"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

export const MenuAccount = () => {
  return (
    <div className="flex items-center justify-center gap-0 sm:gap-2">
      <button className="sm:px-0 md:px-3 lg:px-0">
        <Link to="/carrito">
          <FaShoppingCart className="text-2xl hover:text-link-100" />
        </Link>
      </button>
      <div className="flex items-center gap-2">
        <Button variant="link" className="bg-transparent hidden lg:block">
          <Link to="auth/crear-cuenta">Registrarse</Link>
        </Button>
        <Button className="hidden md:block">
          <Link to="auth/ingresar">Iniciar sesión</Link>
        </Button>
      </div>
    </div>
  )
}
s