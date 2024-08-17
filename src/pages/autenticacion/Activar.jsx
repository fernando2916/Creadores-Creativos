import { useEffect } from "react";
import { AuthSection } from "./components/AuthSection";

const Activar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AuthSection title={"Activación de cuenta"}>

      <div className="">
        <p className=" text-xl ">Tu cuenta espera para ser activada.</p>
        <p className="py-5 text-justify">
          Revisa la bandeja de entrada o spam de tu correo electrónico con el
          que creaste tu cuenta, para acceder al link de activación.
        </p>
      </div>
    </AuthSection>
  );
};

export default Activar;
