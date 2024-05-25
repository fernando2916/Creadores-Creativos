import TypewriterComponent from "typewriter-effect";
import Programacion from "../../assets/desarrollo.webp";

export const Header = () => {
  return (
    <header className="pt-[4rem] relative bg-cover md:h-[65rem] z-10">
      <img
        src={Programacion}
        alt="diseñadores"
        className="opacity-30 h-full w-full object-cover"
      />
      <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center ">
        <div className="text-center p-3 space-y-3 md:space-y-7 relative lg:-top-24">
          <span className=" text-link-100 font-bold text-xs md:text-3xl">
            Agencia de Software
          </span>
          <h3 className="text-2xl md:text-7xl xl:text-8xl font-extrabold">
            Diseño y Desarrollo de -
          </h3>
          <div className="text-link-100 text-3xl md:text-7xl xl:text-8xl font-extrabold  md:mt-1">
            <TypewriterComponent
              options={{
                strings: [
                  "Aplicación Web",
                  "Aplicación Móvil",
                  "Blog",
                  "Comercio Electrónico",
                  "Página de Aterrizaje",
                ],
                autoStart: true,
                loop: true,
                delay: 55,
                deleteSpeed: 20
              }}
            />
          </div>
          <p className="text-lg md:text-4xl">
            Desde una página web, hasta una Aplicación Web/Móvil.
          </p>
        </div>
      </div>
    </header>
  );
};
