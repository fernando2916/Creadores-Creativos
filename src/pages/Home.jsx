import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

import Maquina from "../assets/maquina.svg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[4rem]">
      <header className=" bg-gradient-to-r from-nav-700 to-link-700 p-4 md:p-12 lg:p-16 ">
        <div className="grid sm:grid-cols-2 gap-3 pt-10 place-content-center">
          <div className="grid place-content-center p-10 gap-y-3 lg:mx-24">
            <div className="text-4xl font-semibold text-left">
              Emprendedores {""}
              <span>Creativos &copy; </span>
              <p className="py-5 text-white text-base font-normal text-justify">
                Una identidad visual correctamente desarrollada, llamara la
                atención de tus clientes y lograra que se acuerden de ti a
                futuro, eso se logra trabajando de la mano con profesionales.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Link to="contacto">
                <button className="bg-btn-400 rounded-lg p-2 text-lg font-medium flex items-center gap-3 w-full place-content-center hover:bg-btn-600 transition-colors duration-150 ">
                  <FaEnvelope />
                  Contacto
                </button>
              </Link>
            </div>
          </div>
          <div className="md:flex justify-center bg-center bg-auto">
            <img src={Maquina} alt="fondo" className="object-fill" />
          </div>
        </div>
      </header>
      <main>
        <section className="mx-auto py-5">
          <div className="flex justify-center items-center">principal</div>
        </section>
        <section className="mx-auto py-5">
          <div className="flex justify-center items-center">Marcas</div>
        </section>
        <section className="mx-auto py-5">
          <div className="flex justify-center items-center">
            Últimas entradas
          </div>
        </section>
        <section className="mx-auto py-5">
          <div className="flex justify-center items-center">
            Boletín Informativo
          </div>
        </section>
        <section className="mx-auto py-5">
          <div className="flex justify-center items-center">Testimoniales</div>
        </section>
        <section className="mx-auto py-5">
          <div className="flex justify-center items-center">Equipo</div>
        </section>
      </main>
    </div>
  );
};

export default Home;
