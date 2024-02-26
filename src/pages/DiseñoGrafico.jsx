// import { useEffect } from "react";
import {
  FaCheck,
  FaCircle,
  FaCode,
  FaLaptop,
  FaQuoteLeft,
  FaQuoteRight,
  FaToolbox,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { InfoSection } from "../layout/InfoSection";
import Diseñadores from "../assets/disenadores.webp";
import Visual from "../assets/Error_404.png";

const DiseñoGrafico = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <header>
        <div className="pt-[4rem] relative bg-cover md:h-[65rem] z-10">
          <img
            src={Diseñadores}
            alt="diseñadores"
            className="opacity-30 h-full w-full object-cover "
          />
          <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center ">
            <div className="text-center p-3 space-y-3 md:space-y-7 relative lg:-top-24">
              <span className=" text-link-100 font-bold text-xs md:text-3xl">
                Agencia de Diseño Gráfico
              </span>
              <h3 className="text-lg md:text-5xl font-extrabold">
                Diseñamos profesionalmente, cuidando todos los detalles.
              </h3>
              <p className="text-sm md:text-xl">
                Desde un logotipo, una tipografía, la portada de una revista o
                un libro, hasta toda tu identidad eh imagen gráfica.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="py-10 space-y-5">
          <div className="mx-5 lg:mx-auto lg:container flex justify-center text-center text-xl md:text-4xl ">
            Somos diseñadores con experiencia en creación de marca, fotografía,
            diseño web, editorial, entre otras, con más de 5 años de
            experiencia.
          </div>
          <div className="mx-5 lg:mx-auto lg:container py-10 flex text-justify justify-center text-xl ">
            <div>
              En{" "}
              <span className="text-link-100">
                Emprendedores Creativos&copy;
              </span>{" "}
              hemos desarrollado un proceso creativo para crear marcas únicas,
              nos encargamos de implementar de forma integral toda la
              comunicación visual en los diferentes medios digitales e impresos,
              aumentando con ello el reconocimmiento de la marca y la atracción
              de clientes potenciales.
            </div>
          </div>
        </section>
        <InfoSection
          title={"Comunicación visual en la actualidad"}
          img={<img src={Visual} alt="imagen ilustrativa" />}>
          <p className="text-justify mt-10 text-lg">
            Digamos por ejemplo que se encuentra con la necesidad de comunicar
            un mensaje, ¿de qué forma lo comunicaría? Puede ir contándoselo
            persona a persona, transmitirlo en alto con un megáfono o emitirlo
            por la radio para que llegue a más receptores. En este caso estaría
            utilizando la comunicación verbal. Pero ¿y si para comunicar ese
            mismo mensaje utiliza como medio un cartel, un folleto o un anuncio
            en la prensa?
            <span className="font-semibold mx-1">
              Entonces estaría utilizando un tipo de comunicación visual
              denominada diseño gráfico.
            </span>
            El diseño gráfico informa, atrae la atención, organiza, convence,
            estimula, identifica, localiza, diferencia, pero sobre todo, el
            diseño gráfico comunica visualmente un mensaje.
          </p>
          <p className="text-justify mt-10 text-lg">
            La verdadera finalidad del diseño gráfico es satisfacer una
            necesidad previa de comunicación, de transmisión de mensajes a un
            receptor por medio de signos visuales. En todo proceso de
            comunicación aparecen tres elementos básicos:
            <span className="font-semibold mx-1">
              un emisor, un mensaje y un receptor.
            </span>
            En comunicación gráfica, el emisor es la empresa o individuo que
            quiere transmitir un mensaje concreto a sus clientes o congéneres,
            que en este caso son los receptores
          </p>
        </InfoSection>
        <InfoSection
          className={"order-last"}
          title={"Profesionales en Diseño Gráfico en México"}
          img={<img src={Visual} alt="imagen ilustrativa" />}>
          <p className="text-justify mt-10 text-lg">
            Ya sea que esté buscando lanzar un nuevo negocio o simplemente un
            rebrand existente,
            <span className="font-semibold mx-1">
              el diseño gráfico es esencial para el éxito.
            </span>
            Puede comenzar con
            <span className="font-semibold mx-1">
              una imagen cautivadora que capturará la atención de sus usuarios
            </span>
            y conduzca a una página de destino bien diseñada o fotos de
            productos. También conduce a un correo electrónico de seguimiento,
            publicaciones sociales, infografías y más. Estos son solo algunos de
            los muchos beneficios de contratar una agencia de diseño gráfico
            profesional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto p-5">
            <div className="mt-5">
              <FaToolbox className="text-7xl my-5" />
              <h3 className="text-xl">Diseño Gráfico</h3>
              <ul className="p-2.5 space-y-1">
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Identidad Corporativa
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Imagen Corporativa
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Etiquetas y Empaques
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Señalética
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Tipografía
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <FaShield className="text-7xl my-5" />
              <h3 className="text-xl">Diseño Editorial</h3>
              <ul className="p-2.5 space-y-1">
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Revistas Digitales/Impresas
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Folletos
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Brochures
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Posters Profesionales
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Copy Creativo
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <FaLaptop className="text-7xl my-5" />
              <h3 className="text-xl">Diseño Web</h3>
              <ul className="p-2.5 space-y-1">
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Página de aterrizaje
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Comercio Electrónico
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Aplicaciones Móviles
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Sitios Empresariales
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Posters Profesionales
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <FaCode className="text-7xl my-5" />
              <h3 className="text-xl">Desarrollo web</h3>
              <ul className="p-2.5 space-y-1">
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Autenticación de Ususarios
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Publicación de Blog
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Pasarela de Pagos
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Formulario de Contacto
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Despliegue en Servidores
                </li>
              </ul>
            </div>
          </div>
        </InfoSection>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto p-5 mt-10">
            <p className="text-justify p-2 text-xl lg:mx-10">
              Un diseñador gráfico profesional puede desarrollar una identidad
              visual única para su negocio. Trabajarán en estrecha colaboración
              con usted para desarrollar una representación visual de su marca.
              Incorporarán colores, formas e imágenes en su narrativa para crear
              una impresión duradera con su audiencia. Ya sea que necesite un
              logo simple para aumentar la visibilidad o una estrategia de marca
              compleja, puede estar seguro de que un diseñador gráfico obtendrá
              el trabajo. Si necesita un logotipo personalizado creado para su
              negocio, comuníquese con los diseñadores gráficos de Creative
              Studio®.
            </p>
            <p className="text-justify p-2 text-xl lg:mx-10">
              Además de crear diseños atractivos para medios de impresión y
              digital, los diseñadores gráficos pueden crear imágenes
              impresionantes para el entretenimiento. Esto incluye carteles de
              películas, cubiertas de DVD, programas de escenario y novelas. La
              animación, la tipografía y el video se pueden usar en los gráficos
              de movimiento, también. También pueden crear materiales impresos
              con pantalla para la venta. Por lo tanto, si necesita crear un
              folleto, folleto o una cubierta de DVD, o algo completamente
              diferente, los diseñadores gráficos son la respuesta.
            </p>
          </div>
        </section>

        <section className="py-5 flex items-center ">
          <div className="flex flex-col bg-nav-950 p-10 w-full justify-between items-center mx-auto">
            <h2 className="text-xl">Conoce nuestro trabajo</h2>
            <p className="text-center flex p-5 gap-2 items-center md:text-3xl font-semibold">
              <FaQuoteLeft className="text-5xl font-bold text-link-100" />
              Día a día a hacemos lo que más nos gusta y nos inspira: Trabajar
              en las mejores ideas de negocio.
              <FaQuoteRight className="text-5xl font-bold text-link-100" />
            </p>
          </div>
        </section>
        <section className="py-5 px-8 max-w-7xl mx-auto items-center">
          <div className=" text-center max-w-4xl mx-auto">
            <p className="mt-2 font-bold tracking-tight text-5xl leading-none">
              Precios de nuestros paquetes de diseño.
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-8 text-gray-300">
            Hemos armado 3 paquetes que cumplen tus necesidades desde las
            básicas hasta los complementos impresos.
          </p>
          {/* <div className="justify-center mt-16 flex">
            <div className="grid grid-cols-2 gap-1 rounded-full p-2 text-center font-semibold leading-5 ring-inset ring-offset-1 ring-2">
              <div className="cursor-pointer rounded-full bg-btn-400 px-3 py-1">
                Mensual
              </div>
              <div className="cursor-pointer rounded-full px-3 py-1">Anual</div>
            </div>
          </div> */}
          <div className="grid mt-10 isolate gap-9 lg:mx-0 grid-cols-1 lg:grid-cols-3">
            {/* BASICO */}
            <div className="rounded-3xl p-8 xl:p-10 ring-1 ring-link-100 ">
              <div className=" flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold leading-8 ">Freelancer</h3>
              </div>
              <p className="mt-5 text-xs leading-6 text-gray-200">
                El paquete ideal para iniciar tu idea de negocios. Comienza con
                una imagen impactante y construye relaciones de negocio con una
                excelente primera impresión.
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  $3,000.00
                </span>
                <span className="text-xs font-semibold leading-6">MXN</span>
              </p>
              <button className="mt-6 rounded-md border-2 border-btn-400 hover:border-btn-600 transition-colors duration-150 px-3 py-2 text-center text-LG font-semibold leading-6 w-full">
                Comprar ahora
              </button>
              <ul className="text-xs leading-6 xl:mt-10 mt-8" role="list">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
              </ul>
            </div>
            {/* INTERMEDIO */}
            <div className="rounded-3xl p-8 xl:p-10 ring-4 ring-link-100 bg-nav-900 ">
              <div className=" flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold leading-8 text-link-100 ">
                  Premium
                </h3>
                <p className="rounded-full bg-nav-700 px-3 py-1 text-xs">
                  Más Popular
                </p>
              </div>
              <p className="mt-5 text-xs leading-6 text-gray-200">
                Nuestro paquete premium está diseñado para cubrir las áreas más
                necesarias de comunicación y diseño. Si eres un emprendedor con
                visión a futuro, o quieres darle ese gran impulso a tu marca o
                empresa ya existente, este paquete es para ti.
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  $10,000.00
                </span>
                <span className="text-xs font-semibold leading-6">MXN</span>
              </p>
              <button className="mt-6 rounded-md bg-btn-400 hover:bg-btn-600 transition-colors duration-150 px-3 py-2 text-center text-lg font-semibold leading-6 w-full">
                Comprar ahora
              </button>
              <ul className="text-xs leading-6 xl:mt-10 mt-8" role="list">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
              </ul>
            </div>

            {/* PRO */}
            <div className="rounded-3xl p-8 xl:p-10 ring-1 ring-link-100 ">
              <div className=" flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold leading-8 text-link-100">
                  Pyme
                </h3>
              </div>
              <p className="mt-5 text-xs leading-6 text-gray-200">
                Si buscas iniciar un negocio en forma, o incluso rediseñar la
                imagen que ya tenías, este paquete es ideal para quienes buscan
                ir más lejos.
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  $7,000.00
                </span>
                <span className="text-xs font-semibold leading-6">MXN</span>
              </p>
              <button className="mt-6 rounded-md border-2 border-btn-400 hover:border-btn-600 transition-colors duration-150 px-3 py-2 text-center text-lg font-semibold leading-6 w-full">
                Comprar ahora
              </button>
              <ul className="text-xs leading-6 xl:mt-10 mt-8" role="list">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DiseñoGrafico;
