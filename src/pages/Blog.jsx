import { useEffect } from "react";
import HeaderBlog from "../assets/blog.webp";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header>
        <div className="pt-[4rem] relative bg-cover md:h-[65rem] z-10">
          <img
            src={HeaderBlog}
            alt="objetivo de cámara"
            className="opacity-40 h-full w-full object-cover "
          />
          <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center ">
            <div className="text-center p-3 space-y-3 md:space-y-7 relative lg:-top-24">
              <span className=" text-link-100 font-bold text-xs md:text-3xl">
                Agencia de Diseño Gráfico
              </span>
              <h3 className="text-lg md:text-5xl font-extrabold">Blog</h3>
              <div className="">
                <p className="text-sm md:text-xl">
                  Artículos sobre Diseño Gráfico, Fotografía, Diseño y
                  Desarrollo Web, Sistemas de Impresión y Más.
                </p>
                <p className="text-sm md:text-xl">
                  Un espacio de expresión, análisis, diversión y crítica, sobre
                  los últimos temas en tendencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Blog;
