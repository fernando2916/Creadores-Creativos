import { FaCoffee, FaHeart, FaLightbulb, FaToolbox } from "react-icons/fa";

export const InfoSeccionEmpresa = () => {
  return (
    <section className="mx-auto py-5 container">
      <div className="flex justify-center items-center">
        <div>
          <h2 className="text-2xl md:text-5xl font-semibold py-5 md:justify-center px-4 mx-auto md:items-center flex">
            Agencia con experiencia, cálidad y profesionalidad{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 p-3 lg:mx-28 md:gap-16 ">
            <div>
              <p className="p-1 text-justify text-lg">
                ¡Conviértete en cliente de una de las agencias de diseño,
                publicidad más creativas, profesionales y experimentadas de
                México!.{" "}
                <strong>
                  {" "}
                  Soluciones creativas y profesionales a cualquier necesidad.
                </strong>{" "}
                En la industria creativa, no existe una talla única para todos.
                Emprendedores Creativos® ha respondido a esta necesidad durante
                más de cinco años con un estilo inigualable.
              </p>
              <p className="p-1 text-justify text-lg">
                <strong>
                  Somos una agencia servicio completo, especializada en
                  impresión.
                </strong>{" "}
                Ofrecemos de todo, desde identidad eh imagen corporativa, diseño
                gráfico hasta pulicidad eh impresión en cualquier sustrato.
              </p>
            </div>
            <div>
              <p className="p-1 text-justify text-lg">
                Con nosotros, siempre estará en buenas manos porque sabemos lo
                que se necesita para que su empresa se destaque.{" "}
                <strong> Alcance estatal, nacional o global.</strong>
              </p>
              <p className="p-1 text-justify text-lg">
                No importa dónde se encuentre su empresa, podemos hacer
                publicidad para usted. Tenemos acceso a los principales
                mercados, por lo que nunca perderá la oportunidad de llegar a un
                público más amplio.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-6 md:mx-auto md:container my-10">
            <div className="bg-nav-800 p-10 flex flex-col justify-center items-center gap-3">
              <span className="text-7xl font-semibold">310</span>
              <div className="flex items-center gap-1">
                <FaToolbox />
                Proyectos exitosos
              </div>
            </div>
            <div className="bg-nav-800 p-10 flex flex-col justify-center items-center gap-3">
              <span className="text-7xl font-semibold">150</span>
              <div className="flex items-center gap-1">
                <FaHeart />
                Clientes Felices
              </div>
            </div>
            <div className="bg-nav-800 p-10 flex flex-col justify-center items-center gap-3">
              <span className="text-7xl font-semibold">100</span>
              <div className="flex items-center gap-1">
                <FaCoffee />
                Premios Recibidos
              </div>
            </div>
            <div className="bg-nav-800 p-10 flex flex-col justify-center items-center gap-3">
              <span className="text-7xl font-semibold">975</span>
              <div className="flex items-center gap-1">
                <FaLightbulb />
                Grandes Ideas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
