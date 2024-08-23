import { FaClock, FaStar, FaUserCircle } from "react-icons/fa"

import { Progress } from "../../../components/ui/progress";
import { Politicas } from "./ModalComent";

export const ComentsItemPost = () => {
  return (
    <section>
      <div className="max-w-7xl mx-5 md:mx-auto px-5">
        <div className="grid grid-cols-12 pt-5">
          <div className="border md:hidden border-gray-700 col-span-full my-3" />
          <div className="col-span-full lg:col-span-6">
            <div className="flex flex-col mt-5">
              <p className="text-2xl font-semibold flex items-center gap-2">
                Opiniones de los usuarios
              </p>
              <div className="flex items-center">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar />
                <p className=" ml-2 text-lg">Promedio de 150 opiniones </p>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-1">
                <p className="text-sm ml-1">5</p>
                <FaStar className="text-yellow-500" />
                <Progress
                  size="md"
                  value={80}
                  className="w-[70%] md:w-[80%] mx-1 rounded-md"
                  colorScheme="yellow"
                  
                />
                <span>80 %</span>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm ml-1">4</p>
                <FaStar className="text-yellow-500" />
                <Progress
                  size="md"
                  value={60}
                  className="w-[70%] md:w-[80%] mx-1 rounded-md"
                  colorScheme="yellow"
                />
                <span>60 %</span>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm ml-1">3</p>
                <FaStar className="text-yellow-500" />
                <Progress
                  size="md"
                  value={5}
                  className="w-[70%] md:w-[80%] mx-1 rounded-md"
                  colorScheme="yellow"
                />
                <span>5 %</span>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm ml-1">2</p>
                <FaStar className="text-yellow-500" />
                <Progress
                  size="md"
                  value={12}
                  className="w-[70%] md:w-[80%] mx-1 rounded-md"
                  colorScheme="yellow"
                />
                <span>12 %</span>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm ml-1">1</p>
                <FaStar className="text-yellow-500" />
                <Progress
                  size="md"
                  value={6}
                  className="w-[70%] md:w-[80%] mx-1 rounded-md"
                  colorScheme="yellow"
                />
                <span>6 %</span>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-2xl font-semibold">
                Comparte tus pensamientos
              </p>
              <p>
                Si ha utilizado este producto, comparta sus opiniones con otros
                clientes.
              </p>
            </div>
            <div className="mt-1">
              <Politicas/> 
            </div>
          </div>
          <div className="col-span-full md:w-[50rem] my-5 space-y-5">
            {/* COMENTARIOS */}
            <div className="bg-cont-100 p-5 rounded-md ">
              <div className="flex justify-between items-start gap-3">
                <div className="flex gap-x-2">
                  <FaUserCircle className="text-3xl mt-1.5" />
                  <div className="space-y-1">
                  <h4 className="md:text-2xl font-semibold">Usuario</h4>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar />
                  </div>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs md:text-base pt-2"><FaClock/>Hace: 4 días</span>
              </div>
              <p className="text-justify text-xs md:text-sm mt-2 ml-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quis recusandae eaque quaerat doloribus omnis beatae ea in a excepturi aspernatur illum similique cupiditate enim rerum, odio sequi possimus accusamus!</p>
            </div>
            <div className="bg-cont-100 p-5 rounded-md ">
              <div className="flex justify-between items-start gap-3">
                <div className="flex gap-x-2">
                  <FaUserCircle className="text-3xl mt-1.5" />
                  <div className="space-y-1">
                  <h4 className="md:text-2xl font-semibold">Usuario</h4>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar />
                  </div>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs md:text-base pt-2"><FaClock/>Hace: 4 días</span>
              </div>
              <p className="text-justify text-xs md:text-sm mt-2 ml-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quis recusandae eaque quaerat doloribus omnis beatae ea in a excepturi aspernatur illum similique cupiditate enim rerum, odio sequi possimus accusamus!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
