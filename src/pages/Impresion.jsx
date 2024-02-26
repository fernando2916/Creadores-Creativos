import { useEffect } from "react";
import HeaderImpresion from "../assets/plotter.webp";
const Impresion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header>
        <div className="pt-[4rem] relative bg-cover md:h-[65rem] z-10">
          <img
            src={HeaderImpresion}
            alt="diseñadores"
            className="opacity-30 h-full w-full object-cover "
          />
          <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center ">
            <div className="text-center p-3 space-y-3 md:space-y-7 relative lg:-top-24">
              <span className=" text-link-100 font-bold text-xs md:text-3xl">
                Agencia de Diseño Gráfico
              </span>
              <h3 className="text-lg md:text-5xl font-extrabold">
                Servicio de Impresión
              </h3>
              <p className="text-sm md:text-xl">
                Servicios 360º: Diseño Gráfico, Fotografía, Animaciones, Diseño
                Web, Desarrollo Web, Marketing, Publicidad, Impresión,
                Asesorias, etc.{" "}
                <span className="block font-bold text-link-100">
                  Todo en un mismo lugar.
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Impresion;
