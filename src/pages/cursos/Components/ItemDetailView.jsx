// import { useEffect } from "react";
import { Link } from "react-router-dom";

import { FaAngleDown, FaAngleRight, FaBox, FaCalendar, FaCheck, FaCircle, FaDownload, FaFile, FaMedal, FaPlayCircle, FaShoppingCart, FaStar, FaTrophy, FaTv, FaUserCircle, FaUserFriends, FaYoutube} from "react-icons/fa";
import { FaChartSimple, FaEarthAmericas } from "react-icons/fa6";

import prueba from '../../../assets/marketing.webp'
export const ItemDetailView = () => {
  //   useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <header className="pt-[4rem] max-w-7xl mx-auto ">
        <div className="grid grid-cols-12 mx-auto ">
          <div className="col-span-full lg:col-span-6 p-5 space-y-5 order-1 lg:order-none ">
            <div className="flex items-center gap-1 text-link-100">
              <Link to="/cursos" className="flex items-center gap-2">
                <FaBox className="text-sm" /> Cursos
              </Link>
              <FaAngleRight className="text-sm" />
              <Link>Categoria</Link>
              <FaAngleRight className="text-sm" />
              <Link>Curso</Link>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-semibold">
                Angular: De cero a experto (Legacy)
              </h2>
              <p>
               Todo lo que necesitas saber de angular utilizando TypeScript y buenas prácticas ofrecidas por el equipo de angular.
              </p>
              <p>
               Todo lo que necesitas saber de angular utilizando TypeScript y buenas prácticas ofrecidas por el equipo de angular.
              </p>
            </div>

            <div className="flex gap-3 flex-wrap text-[12px] md:text-[14px] lg:text-lg ">
              <div className="">
                <div className="flex items-center gap-1">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar />
                  </div>
                  <p className="">4.7 de calificación</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <FaCalendar />
                <span>Ene 2023</span>
              </div>
              <div className="flex items-center gap-1">
                <FaYoutube />
                <span>6 horas</span>
              </div>
              <div className="flex items-center gap-1">
                <FaChartSimple />
                <span>Básico</span>
              </div>
              <div className="flex items-center gap-1">
                <FaUserFriends />
                <span>876 estudiantes</span>
              </div>
              <div className="flex items-center gap-1">
                <FaEarthAmericas />
                <span>Español</span>
              </div>
            </div>
            <div className="">
              <button
                type="button"
                className="p-2 bg-btn-400 hover:bg-btn-600 transition-colors duration-150 rounded-md font-semibold text-[16px] w-full md:w-auto flex items-center gap-1 justify-center"
              >
                <FaShoppingCart />
                Comprálo por $550.00 MXN
              </button>
              {/* <button type="button" className="p-3 bg-btn-400 hover:bg-btn-600 transition-colors duration-150 rounded-lg font-semibold text-sm md:text-lg w-full md:w-auto">Comprar</button> */}
            </div>
          </div>
          <div className="col-span-full lg:col-span-6 p-5">
            <img src={prueba} alt="" className="rounded-lg aspect-auto" />
            {/* <video
              src=""
              className="rounded-md border-2 w-full h-[14rem] md:h-[19.2rem] md:mt-12 justify-center items-center"
            ></video> */}
          </div>
        </div>
      </header>
      <main>
        <section className="max-w-7xl mx-auto grid grid-cols-12 gap-2 p-3">
          
          <div className="col-span-full flex flex-col p-3">
            <div>
            <h3  className="text-xl md:text-3xl font-semibold" >Lo que aprenderás:</h3>
              <div className="grid grid-cols-12 mt-3 place-content-between ">
                <div className="col-span-full md:col-span-6">
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <div><FaCheck/></div>
                    <p>35,5 horas de vídeo bajo demanda</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div><FaCheck/></div>
                    <p>62 artículos</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div><FaCheck/></div>
                    <p>39 recursos descargables</p>
                  </li>
                </ul>
                </div>
                <div className="col-span-full md:col-span-6">
                <ul className="space-y-1 mt-1">
                 <li className="flex items-center gap-2">
                    <div><FaCheck/></div>
                    <p>Acceso en dispositivos móviles y TV</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div><FaCheck/></div>
                    <p>Certificado de finalización</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div><FaCheck/></div>
                    <p>Certificado de finalización</p>
                  </li>
                </ul>
                </div>
            </div>
            </div>
          </div>
          <div className="col-span-full flex flex-col p-3">
            <div>
            <h3  className="text-xl md:text-3xl font-semibold" >Este curso incluye:</h3>
              <div className="grid grid-cols-12 mt-3 place-content-between ">
                <div className="col-span-full md:col-span-6">
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <div><FaYoutube/></div>
                    <p>35,5 horas de vídeo bajo demanda</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div><FaFile/></div>
                    <p>62 artículos</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div><FaDownload/></div>
                    <p>39 recursos descargables</p>
                  </li>
                </ul>
                </div>
                <div className="col-span-full md:col-span-6">
                <ul className="space-y-1 mt-1">
                 <li className="flex items-center gap-2">
                    <div><FaTv/></div>
                    <p>Acceso en dispositivos móviles y TV</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div><FaTrophy/></div>
                    <p>Certificado de finalización</p>
                  </li>
                </ul>
                </div>
            </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto grid grid-cols-12 gap-2 p-5">
          <div className="col-span-full">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Contenido del curso
            </h3>
            <div className="flex items-center gap-2 mt-3 mb-1 ">
                    <span className="">9 Secciones </span>
                    <FaCircle className="text-[5px]"/>
                    <span className=""> 27 Clases</span>
                    <FaCircle className="text-[5px]"/>
                    <span className=""> 35 h 41 m de duración total</span>
                  </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto grid grid-cols-12 gap-2 p-5">
          <div className="col-span-full">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Requisitos
            </h3>
            <div className="mt-3">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div><FaCircle className="text-[8px]"/></div>
                  <p className="">Tener una base sólida para trabajar con Angular</p>
                </li>
                <li className="flex items-center gap-2">
                  <div><FaCircle className="text-[8px]"/></div>
                  <p className="">Conocimiento básico de la estructura de páginas HTML</p>
                </li>
                <li className="flex items-center gap-2">
                  <div><FaCircle className="text-[8px]"/></div>
                  <p className="">NO es necesario conocimiento de Angular 1</p>
                </li>
                <li className="flex items-center gap-2">
                  <div><FaCircle className="text-[8px]"/></div>
                  <p className="">NO es necesario conocimiento de TypeScript</p>
                </li>
                <li className="flex items-center gap-2">
                  <div><FaCircle className="text-[8px]"/></div>
                  <p className="">NO es necesario conocimiento alguno sobre Angular o Ionic</p>
                </li>
                <li className="flex items-center gap-2">
                  <div><FaCircle className="text-[8px]"/></div>
                  <p className="">NO es necesario conocimiento de ES6, ECMAScript 6 o ES2015</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto grid grid-cols-12 gap-2 p-5">
          <div className="col-span-full">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Descripción
            </h3>
            <div className="bg-cont-100 p-5 mt-5">
              <span className="">Nota Legacy</span>
              <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident praesentium iste nemo error eligendi eveniet enim eaque, eos id ad nostrum molestias illum asperiores explicabo necessitatibus suscipit dolore officia.
              Eos molestiae quae dolore repellat dicta neque provident praesentium eum eius nam ea doloremque porro quis animi vel, ipsa blanditiis consectetur soluta reprehenderit nesciunt ad quaerat, incidunt aliquam. Debitis, mollitia?
              Unde, quae cum nemo non porro laboriosam dicta cupiditate nesciunt vel perspiciatis et quam officia dolorum neque. Deserunt in consectetur a eius aut? Exercitationem et amet, adipisci quidem officia temporibus?
              Eius fuga rerum dolorem ea natus nihil nesciunt sit vitae animi, unde, autem et. Magni, molestias perferendis consectetur omnis magnam assumenda officia animi praesentium hic sequi fugit beatae tenetur in?
                Animi deleniti blanditiis vel fugit atque velit quidem reprehenderit aliquid, totam ab odit similique saepe voluptatem vitae assumenda, illo tempore sed quam laborum! Maxime suscipit, similique voluptate dignissimos facere a.</p>
              <div className="mt-3">
                <h3 className="text-2xl md:text-3xl font-semibold">
              ¿Para quién es este curso?
            </h3>
              <ul className="space-y-3 mt-2">
                <li className="flex items-center gap-2">
                  <div><FaCircle className="text-[8px]"/></div>
                  <p className="">Tener una base sólida para trabajar con Angular</p>
                </li>
                <li className="flex items-center gap-2">
                  <div><FaCircle className="text-[8px]"/></div>
                  <p className="">Conocimiento básico de la estructura de páginas HTML</p>
                </li>
                <li className="flex items-center gap-2">
                  <div><FaCircle className="text-[8px]"/></div>
                  <p className="">NO es necesario conocimiento de Angular 1</p>
                </li>
                <li className="flex items-center gap-2">
                  <div><FaCircle className="text-[8px]"/></div>
                  <p className="">NO es necesario conocimiento de TypeScript</p>
                </li>
                <li className="flex items-center gap-2">
                  <div><FaCircle className="text-[8px]"/></div>
                  <p className="">NO es necesario conocimiento alguno sobre Angular o Ionic</p>
                </li>
                <li className="flex items-center gap-2">
                  <div><FaCircle className="text-[8px]"/></div>
                  <p className="">NO es necesario conocimiento de ES6, ECMAScript 6 o ES2015</p>
                </li>
              </ul>
            </div>
            </div>
            <button type="button" className="flex items-center gap-2 p-2">Ver más <FaAngleDown/></button>
          </div>
        </section>
        <section className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-full p-5">
            <h3 className="text-2xl md:text-3xl font-semibold">
            Los estudiantes también compraron

            </h3>
            <div className="grid grid-cols-12 ">
            <div className="col-span-2">2</div>
            <div className="col-span-2">2</div>
            <div className="col-span-2">2</div>
            <div className="col-span-2">2</div>
            <div className="col-span-2">2</div>
            <div className="col-span-2">2</div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto grid grid-cols-12 gap-8 bg-cont-100">
          <div className="col-span-full flex flex-col gap-8">
            <div className="p-6 rounded-lg overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-semibold">Instructor</h3>
              <div className="mt-2">
                <p className="">Name Instructor</p>
                <p className="">Especialidad</p>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className=" ">
                  <FaUserCircle className="text-[105px]"/>
                </div>
                <div className=" space-y-2">
                  <div className="flex items-center gap-2" >
                    <FaStar/>
                    <p className="">Calificación del instructor: </p>
                  </div>
                  <div className="flex items-center gap-2" >
                    <FaMedal/>
                    <p className="">266.170 Reseñas</p>
                  </div>
                  <div className="flex items-center gap-2" >
                    <FaUserFriends/>
                    <p className="">590.944 Estudiantes</p>
                  </div>
                  <div className="flex items-center gap-2" >
                    <FaPlayCircle/>
                    <p className="">10 Cursos</p>
                  </div>
                </div>
              </div>
              <p className="text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga culpa laudantium eligendi odio, rem deserunt corrupti, voluptatum provident blanditiis tempore reprehenderit?<br/> 
              </p>
              <p className="text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga culpa laudantium eligendi odio, rem deserunt corrupti, voluptatum provident blanditiis tempore reprehenderit?<br/> 
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
