import { Link } from "react-router-dom";
import { FaCalendar, FaClock, FaCopy, FaFacebook, FaTag, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Diseñadores from "../../../assets/disenadores.webp"

export const HeaderPost = () => {
  return (
    <section className="pt-[6rem] mb-5">
      <div className="w-full mx-auto max-w-screen-xl px-5 grid grid-cols-10 items-center">
        <div className="col-span-full lg:col-span-5 order-2 lg:order-1">
          
          <h1 className="mb-4 font-bold md:text-3xl text-lg  text-gray-50">Mover, copiar y renombrar directorios en Linux</h1>
          <p className="mb-5 text-lg md:text-2xl">Aprende a copiar, mover y renombrar archivos usando la terminal de comandos de Linux.</p>
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-1 text-sm md:text-lg">
              <FaTag />
              Categoria
            </div>
            <div className="flex items-center gap-1 text-sm md:text-lg">
              <FaClock />
              Tiempo
            </div>
            <div className="flex items-center gap-1 text-sm md:text-lg">
              <FaCalendar />
              Fecha Publicación
            </div>
          </div>
          <div className="flex gap-4">
            <Link className="hover:text-link-100 transition-transform hover:scale-110" title="Compartir en Facebook" >
              <FaFacebook/>
            </Link>
            <Link className="hover:text-link-100 transition-transform hover:scale-110" title="Compartir en X-Twitter" >
              <FaXTwitter/>
            </Link>
            <Link className="hover:text-link-100 transition-transform hover:scale-110" title="Compartir por WhatsApp" >
              <FaWhatsapp/>
            </Link>
            <button type="button" className="hover:text-link-100 transition-transform hover:scale-110" title="Copiar Enlace" >
              <FaCopy/>
            </button>
          </div>
      </div>
        <div className="col-span-full lg:col-span-5 order-1 lg:order-2 rounded-lg overflow-hidden">
          <img src={Diseñadores} alt="diseñadores" loading="lazy" width='584' height='330' decoding="async" className="w-full aspect-video object-cover" />
      </div>
      </div>
    </section>
  );
}
