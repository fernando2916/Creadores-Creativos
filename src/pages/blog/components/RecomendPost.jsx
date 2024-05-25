import { Link } from "react-router-dom"
import { FaStar, FaUserCircle } from "react-icons/fa"
import prueba from '../../../assets/disenadores.webp'

export const RecomendPost = () => {
  return (
    <div className="px-4 py-12 lg:px-0 lg:py-0">
                      <h3 className="mb-4 font-bold text-lg">Artículos Recomendados</h3>
                      <div className="flex flex-col gap-6">
                          <Link>
                              <article className="grid grid-cols-2 gap-4 rounded-lg overflow-hidden ">
                                  <img src={prueba} alt="" loading="lazy" width='170' height='170' className="col-span-1 lg:rounded-lg w-full" />
                              <div className="col-span-1 flex flex-col gap-3 py-2">
                                  <h4 className="">Linkux desde cero</h4>
                                  <div>
                                      <div className="flex items-center gap-1">
                                          <span><FaUserCircle/></span>
                                          <span>Diego Bastidas</span>
                                      </div>
                                      <span className="flex items-center gap-1 text-yellow-500">
                                          <FaStar/> 4.7
                                      </span>
                                  </div>
                                </div>
                              </article>
                          </Link>
                          <Link>
                              <article className="grid grid-cols-2 gap-4 rounded-lg overflow-hidden ">
                                  <img src={prueba} alt="" loading="lazy" width='170' height='170' className="col-span-1 lg:rounded-lg w-full" />
                              <div className="col-span-1 flex flex-col gap-3 py-2">
                                  <h4 className="">Linkux desde cero</h4>
                                  <div>
                                      <div className="flex items-center gap-1">
                                          <span><FaUserCircle/></span>
                                          <span>Diego Bastidas</span>
                                      </div>
                                      <span className="flex items-center gap-1 text-yellow-500">
                                          <FaStar/> 4.7
                                      </span>
                                  </div>
                                </div>
                              </article>
                          </Link>
                          <Link>
                              <article className="grid grid-cols-2 gap-4 rounded-lg overflow-hidden ">
                                  <img src={prueba} alt="" loading="lazy" width='170' height='170' className="col-span-1 lg:rounded-lg w-full" />
                              <div className="col-span-1 flex flex-col gap-3 py-2">
                                  <h4 className="">Linkux desde cero</h4>
                                  <div>
                                      <div className="flex items-center gap-1">
                                          <span><FaUserCircle/></span>
                                          <span>Diego Bastidas</span>
                                      </div>
                                      <span className="flex items-center gap-1 text-yellow-500">
                                          <FaStar/> 4.7
                                      </span>
                                  </div>
                                </div>
                              </article>
                          </Link>
                      </div>
                  </div>
  )
}
