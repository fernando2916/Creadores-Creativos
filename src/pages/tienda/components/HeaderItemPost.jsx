import {  FaPaypal, FaShoppingCart, FaStar, FaHeart } from 'react-icons/fa'
import prueba from '../../../assets/tienda/IM MEXICO.jpg'
import { Button } from '../../../components/ui/button';

export const HeaderItemPost = () => {
  return (
    <section className="pt-[4rem]">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-12 p-5 max-w-7xl mx-2 md:mx-auto">
          <div className="col-span-6 p-5 relative">
            <img src={prueba} alt="" />
            <span className="absolute top-6 left-9 bg-categoria-100 rounded-lg p-2 font-semibold text-sm">
              Nuevo
            </span>
            <div className="absolute top-6 right-9 text-xl bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-3 rounded-full">
              <FaHeart title="Agregar a mis deseos" />
            </div>
          </div>
          <div className="col-span-6 py-5 space-y-3">
            <div className='flex justify-between items-center mr-5'>
            <h2 className="text-4xl font-semibold">IM MEXICO</h2>
            </div>
            <div className="grid grid-cols-12">
              <p className="col-span-4 text-sm md:text-lg font-medium">
                $1,600.00 MXN
              </p>
              <div className=" col-span-8 flex items-center justify-end gap-3 ">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-sm">4 reseñas</span>
              </div>
              <div className="col-span-full pt-2">
                <p>
                  Ténica:
                  <span className="font-semibold ml-2">Serigrafía </span>
                </p>
                <p className="col-span-full pt-2">
                  Por:
                  <span className="font-semibold ml-2">
                    Emprendedores Creativos
                  </span>
                </p>
              </div>
              <div className="border border-gray-700 col-span-full my-3" />
              {/* TALLA Y COLORES */}
              <div className="col-span-full space-y-5">
                {/* TALLA */}
                <div className="">
                  <p className="font-semibold">Talla:</p>
                  <div className="pt-3 space-x-3">
                  </div>
                </div>
                {/* COLORES */}
                <div className="">
                  <p className="font-semibold">Color:</p>
                  <div className="pt-3 space-x-3">
                    <button
                      className="p-5 bg-gray-700 rounded-full "
                      type="button"
                    ></button>
                    <button
                      className="p-5 bg-white rounded-full "
                      type="button"
                    ></button>
                    <button
                      className="p-5 bg-blue-600 rounded-full "
                      type="button"
                    ></button>
                    <button
                      className="p-5 bg-green-800 rounded-full "
                      type="button"
                    ></button>
                  </div>
                </div>
              </div>
              <div className='col-span-full mt-3'>
                <p className="font-semibold">Cantidad:</p>
              </div>
               
              <div className="col-span-full w-full pt-10 grid  mx-auto gap-5">
                <button
                  type="button"
                  className="p-3 bg-btn-400 hover:bg-btn-600 transition-colors duration-150 rounded-md font-semibold flex justify-center items-center gap-2"
                >
                  <FaShoppingCart />
                  Añadir al carrito
                </button>
                <button
                  type="button"
                  className="p-3 bg-[#d1a11e] hover:bg-[#ffc320e8] text-black transition-colors duration-150 rounded-md font-semibold flex justify-center items-center gap-2"
                >
                  <FaPaypal />
                  Comprar con PayPal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
