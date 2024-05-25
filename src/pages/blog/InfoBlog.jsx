import { Link } from "react-router-dom";
import Section from "../Section";
import { ItemsBlog } from "./ItemsBlog";
import {
  FaBook,
  FaCalendar,
  FaClock,
  FaUserCircle,
} from "react-icons/fa";

export const InfoBlog = () => {
  return (
    <>
      <Section
        className="bg-cont-100 py-5"
        title="Últimas Entradas"
        description="Descubre las nuevas novedades sobre el mundo del diseño y sus distintas áreas."
        content={
          <>
            <div className="lg:max-w-7xl md:mx-auto mt-10">
              {ItemsBlog.length ? (
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-3">
                  {ItemsBlog.map((post) => (
                    <Link
                      key={post.Titulo}
                      className="block rounded-lg overflow-hidden mb-4"
                      to="/blog/30"
                    >
                      <article className="bg-nav-900">
                        <img
                          className="object-cover aspect-video w-full"
                          alt=""
                          loading="lazy"
                          src={post.img}
                        />
                        <div className="p-4 space-y-3 relative">
                          <div className="flex items-center">
                            <span className="bg-btn-600 py-1 rounded-md px-2 text-sm font-bold absolute -translate-y-1/2 top-0">
                              Nuevo
                            </span>
                            <span className="bg-link-500 py-1 rounded-md px-2 text-sm font-bold absolute -translate-y-1/2 top-0 left-[90px]">
                              {post.Categoria}
                            </span>
                          </div>

                          <h3 className="mb-2 text-2xl font-semibold text-link-200">
                            {post.Titulo}
                          </h3>
                          <div className="">
                            <p className="line-clamp-3 text-justify text-sm ">
                              {post.Descripcion}
                            </p>
                          </div>
                          <div className="flex justify-between gap-4 text-sm mb-2">
                            <div className="flex items-center gap-1">
                              <FaClock />
                              <p>Lectura de: {post.Tiempo}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaCalendar />
                              <p>{post.FechaPublicacion}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm ">
                            <FaUserCircle />
                            <p className="text-link-100">{post.Autor}</p>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </ul>
              ) : (
                <p className="">No hay Post aún</p>
              )}
              <div className="flex justify-center mx-auto">
                <Link to="/blog">
                  <button
                    className="bg-btn-400 hover:bg-btn-600 transition-colors duration-150 py-2 px-6 text-xl font-semibold rounded-md flex items-center gap-1"
                    type="button"
                  >
                    <FaBook/>
                    Ver Más
                  </button>
                </Link>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};
