import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthSection } from "./components/AuthSection";
import { FaLock, FaLockOpen, FaUser } from "react-icons/fa";

const Ingresar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthSection title="Ingresa a tu cuenta">
      <form className="pt-3 space-y-5">
        <div className=" flex flex-col space-y-2">
          <label className="font-medium text-lg">Correo Electrónico</label>
          <input
            type="email"
            placeholder="Ingresa tu Correo Electrónico"
            className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
          />
        </div>
        <div className=" flex flex-col space-y-2">
          <label className="font-medium text-lg">Contraseña</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa una contraseña"
              className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full"
            />
            <button
              className="absolute right-3 top-3 text-xl outline-none"
              type="button"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaLockOpen /> : <FaLock />}
            </button>
          </div>
        </div>
          <div className="flex justify-between items-center mt-5">
            <div className=" flex items-center gap-1">
              <input type="checkbox" className="w-4 h-4" />
              <p>Recordarme</p>
            </div>
            <Link to="/restablecer-contraseña" className="text-sm text-link-100">
              ¿Olvidaste tu Contraseña?
            </Link>
          </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white bg-btn-400 hover:bg-btn-600 transition-all ease-in gap-2 items-center">
            <FaUser />
            Entrar a mi cuenta
          </button>
        </div>
        <div className=" border-t border-gray-500">
          <p className="text-center mt-5 mb-3">
            {isSignUp ? "¿Ya tienes una cuenta?" : "¿Aún no tienes cuenta? "}{" "}
            <button
              className="text-link-100 font-bold"
              onClick={() => setIsSignUp((prevIsSignUp) => !prevIsSignUp)}>
              <Link to="/crear-cuenta">Crear cuenta</Link>
            </button>
          </p>
        </div>
      </form>
    </AuthSection>
  );
};

export default Ingresar;
