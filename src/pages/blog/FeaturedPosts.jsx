import { Link } from "react-router-dom";
import { FaCalendar, FaClock, FaUserCircle } from "react-icons/fa";
import { PostFeature } from "./ItemsBlog";
import { PostRead } from "./PostRead";

export const FeaturedPosts = () => {
    return (
      <>
        <section className="pt-10">
          <div className="flex flex-col lg:items-start lg:grid lg:grid-cols-2 gap-8 py-16 lg:container mx-auto px-5">
            {PostFeature.map((post) => (
              <Link key={post.Titulo} to="/blog/10">
                <article className="rounded-lg overflow-hidden shadow-md bg-nav-800">
                  <div className="relative">
                    <img
                      src={post.img}
                      alt=""
                      width="584px"
                      height="330px"
                      loading="lazy"
                      className="aspect-video object-cover w-full"
                    />
                    <div className="flex items-center gap-2">

                    <p className="absolute px-1 text-base font-semibold translate-y-1/2 left-4 bottom-0 bg-link-500 hover:bg-link-600 transition-colors rounded-md">
                      {post.Categoria}
                    </p>
                    <p className="absolute px-1 text-base font-semibold translate-y-1/2 left-28 bottom-0 bg-link-500 hover:bg-link-600 transition-colors rounded-md">
                      Post Destacado
                    </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="font-semibold mb-2 mt-2 text-base md:text-2xl">
                      {post.Titulo}
                    </h2>
                    <p className="text-sm md:text-base lg:text-xl text-justify">
                      {post.Descripcion}
                    </p>
                  </div>
                  <footer className="flex flex-wrap gap-2 justify-between py-2 px-4 text-base bg-nav-700 border-t-4 border-t-nav-900">
                    <div className="flex items-center gap-2">
                      <span className="">
                        <FaUserCircle />
                      </span>
                      <p>{post.Autor}</p>
                    </div>
                    <div className="flex gap-4 ">
                      <div className="flex items-center gap-1">
                        <FaClock />
                        <p>{post.Tiempo}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendar />
                        {post.FechaPublicacion}
                      </div>
                    </div>
                  </footer>
                </article>
              </Link>
            ))}
            <PostRead/>
          </div>
        </section>
      </>
    );
};
