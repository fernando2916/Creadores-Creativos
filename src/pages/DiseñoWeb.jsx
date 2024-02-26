import { useEffect } from "react";
import Programacion from "../assets/desarrollo.webp";

const DiseñoWeb = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header className="pt-[4rem] relative bg-cover md:h-[65rem] z-10">
        <img
          src={Programacion}
          alt="diseñadores"
          className="opacity-30 h-full w-full object-cover "
        />
        <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center ">
          <div className="text-center p-3 space-y-3 md:space-y-7 relative lg:-top-24">
            <span className=" text-link-100 font-bold text-xs md:text-3xl">
              Agencia de Diseño Gráfico
            </span>
            <h3 className="text-lg md:text-5xl font-extrabold capitalize">
              Diseño y desarrollo de Aplicaciones Web Profesionales.
            </h3>
            <p className="text-sm md:text-xl">
              Desde una página web, hasta una Aplicación Web/Móvil.
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default DiseñoWeb;
