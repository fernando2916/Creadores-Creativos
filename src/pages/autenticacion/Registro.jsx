import { useEffect, useState } from "react";
import { AuthSection } from "./components/AuthSection";

import { FaLock, FaLockOpen, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PoliticasModal from "./modales/PoliticasModal";
import TerminosModal from "./modales/TerminosModal";
import { useForm } from "../../hooks/useForm";


const registerFormFields = {
  registerName:         "",
  registerLastName:     "",
  registerEmail:        "",
  registerPassword:     "",
  registerPassword2:    "",
};

const Registro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const {
    registerName,
    registerLastName,
    registerEmail,
    registerPassword,
    registerPassword2,
    onInputChange,
  } = useForm(registerFormFields);

  const registerSubmit = (event) => {
    event.preventDefault();
    console.log({
      registerName,
      registerLastName,
      registerEmail,
      registerPassword,
      registerPassword2,
    })
  }

  return (
    <AuthSection title="Crear tu Cuenta">
      <form className="pt-3 space-y-3 flex flex-col" noValidate onSubmit={registerSubmit}>
        <div className=" flex flex-col space-y-2">
          <label className="font-medium text-lg" htmlFor="nombre">Nombre Completo</label>
          <input
            id="nombre"
            type="text"
            placeholder="Ingresa tu Nombre "
            className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            name="registerName"
            value={registerName}
            onChange={onInputChange}
          />
        </div>
        <div className=" flex flex-col space-y-2">
          <label className="font-medium text-lg" htmlFor="apellido">Apellido</label>
          <input
          id="apellido"
            type="text"
            placeholder="Ingresa tu apellido "
            className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            name="registerLastName"
            value={registerLastName}
            onChange={onInputChange}
          />
        </div>
        <div className=" flex flex-col space-y-2">
          <label className="font-medium text-lg" htmlFor="correo">Correo Electrónico</label>
          <input
          id="correo"
            type="email"
            placeholder="Ingresa tu Correo Electrónico"
            className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            name="registerEmail"
            value={registerEmail}
            onChange={onInputChange}
          />
        </div>
        <div className=" flex flex-col space-y-2">
          <label className="font-medium text-lg" htmlFor="contraseña">Contraseña</label>
          <div className="relative">
            <input
            id="contraseña"
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa una contraseña"
              className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none w-full focus:shadow-md focus:shadow-link-200"
              name="registerPassword"
              value={registerPassword}
              onChange={onInputChange}
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
          <label className="font-medium text-lg" htmlFor="confirmar contraseña">Confirmar Contraseña</label>
          <div className="relative">
            <input
            id="confirmar contraseña"
              type={showPassword2 ? "text" : "password"}
              placeholder="Repite la contraseña"
              className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none w-full focus:shadow-md focus:shadow-link-200"
              name="registerPassword2"
              value={registerPassword2}
              onChange={onInputChange}
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
