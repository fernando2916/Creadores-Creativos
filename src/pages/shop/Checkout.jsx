import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { FaCheck, FaAngleDown } from "react-icons/fa";
import { Breadcrumb } from "./components/Breadcrumb";

const tipos = [
  { id: 0, name: "Estado de México" },
  { id: 1, name: "Retrato" },
  { id: 2, name: "En Pareja" },
  { id: 3, name: "Producto" },
  { id: 4, name: "Profesionales" },
];

export const Checkout = () => {
  const [selected, setSelected] = useState(tipos[0]);

  return (
    <section className="pt-[4rem]">
      <Breadcrumb title="Datos" />
      <div className="grid grid-cols-12 mx-5 gap-5 lg:mx-auto max-w-7xl">
        <div className="col-span-full md:col-span-7 p-2 bg-nav-900 mb-3 lg:my-7 order-1 md:-order-none rounded-xl">
          <form>
            <div className="flex justify-between border-b pb-3 pl-2">
              <h3>Cuenta</h3>
              <button className="text-link-100 underline">Inciar sesión</button>
            </div>

            <div className="space-y-3">
              <div className=" pl-2">
                <h3 className="font-medium text-2xl my-2">Entrega</h3>
              </div>
              <div></div>
              <div className="grid grid-cols-2 my-2 gap-3">
                <div>
                  <label className="sr-only">Nombre</label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="bg-transparent border-2 w-full border-link-100 rounded-md p-2 outline-none focus:shadow-md focus:shadow-link-100"
                  />
                </div>
                <div>
                  <label className="sr-only">Apellidos</label>
                  <input
                    type="text"
                    placeholder="Apellidos"
                    className="bg-transparent border-2 w-full border-link-100 rounded-md p-2 outline-none focus:shadow-md focus:shadow-link-100"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only">RFC</label>
                <input
                  type="text"
                  placeholder="RFC"
                  className="bg-transparent border-2 w-full border-link-100 rounded-md p-2 outline-none focus:shadow-md focus:shadow-link-100"
                />
              </div>
              <div>
                <label className="sr-only">Dirección</label>
                <input
                  type="text"
                  placeholder="Dirección"
                  className="bg-transparent border-2 w-full border-link-100 rounded-md p-2 outline-none focus:shadow-md focus:shadow-link-100"
                />
              </div>
              <div>
                <label className="sr-only">Casa, apartamento, N°</label>
                <input
                  type="text"
                  placeholder="Casa, apartamento, N°"
                  className="bg-transparent border-2 w-full border-link-100 rounded-md p-2 outline-none focus:shadow-md focus:shadow-link-100"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 my-2 gap-2">
                <div className="">
                  <label className="sr-only">Código postal</label>
                  <input
                    type="text"
                    placeholder="Código postal"
                    className="bg-transparent border-2 border-link-100 rounded-md p-2 outline-none focus:shadow-md focus:shadow-link-100 w-full"
                  />
                </div>
                <div className="">
                  <label className="sr-only">Ciudad</label>
                  <input
                    type="text"
                    placeholder="Ciudad"
                    className="bg-transparent border-2 border-link-100 rounded-md p-2 outline-none focus:shadow-md focus:shadow-link-100 w-full "
                  />
                </div>
                <div className="flex flex-col relative">
                  <label>
                    <span className="absolute left-3.5 top-1 text-xs text-gray-300">
                      Estado
                    </span>
                  </label>
                  <Listbox value={selected} onChange={setSelected}>
                    <ListboxButton className="md:block w-full border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 rounded-md pt-4 pb-1 pr-8 pl-3 text-left text-sm">
                      {selected.name}
                      <FaAngleDown className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                    </ListboxButton>
                    <ListboxOptions className="absolute z-20 w-full ml-0.5 py-1 mt-11 overflow-auto bg-nav-900 rounded-lg shadow-lg shadow-link-700">
                      {tipos.map((item, index) => (
                        <ListboxOption
                          key={index}
                          value={item}
                          className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-nav-700"
                        >
                          <FaCheck className="invisible size-4 fill-white group-data-[selected]:visible" />
                          <div className="text-sm text-white">{item.name}</div>
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Listbox>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-span-full md:col-span-5 p-2 bg-nav-900 mb-3 lg:my-7 rounded-lg">
          Detalle de compra
        </div>
      </div>
    </section>
  );
};
