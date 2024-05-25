import { Link } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"
import { RecomendPost } from "./RecomendPost"

export const ContentPost = () => {
  return (
      <section className="bg-cont-100 py-8">
          <div className="grid grid-cols-10 gap-8 w-full max-w-7xl mx-auto">
              <div className="col-span-full lg:col-span-7">
                  <article className="col-span-full lg:col-span-7 p-4 lg:p-8 rounded-lg bg-nav-900 mx-5">
                      <div className="">
                          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae accusamus similique, quis quaerat asperiores qui expedita optio deserunt officia totam excepturi at obcaecati harum sunt libero voluptas fugiat voluptate?</p>
                          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae accusamus similique, quis quaerat asperiores qui expedita optio deserunt officia totam excepturi at obcaecati harum sunt libero voluptas fugiat voluptate?</p>
                          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae accusamus similique, quis quaerat asperiores qui expedita optio deserunt officia totam excepturi at obcaecati harum sunt libero voluptas fugiat voluptate?</p>
                          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae accusamus similique, quis quaerat asperiores qui expedita optio deserunt officia totam excepturi at obcaecati harum sunt libero voluptas fugiat voluptate?</p>
                          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae accusamus similique, quis quaerat asperiores qui expedita optio deserunt officia totam excepturi at obcaecati harum sunt libero voluptas fugiat voluptate?</p>
                          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae accusamus similique, quis quaerat asperiores qui expedita optio deserunt officia totam excepturi at obcaecati harum sunt libero voluptas fugiat voluptate?</p>
                          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae accusamus similique, quis quaerat asperiores qui expedita optio deserunt officia totam excepturi at obcaecati harum sunt libero voluptas fugiat voluptate?</p>
                          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae accusamus similique, quis quaerat asperiores qui expedita optio deserunt officia totam excepturi at obcaecati harum sunt libero voluptas fugiat voluptate?</p>
                      </div>
                  </article>
              </div>
              <aside className=" col-span-full lg:col-span-3 flex flex-col gap-8">
                  <article className="shadow-lg shadow-link-600 rounded-lg p-6 overflow-hidden bg-nav-900 relative before:bg-btn-400 before:w-1 before:h-full before:absolute before:left-0 before:top-0 mx-5">
                      <h3 className="text-lg font-semibold mb-4">Autor del artículo</h3>
                      <div className="flex gap-2 mb-2 lg:mb-0">
                          <span className=" text-4xl">
                              <FaUserCircle/>
                          </span>
                          <div>
                              <p className="">Fernando Flores</p>
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
  )
}
