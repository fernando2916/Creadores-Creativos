import { useEffect } from "react";
import Objetivo from "../assets/objetivo.webp";
const Fotografia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="pt-[4rem] relative bg-cover bg-center md:h-[65rem] z-10 flex">
        <img
          src={Objetivo}
          alt="objetivo de cámara"
          className=" opacity-70 h-full object-cover w-full "
        />

        <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center ">
          <div className="text-center p-3 space-y-3 md:space-y-7 relative lg:-top-24">
            <span className=" text-link-100 font-bold text-sm md:text-3xl">
              Agencia de Fotografía
            </span>
            <h3 className="text-2xl md:text-7xl xl:text-9xl font-extrabold">
              Fotografia
            </h3>
            <p className="text-lg md:text-4xl">
              ¡Dominando la fotografía de la A a la Z!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotografia;
