import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { FaCalendar, FaEye, FaTag, FaXTwitter } from "react-icons/fa6";
import { FaCopy, FaFacebook, FaRegComments, FaRegThumbsDown, FaRegThumbsUp, FaUserCircle, FaWhatsapp } from "react-icons/fa";
import { FormatearFechaCondicional } from "@/helpers";
import { RecomendPost } from "./components/RecomendPost";
import Equipo from '../../assets/Equipo.webp'
import { useBlogStore } from "@/hooks";


export const InfoPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const params = useParams();
  const identifier = params.id;

  const {getPost, post, loading} = useBlogStore()
  
  useEffect(() => {
    getPost({identifier})
  }, [])
  
  if (loading) return "Cargando...";
  
  const {

    imagen,
    categoria,
    titulo,
    descripción_corta,
    tiempo_de_lectura,
    created_at,
    autor,
    contenido,
  
  } = post;
  
  return (
    <>
      <header className="pt-[6rem] mb-5">
        <div className=" mx-auto max-w-7xl grid grid-cols-10 items-center">
          <div className="col-span-full lg:col-span-5 order-2 lg:order-1 xl:pr-7 pt-5 xl:pt-0 px-5 xl:px-0">
            <h1 className="mb-4 font-bold md:text-3xl text-lg  text-gray-50">
              {titulo}
            </h1>
            <p className="mb-5 text-lg md:text-2xl">{descripción_corta}</p>
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center gap-1 text-sm md:text-lg">
                <FaTag />
                {categoria}
              </div>
              <div className="flex items-center gap-1 text-sm md:text-lg">
                <FaEye />
                {tiempo_de_lectura}
              </div>
              <div className="flex items-center gap-1 text-sm md:text-lg">
                <FaCalendar />
                <FormatearFechaCondicional fecha={created_at} />
              </div>
            </div>
            <div className="flex gap-4">
              <Link
                className="hover:text-link-100 transition-transform hover:scale-110"
                title="Compartir en Facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                className="hover:text-link-100 transition-transform hover:scale-110"
                title="Compartir en X-Twitter"
              >
                <FaXTwitter />
              </Link>
              <Link
                className="hover:text-link-100 transition-transform hover:scale-110"
                title="Compartir por WhatsApp"
              >
                <FaWhatsapp />
              </Link>
              <button
                type="button"
                className="hover:text-link-100 transition-transform hover:scale-110"
                title="Copiar Enlace"
              >
                <FaCopy />
              </button>
            </div>
          </div>
          <div className="col-span-full lg:col-span-5 order-1 lg:order-2 rounded-lg overflow-hidden px-5 xl:px-0">
            <img
              src={`@/assets/${imagen}.webp`}
              // src={Equipo}
              alt={`imagen ${titulo}`}
              loading="lazy"
              // width="584"
              // height="330"
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </header>
      <section className="bg-cont-100 py-8">
          <div className="grid grid-cols-10 gap-8 w-full max-w-7xl mx-auto">
              <div className="col-span-full lg:col-span-7">
                  <article className="col-span-full lg:col-span-7 p-4 lg:p-8 rounded-lg bg-nav-900 mx-5 xl:mx-0">
                      <div className="">
                          <p className="">{contenido}</p>
                          <p className="">{contenido}</p>
                          <p className="">{contenido}</p>
                          <p className="">{contenido}</p>
                          <p className="">{contenido}</p>
                          <p className="">{contenido}</p>
                          <p className="">{contenido}</p>
                          <p className="">{contenido}</p>
                          <p className="">{contenido}</p>
                          <p className="">{contenido}</p>
                          <p className="">{contenido}</p>
                          <p className="">{contenido}</p>
                          <p className="">{contenido}</p>
                          <p className="">{contenido}</p>

                          
                      </div>
                  </article>
              </div>
              <aside className=" col-span-full lg:col-span-3 flex flex-col gap-8 mx-5 xl:mx-0">
                  <article className="shadow-lg shadow-link-600 rounded-lg p-6 overflow-hidden bg-nav-900 relative before:bg-btn-400 before:w-1 before:h-full before:absolute before:left-0 before:top-0 ">
                      <h3 className="text-lg font-semibold mb-4">Autor del artículo</h3>
                      <div className="flex gap-2 mb-2 lg:mb-0">
                          <span className=" text-4xl">
                              <FaUserCircle/>
                          </span>
                          <div>
                              <p className="">{autor}</p>
                              <p className="mb-2 gap-2">
                                  <small>@fernando </small>
                                  <Link className="text-link-100">Ver Perfil</Link>
                              </p>
                              <p className="">Crack, idolo, máquina, artista, inigualable, fiera y CEO de Emprendedores.</p>
                          </div>
                      </div>
                  </article>
                  <RecomendPost/>
              </aside>
          </div>
    </section>
    <section aria-labelledby="comentario-titulo" className="mx-auto px-5 pb-12 bg-cont-100">
          <div className="grid grid-cols-10 gap-8 mx-auto w-full max-w-7xl pt-3">
              <div className=" col-span-full lg:col-span-7 shadow-md rounded-lg">
                  <h3 className="font-bold mb-4 text-xl">Comentarios de los usuarios</h3>
                  <div className="flex flex-col gap-4 p-4 lg:p-6 rounded-lg shadow-sm bg-nav-900 mb-3">
                      <div className="py-5">
                          <article className="flex gap-2 md:gap-6">
                              <div className="relative h-fit">
                                  <span className="text-xl md:text-4xl">
                                      <FaUserCircle/>
                                  </span>
                              </div>
                              <div>
                                  
                                  <div className="mb-2 rounded-xl p-3 bg-nav-800 w-fit">
                                      <div className="flex justify-between gap-4 gap-y-0 mb-3 ">
                                          <p className="flex flex-wrap md:items-center gap-2 gap-y-0">
                                              <Link className="text-sm font-semibold text-link-300">@Usuario</Link>
                                          </p>
                                          <time>Hace 4 años</time>
                                      </div>
                                      <div>
                                          <p className="text-sm md:text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veritatis blanditiis quos id nulla totam harum aliquid, eligendi facere aperiam nostrum aliquam, repellendus quas in iste maxime tenetur nesciunt pariatur!                                         
                                          </p>
                                      </div>
                                  </div>
                                  <div className="flex text-sm md:text-base py-2">
                                      <button className="flex items-center gap-1 px-2 py-1 rounded font-semibold">
                                          <FaRegThumbsUp/>
                                           3</button>
                                      <button className="flex items-center gap-1 px-2 py-1 rounded font-semibold">
                                          <FaRegThumbsDown/>1</button>
                                      <button className="flex items-center gap-1 px-2 py-1 rounded font-semibold">
                                          <FaRegComments/>
                                          Responder (2) </button>
                                  </div>
                              </div>
                        </article>
                      </div>
                </div>
              </div>
          </div>
    </section>
    <section>
      <div className="grid grid-cols-10 gap-8 w-full max-w-7xl mx-auto">
        <div className="col-span-full lg:col-span-7 shadow-md rounded-lg mt-3 space-y-3 mx-5 xl:mx-0">
          <h3 className="font-semibold text-xl">
            ¿Que te pareció el artículo?
          </h3>
          <div className="">
            <form>
              <div className=" flex flex-col space-y-2">
                <textarea
                  cols="38"
                  rows="6"
                  className=" bg-transparent border-2 border-link-100 rounded-md p-2 outline-none focus:shadow-md focus:shadow-link-200"
                  placeholder="Escribe una respuesta"
                />
              </div>
              <div className="flex items-center justify-between gap-2 my-3">
                <div className=""></div>
                <button type="button" className=" text-base p-2 bg-btn-400 hover:bg-btn-600 transition-colors duration-150 rounded-lg font-semibold">Publicar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
