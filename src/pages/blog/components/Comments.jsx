import { FaRegComments, FaRegThumbsDown, FaRegThumbsUp, FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

export const Comments = () => {
  return (
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
                                  <div className="flex text-sm md:text-base">
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
  )
}
