import { useEffect } from "react";
import HeaderAsesorias from "../../assets/tutor.webp";
import { toast } from "sonner";

const Asesorias = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header>
        <div className="pt-[4rem] relative bg-cover md:h-[45rem] lg:h-[65rem] z-10">
          <img
            src={HeaderAsesorias}
            alt="diseñadores"
            className="opacity-40 h-full w-full object-cover "
          />
          <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center ">
            <div className="text-center p-3 space-y-3 md:space-y-7 relative lg:-top-24">
              <span className=" text-link-100 font-bold text-xs md:text-3xl">
                Agencia de Diseño Gráfico
              </span>
              <h3 className="text-lg md:text-5xl font-extrabold">
                Asesoramiento
              </h3>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div>
          <button onClick={
            () => toast('prueba', {
              description: 'prueba del toaster',
              action: {
                label: 'undo',
                onClick: () => console.log('undo')
              }
            })
            }>
Show Toast
          </button>
        </div>
      </main>
    </>
  );
};

export default Asesorias;
