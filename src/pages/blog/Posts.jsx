import { FaCalendar, FaClock, FaUserCircle, FaEye, FaThumbsUp, FaRegThumbsUp, FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SkeletonPost } from "@/utils/SkeletonPost";
import { FormatearFechaCondicional, PublicacionNueva } from "@/helpers";
import Equipo from "../../assets/Equipo.webp";
import { FaNewspaper } from "react-icons/fa6";
import { useEffect } from "react";
import {  useBlogStore, } from "@/hooks";


export const Posts = () => {

  const {startGetPost, posts, loading} = useBlogStore()

  useEffect(() => {
    startGetPost()
  }, [])



  if (loading) return <SkeletonPost />;

  return (
    <section className="pb-16">
      <div className="lg:container mx-auto px-5">
        <h2 className="mb-4 text-2xl font-semibold">Últimos Artículos</h2>
        {
          posts.length > 0 ? (
            <>
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
          {posts.map((item) => (
            <Link
              key={item.id}
              className="block rounded-lg overflow-hidden mb-4"
              to={item.slug}
            >
              <article className="bg-nav-800">
                <div className="relative">
                  <img
                    className="object-cover aspect-video w-full relative"
                    alt="imagen en espera"
                    loading="lazy"
                    // src={`${item.imagen}.webp`}
                    src={Equipo}
                  />
                  <PublicacionNueva fecha={item.created_at} />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-categoria-100 py-1 rounded-md px-2 text-sm font-bold">
                      {item.categoria}
                    </span>
                    <div className="flex items-center justify-center gap-3 text-sm ">
                    
                    <div className="flex items-center gap-1">
                      <FaNewspaper className="mt-0.5"/>
                      <p className="capitalize">{item.tipo}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaEye className="mt-0.5"/>
                      <p>{item.tiempo_de_lectura}</p>
                    </div>
                  </div>
                  </div>

                  <h3 className="mb-2 text-2xl font-semibold hover:text-link-200">
                    {item.titulo}
                  </h3>
                  <div className="">
                    <p className="line-clamp-3 text-justify text-sm text-gray-300">
                      {item.descripción_corta}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex justify-center items-center gap-3">

                    <div className="flex items-center gap-1 justify-center">
                    <FaRegThumbsUp />
                      <p>15 likes</p>
                    </div>
                    <div className="flex items-center gap-1 justify-center">
                    <FaRegComment />
                      <p>3 Comentarios</p>
                    </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-sm ">
                    
                    <div className="flex items-center gap-1">
                      <FaUserCircle className="mt-0.5"/>
                      <p className="capitalize">{item.autor}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendar className="mt-0.5"/>
                      <FormatearFechaCondicional fecha={item.created_at}/>
                    </div>
                  </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div> 
            </>
          ) : (
            <>
            <p>No hay publicaciones disponibles</p>
            </>
          )
        }
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
          {posts.map((item) => (
            <Link
              key={item.id}
              className="block rounded-lg overflow-hidden mb-4"
              to={item.slug}
            >
              <article className="bg-nav-800">
                <div className="relative">
                  <img
                    className="object-cover aspect-video w-full relative"
                    alt="imagen en espera"
                    loading="lazy"
                    // src={`${item.imagen}.webp`}
                    src={Equipo}
                  />
                  <PublicacionNueva fecha={item.created_at} />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-categoria-100 py-1 rounded-md px-2 text-sm font-bold">
                      {item.categoria}
                    </span>
                    <div className="flex items-center justify-center gap-3 text-sm ">
                    
                    <div className="flex items-center gap-1">
                      <FaNewspaper className="mt-0.5"/>
                      <p className="capitalize">{item.tipo}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaEye className="mt-0.5"/>
                      <p>{item.tiempo_de_lectura}</p>
                    </div>
                  </div>
                  </div>

                  <h3 className="mb-2 text-2xl font-semibold hover:text-link-200">
                    {item.titulo}
                  </h3>
                  <div className="">
                    <p className="line-clamp-3 text-justify text-sm text-gray-300">
                      {item.descripción_corta}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex justify-center items-center gap-3">

                    <div className="flex items-center gap-1 justify-center">
                    <FaRegThumbsUp />
                      <p>15 likes</p>
                    </div>
                    <div className="flex items-center gap-1 justify-center">
                    <FaRegComment />
                      <p>3 Comentarios</p>
                    </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-sm ">
                    
                    <div className="flex items-center gap-1">
                      <FaUserCircle className="mt-0.5"/>
                      <p className="capitalize">{item.autor}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendar className="mt-0.5"/>
                      <FormatearFechaCondicional fecha={item.created_at}/>
                    </div>
                  </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div> */}
      </div>
    </section>
  );
};
