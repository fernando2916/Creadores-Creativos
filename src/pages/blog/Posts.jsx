import { FaCalendar, FaClock, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ItemsBlog } from "./ItemsBlog";

export const Posts = () => {
  return (
    <section className="pb-16">
      <div className="lg:container mx-auto px-5">
        <h2 className="mb-4 text-2xl font-semibold">Últimos Artículos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
          {ItemsBlog.map((item) => (
            <Link
              key={item.Titulo}
              className="block rounded-lg overflow-hidden mb-4"
              to="/blog/30"
            >
              <article className="bg-nav-800">
                <img
                  className="object-cover aspect-video w-full"
                  alt=""
                  loading="lazy"
                  src={item.img}
                />
                <div className="p-4 space-y-3 relative">
                  <div className="flex items-center">

                  <span className="bg-btn-600 py-1 rounded-md px-2 text-sm font-bold absolute -translate-y-1/2 top-0">
                    Nuevo
                  </span>
                  <span className="bg-link-500 py-1 rounded-md px-2 text-sm font-bold absolute -translate-y-1/2 top-0 left-[90px]">
                    {item.Categoria}
                  </span>
                  </div>

                  <h3 className="mb-2 text-2xl font-semibold text-link-200">{item.Titulo}</h3>
                  <div className="">
                    <p className="line-clamp-3 text-justify text-sm ">
                      {item.Descripcion}
                    </p>
                  </div>
                  <div className="flex justify-between gap-4 text-sm mb-2">
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <p>Lectura de: {item.Tiempo}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendar />
                      <p>{item.FechaPublicacion}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm ">
                    <FaUserCircle />
                    <p className="text-link-100">{item.Autor}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
