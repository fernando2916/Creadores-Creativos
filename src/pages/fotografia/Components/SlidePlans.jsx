import { FaCheck } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules"

export const SlidePlans = () => {
  return (
      <div>
         <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <div className="bg-nav-900 rounded-3xl p-8 xl:p-10 ">
              <div className=" flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold leading-8 text-link-100 ">Básico</h3>
              </div>
              <p className="mt-5 text-xs leading-6 text-justify text-gray-100">
                El paquete ideal para iniciar tu idea de negocios. Comienza con
                una imagen impactante y construye relaciones de negocio con una
                excelente primera impresión.
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  $3,000.00
                </span>
                <span className="text-xs font-semibold leading-6">MXN</span>
              </p>
              <button className="mt-6 rounded-md bg-btn-400 hover:bg-btn-600 transition-colors duration-150 px-3 py-2 text-center text-LG font-semibold leading-6 w-full">
                Contratar
              </button>
              <ul className="text-xs leading-6 xl:mt-10 mt-8" role="list">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className="bg-nav-900 rounded-3xl p-8 xl:p-10 ">
              <div className=" flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold leading-8 text-link-100 ">Básico</h3>
              </div>
              <p className="mt-5 text-xs leading-6 text-justify text-gray-100">
                El paquete ideal para iniciar tu idea de negocios. Comienza con
                una imagen impactante y construye relaciones de negocio con una
                excelente primera impresión.
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  $3,000.00
                </span>
                <span className="text-xs font-semibold leading-6">MXN</span>
              </p>
              <button className="mt-6 rounded-md bg-btn-400 hover:bg-btn-600 transition-colors duration-150 px-3 py-2 text-center text-LG font-semibold leading-6 w-full">
                Comprar ahora
              </button>
              <ul className="text-xs leading-6 xl:mt-10 mt-8" role="list">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className="bg-nav-900 rounded-3xl p-8 xl:p-10 ">
              <div className=" flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold leading-8 text-link-100 ">Básico</h3>
              </div>
              <p className="mt-5 text-xs leading-6 text-justify text-gray-100">
                El paquete ideal para iniciar tu idea de negocios. Comienza con
                una imagen impactante y construye relaciones de negocio con una
                excelente primera impresión.
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  $3,000.00
                </span>
                <span className="text-xs font-semibold leading-6">MXN</span>
              </p>
              <button className="mt-6 rounded-md bg-btn-400 hover:bg-btn-600 transition-colors duration-150 px-3 py-2 text-center text-LG font-semibold leading-6 w-full">
                Contratar
              </button>
              <ul className="text-xs leading-6 xl:mt-10 mt-8" role="list">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  )
}
