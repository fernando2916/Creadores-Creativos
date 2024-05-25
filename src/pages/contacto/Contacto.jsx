import { useEffect } from "react";
import ideas from "../../assets/ideas.webp";
import {
  FaClock,
  FaEnvelopeOpen,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FormularioContacto } from "./FormularioContacto";
const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header>
        <div className="pt-[4rem] bg-gradient-to-r from-black to-gray-800 relative bg-cover md:h-[65rem] z-10">
          <img
            src={ideas}
            alt="diseñadores"
            className="opacity-30 h-full w-full object-cover "
          />
          <div className="absolute w-full h-full flex flex-col top-0 justify-center text-center ">
            <div className="text-center p-3 space-y-1 md:space-y-7 relative lg:-top-24">
              <span className=" text-link-100 font-bold text-xs md:text-3xl">
                ¿Dudas?
              </span>
              <h3 className="text-lg md:text-5xl font-extrabold uppercase tracking-wider">
                Contáctanos
              </h3>
              <p className="text-sm md:text-xl">
                También puedes registrarte aquí, para estar al dia con nuestras
                promociones.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="flex flex-col md:flex-row m-5  ">
          {/* INFORMACION */}
          <div className="w-full md:w-1/2 items-center order-last md:-order-last justify-center mt-5 p-3 lg:p-10 mb-10 bg-nav-800 rounded-lg ">
            <div className="mx-auto max-w-2xl text-center block mt-5">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Medios de Contacto
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-100">
                Aqui tienes distintas maneras de contactarnos
              </p>
            </div>
            <div className="flex flex-col w-full p-5 space-y-5 items-center ">
              <div className="flex flex-col lg:flex-row gap-2 items-center">
                <div className="flex items-center gap-2">
                  <FaClock />
                  <h3 className="">Horario de Atención:</h3>
                </div>
                <p className="text-link-100">
                  Lunes a Viernes : 9:00 am a 6:00 pm
                </p>
                <p className="text-link-100">Sábados : 10:00 am a 2:30 pm</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 items-center">
                <div className="flex items-center gap-2">
                  <FaWhatsapp />
                  <h3 className="">Teléfono / WhatsApp:</h3>
                </div>
                <p className="text-link-100"> 55-64-07-06-53</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 items-center">
                <div className="flex item gap-2">
                  <FaLocationDot />
                  <h3 className="">Ubicación:</h3>
                </div>
                <p className="text-link-100 text-sm text-justify">
                  C. Nícolas Bravo 107, Bo. San Miguel Ótlica, 54964, Tultepec
                  edo de Méx.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 items-center">
                <div className="flex items-center gap-2">
                  <FaEnvelopeOpen />
                  <h3 className="">Correo Electrónico:</h3>
                </div>
                <p className="text-link-100 ">
                  {" "}
                  emprendedorescreativos2019@gmail.com
                </p>
              </div>
              <div>
                <p className="text-justify text-sm mx-auto lg:w-[70%]">
                  ¡Nos comprometemos a responder a tu correo lo más pronto
                  posible! Solicitamos por favor esperes a ser contactado en
                  caso de escribirnos fuera del horario de servicio anterior.
                </p>
              </div>
              <div className=" pt-5 mx-auto">
                <div className="mx-auto max-w-2xl text-center block">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Redes Sociales
                  </h2>
                  <p className="mt-2 text-lg text-gray-200">
                    Tambien nos puedes contactar por medio de nuestras redes
                    sociales.
                  </p>
                </div>
                <div className="pt-5 flex gap-2 mx-auto justify-center">
                  <Link
                    to="https://www.facebook.com/CreadoresCreativos.MX"
                    target="_blank">
                    <div className="bg-btn-400 hover:bg-btn-600 rounded-full p-5 box-content transition-colors duration-150">
                      <FaFacebook className="text-3xl" />
                    </div>
                  </Link>
                  <Link
                    to="https://www.twitter.com/Creadores_Creat"
                    target="_blank">
                    <div className="bg-btn-400 hover:bg-btn-600 rounded-full p-5 box-content transition-colors duration-150">
                      <FaXTwitter className="text-3xl" />
                    </div>
                  </Link>
                  <Link to="https://t.me/+8q0-Zd0_u3kzYWU5" target="_blank">
                    <div className="bg-btn-400 hover:bg-btn-600 rounded-full p-5 box-content transition-colors duration-150">
                      <FaTelegram className="text-3xl" />
                    </div>
                  </Link>
                  <Link
                    to="https://www.instagram.com/creadores_creat"
                    target="_blank">
                    <div className="bg-btn-400 hover:bg-btn-600 rounded-full p-5 box-content transition-colors duration-150">
                      <FaInstagram className="text-3xl" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* FORMULARIO */}
          <FormularioContacto/>
        </div>
      </main>
    </>
  );
};

export default Contacto;
