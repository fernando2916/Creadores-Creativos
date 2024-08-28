import { Link } from "react-router-dom";
import { FaCalendar, FaClock, FaUserCircle } from "react-icons/fa";
import { ItemsBlog } from "./ItemsBlog";


export const PostRead = () => {

   return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Lo más leído</h2>
      <ul className="flex flex-col gap-8">
        {ItemsBlog.map((post) => (

          <Link key={post.Titulo} to="/blog/12">
            <article className="grid grid-cols-5 gap-4 items-start">
              <img
                src={post.img}
                alt=""
                className="col-span-2 rounded-lg overflow-hidden aspect-video object-cover h-[9rem] w-[24rem]"
              />
              <div className="col-span-3 space-y-2">
                <span className="bg-link-500 py-1 rounded-md px-2 text-xs font-semibold">{post.Categoria}</span>
                <h3 className="mb-2">{post.Titulo}</h3>
                <p className="line-clamp-1">{post.Descripcion}</p>
                <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs mb-2">
                  <div className="flex items-center gap-1">
                    <FaClock />
                    <p>{post.Tiempo}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendar />
                    <p>{post.FechaPublicacion}</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center text-xs">
                  <FaUserCircle />
                  <p>{post.Autor}</p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </ul>
    </div>
  );
};
