import { useEffect } from "react";
import { AuthSection } from "../ui/AuthSection";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecuperarContraseña = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AuthSection title={"Restablece tu Contraseña"}>
      <p className="mx-auto p-3 text-justify text-sm">
        Ingresa el correo electrónico con el que te regístraste, y te enviaremos
        las instrucciones para actualizar tu contraseña.
      </p>
      <form className="pt-3 space-y-4">
        <div className=" flex flex-col space-y-2">
          <label className="font-medium text-lg">Correo Electrónico</label>
          <input
            type="email"
            placeholder="Ingresa tu Correo Electrónico"
            className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-base font-bold bg-btn-400 hover:bg-btn-600 transition-all ease-in gap-2 items-center">
          <FaEnvelope />
          Restablecer contraseña
        </button>
        <div className="">
          <p className="text-center mt-5 mb-3">
            ¿Aún no tienes cuenta?{" "}
            <button className="text-link-100 font-bold">
              <Link to="/crear-cuenta">Crear cuenta</Link>
            </button>
          </p>
        </div>
      </form>
    </AuthSection>
  );
};

export default RecuperarContraseña;
