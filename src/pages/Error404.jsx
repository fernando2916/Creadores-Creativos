import { FaAngleRight, FaHome } from "react-icons/fa";
import Eror404 from "../assets/Error_404.png";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="pt-[4rem]">
      <div className="h-screen">
        <div className="items-center justify-center flex flex-col mx-5 gap-5">
          <img src={Eror404} alt="" className=" pt-[2rem] md:pt-[7rem]" />
          <h2 className="text-4xl pt-5 text-center font-bold">
            Página no encontrada
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-200">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>
        </div>
        <div className="flex gap-x-6 mt-10 items-center justify-center">
          <button className="bg-btn-600 hover:bg-btn-400 transition-colors duration-150 px-3 py-2 rounded-md text-lg ">
            <Link to="/" className="flex items-center gap-2">
              <FaHome />
              Ir inicio
            </Link>
          </button>
          <button className=" hover:text-link-200 transition-colors duration-150 px-3 py-2 rounded-md text-lg ">
            <Link to="" className="flex items-center gap-2">
              Contáctanos
              <FaAngleRight />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
