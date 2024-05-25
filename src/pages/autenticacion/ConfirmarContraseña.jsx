import { useEffect, useState } from "react";
import { AuthSection } from "./components/AuthSection";
import { FaCheck, FaLock, FaLockOpen } from "react-icons/fa";

const ConfirmarContraseña = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <AuthSection title={"Nueva Contraseña"}>
      <>
        <p className="mx-auto p-3 text-justify text-sm">
          Ingresa tu nueva contraseña para que puedas acceder nuevamente a tu
          cuenta.
        </p>
        <form className="pt-3 space-y-3">
          <div className="flex flex-col gap-3 relative">
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
            <div className=" flex flex-col space-y-2">
              <label className="font-medium text-lg">
                Confirmar Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Repite la contraseña"
                  className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full"
                />
                <button
                  className="absolute right-3 top-3 text-xl outline-none"
                  type="button"
                  onClick={() => setShowPassword2(!showPassword2)}>
                  {showPassword2 ? <FaLockOpen /> : <FaLock />}
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold bg-btn-400 hover:bg-btn-600 transition-all ease-in gap-2 items-center">
            <FaCheck />
            Confirmar contraseña
          </button>
        </form>
      </>
    </AuthSection>
  );
};

export default ConfirmarContraseña;
