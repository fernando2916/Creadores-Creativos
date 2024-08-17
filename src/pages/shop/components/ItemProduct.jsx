import { FaCheck, FaClock, FaMinus, FaPlus, FaTimes } from "react-icons/fa"

import { useState } from "react"
import { Product } from "./ItemsProducts"

export const ItemProduct = () => {
const [count, setCount] = useState(0)
  return (
     <section aria-labelledby="cart-heading" className="col-span-full md:col-span-6 lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Artículos en su carrito de compras
            </h2>

            <ul
              role="list"
              className=""
              >
              {Product.map((product) => (
                <li key={product.id} className="flex py-6 sm:py-10 p-5 mb-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-16 rounded-md object-center object-cover sm:w-12 sm:h-12"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col space-y-3 sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a
                              href={product.href}
                              className="font-medium text-link-300"
                            >
                              {product.name}
                            </a>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="">{product.color}</p>
                          {product.size ? (
                            <p className="ml-4 pl-4 border-l border-gray-200 ">
                              {product.size}
                            </p>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium">
                          {product.price}
                        </p>
                      </div>

                      <div className="mt-5 sm:mt-0 sm:pr-9">
                        <div className="flex gap-2 translate-y-1/2">
                          <button
                            type="button"
                            className={`${count === 0 ? "hidden" : "text-xs"}`}
                            onClick={() => setCount((count) => count - 1)}
                          >
                            <FaMinus />
                          </button>

                          <input
                            type="number"
                            className="text-lg outline-none rounded-md md:w-20 px-2 py-1 md:px-5 md:py-2 bg-transparent border-2 border-link-100 placeholder:text-white"
                            placeholder={count}
                          />

                          <button
                            type="button"
                            className=" text-xs"
                            onClick={() => setCount((count) => count + 1)}
                          >
                            <FaPlus />
                          </button>
                        </div>
                        <div className="absolute top-0 right-0">
                          <button
                            type="button"
                            className="-m-2 p-2 inline-flex bg-btn-400 rounded-full hover:bg-btn-600 transition-colors duration-150"
                          >
                            <span className="sr-only">Remove</span>
                            <FaTimes className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="flex text-xs space-x-2">
                      {product.inStock ? (
                        <FaCheck
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <FaClock
                          className="flex-shrink-0 h-5 w-5 "
                          aria-hidden="true"
                        />
                      )}

                      <span>
                        {product.inStock
                          ? "Disponible"
                          : `Agotado, ${product.leadTime}`}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
  )
}
