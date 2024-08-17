import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { FaTimes, FaCheck, FaAngleDown } from "react-icons/fa";

const tipos = [
  { id: 0, name: "Elige una opción" },
  { id: 1, name: "Retrato" },
  { id: 2, name: "En Pareja" },
  { id: 3, name: "Producto" },
  { id: 4, name: "Profesionales" },
];
const AgerdarModal = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const [selected, setSelected] = useState(tipos[0]);
  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-2 rounded-md outline-none"
      >
        Agendar Sesión fotográfica
      </button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="scale"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent mx={5} onFocus={() => null}>
          <ModalBody className="bg-nav-900 relative">
            {/* HEADER */}
            <div className=" flex justify-center py-7 items-center">
              <h2 className="text-lg lg:text-2xl font-bold">Agendar Sesión</h2>
              <button
                onClick={onClose}
                className=" bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-2 rounded-md outline-none absolute right-3 top-3"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            {/* CONTENT */}
            <form className="grid grid-cols-12 gap-5">
              <div className="md:col-span-6 col-span-full">
                <label className="font-medium text-lg">Nombre Completo</label>
                <input
                  required
                  type="text"
                  placeholder="Ingresa tu Nombre completo"
                  className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full"
                />
              </div>
              <div className="md:col-span-6 col-span-full">
                <label className="font-medium text-lg">Tipo de foto</label>
                <Listbox value={selected} onChange={setSelected}>
                  <ListboxButton className="relative block w-full border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 rounded-md py-1.5 pr-8 pl-3 text-left ">
                    {selected.name}
                    <FaAngleDown className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                  </ListboxButton>
                  <ListboxOptions className="absolute z-20 w-[301.5px] md:w-[250px] ml-0.5 lg:w-64 py-1 mt-1 overflow-auto bg-nav-900 rounded-lg shadow-lg shadow-link-700">
                    {tipos.map((item, index) => (
                      <ListboxOption
                        key={index}
                        value={item}
                        className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-nav-700"
                      >
                        <FaCheck className="invisible size-4 fill-white group-data-[selected]:visible" />
                        <div className="text-sm/6 text-white">{item.name}</div>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>
              <div className="md:col-span-6 col-span-full">
                <label className="font-medium text-lg">Elige una fecha</label>
                <div className="relative">
                  <input
                    type="date"
                    className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full"
                  />
                </div>
              </div>
              <div className="md:col-span-6 col-span-full">
                <label className="font-medium text-lg">
                  Telefono de contacto
                </label>
                <input
                  type="tel"
                  placeholder="Ingresa tu numero de contacto"
                  className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full"
                />
              </div>
              <div className="md:col-span-6 col-span-full">
                <label className="font-medium text-lg">Lugar</label>
                <input
                  type="text"
                  className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full"
                />
              </div>
              <div className="md:col-span-6 col-span-full">
                <label className="font-medium text-lg">Nombre</label>
                <input
                  type="text"
                  className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full"
                />
              </div>
              <div className="col-span-12">
                <div className="grid grid-cols-2 gap-3 py-4">
                  <button className="bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-2 rounded-md outline-none text-lg font-semibold ">
                    Cotizar
                  </button>
                  <button className="bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-2 rounded-md outline-none text-lg font-semibold">
                    Agendar
                  </button>
                </div>
              </div>
            </form>
            {/* FOOTER */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AgerdarModal;
