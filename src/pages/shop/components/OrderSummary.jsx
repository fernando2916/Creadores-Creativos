import { Link } from "react-router-dom"

export const OrderSummary = () => {
  return (
       <section
            aria-labelledby="summary-heading"
            className="mt-16 bg-nav-800 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
          >
            <h2 id="summary-heading" className="text-lg font-medium ">
              Resumen de compra
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm ">Producto</dt>
                <dd className="text-sm font-medium ">$99.00</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex text-sm ">
                  <span>IVA 16%</span>
                </dt>
                <dd className="text-sm font-medium ">$8.32</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex items-center text-sm ">
                  <span>Envío</span>
                </dt>
                <dd className="text-sm font-medium ">$5.00</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="text-base font-medium ">Total</dt>
                <dd className="text-base font-medium ">$112.32</dd>
              </div>
            </dl>

            <div className="mt-3 relative">
              <input
                type="text"
                className="bg-transparent mt-2 border-2 pl-4 pr-32 border-btn-600 outline-none p-3 rounded-md w-full"
                placeholder="Cupón de Descuento"
              />
              <button
                type="button"
                className="absolute top-.5 right-0 bg-btn-400 hover:bg-btn-600 transition-colors duration-150 px-8 py-3.5 rounded-r-md mt-2"
              >
                Aplicar
              </button>
            </div>

            <div className="mt-6">
              <Link to="/pagar">
                <button
                  type="button"
                  className="w-full bg-btn-400 rounded-md shadow-sm py-3 px-4 text-base font-medium hover:bg-btn-600 duration-150 transition-colors"
                >
                  Continuar compra
                </button>
              </Link>
            </div>
          </section>
  )
}
