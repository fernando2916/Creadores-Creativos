import { useEffect, useState } from "react";
import { AuthSection } from "./components/AuthSection";

import { FaLock, FaLockOpen, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PoliticasModal from "./modales/PoliticasModal";
import TerminosModal from "./modales/TerminosModal";

const Registro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <AuthSection title="Crear tu Cuenta">
      <form className="pt-3 space-y-3 flex flex-col">
        <div className=" flex flex-col space-y-2">
          <label className="font-medium text-lg">Nombre Completo</label>
          <input
            type="text"
            placeholder="Ingresa tu Nombre Completo "
            className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
          />
        </div>
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
              className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none w-full focus:shadow-md focus:shadow-link-200"
            />
            <button
              className="absolute right-3 top-3 text-xl outline-none"
              type="button"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaLockOpen /> : <FaLock />}
            </button>
          </div>
        </div>
        <div className=" flex flex-col space-y-2">
          <label className="font-medium text-lg">Confirmar Contraseña</label>
          <div className="relative">
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="Repite la contraseña"
              className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none w-full focus:shadow-md focus:shadow-link-200"
            />
            <button
              className="absolute right-3 top-3 text-xl outline-none"
              type="button"
              onClick={() => setShowPassword2(!showPassword2)}>
              {showPassword2 ? <FaLockOpen /> : <FaLock />}
            </button>
          </div>
        </div>
          <div>
            <p className=" text-[12px] py-4">
              Al hacer click en Crear cuenta, indicas que leíste y reconoces los{" "}
              <TerminosModal />
              y el
              <PoliticasModal />
              de Emprendedores Creativos.
            </p>
          </div>
        <div>
          <button
            type="submit"
            className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white bg-btn-400 hover:bg-btn-600 transition-all ease-in gap-2 items-cente">
            <FaSignInAlt />
            Crear Cuenta
          </button>
        </div>
        <div>
          <p className="text-center mt-5 mb-3">
            {isSignUp ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
            <button
              className="text-link-100 font-bold"
              onClick={() => setIsSignUp((prevIsSignUp) => !prevIsSignUp)}>
              <Link to="/ingresar">Entrar a mi cuenta</Link>
            </button>
          </p>
        </div>
      </form>
    </AuthSection>
  );
};

export default Registro;
