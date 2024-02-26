import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

const WorkModal = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  return (
    <>
      <button
        onClick={onOpen}
        className="bg-btn-400 hover:bg-btn-600 p-2 flex text-lg font-semibold mx-auto rounded-md outline-none">
        Postularme
      </button>
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="scale">
        <ModalOverlay />
        <ModalContent mx={3}>
          <ModalBody className="bg-nav-900 p-5">
            {/* HEADER */}
            <div className=" flex justify-between items-center">
              <h2 className="text-md font-semibold">
                Solicitar puesto para:{" "}
                <span className="text-lg font-semibold text-btn-50">
                  Diseñador UI/UX
                </span>
              </h2>
              <button
                onClick={onClose}
                className=" bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-2 rounded-md outline-none">
                <FaTimes className="text-xl" />
              </button>
            </div>
            {/* CONTENT */}
            <form className="py-3 space-y-3">
              <div className=" flex flex-col space-y-1">
                <label className="font-medium text-base">Nombre Completo</label>
                <input
                  type="text"
                  placeholder="Ingresa tu Correo Electrónico"
                  className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                />
              </div>
              <div className=" flex flex-col space-y-1">
                <label className="font-medium text-base">Direccion</label>
                <input
                  type="text"
                  placeholder="Ingresa tu Correo Electrónico"
                  className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                />
              </div>
              <div className=" flex flex-col space-y-1">
                <label className="font-medium text-base">Teléfono</label>
                <input
                  type="tel"
                  placeholder="Ingresa tu Correo Electrónico"
                  className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                />
              </div>
              <div className=" flex flex-col space-y-1">
                <label className="font-medium text-base">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  placeholder="Ingresa tu Correo Electrónico"
                  className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                />
              </div>
              {/* <div className=" flex flex-col space-y-1">
                <label className="font-medium text-base">Intención</label>
                <select className=" bg-transparent border-2 focus:bg-transparent border-link-100 p-2 text-center outline-none">
                  <option className="bg-nav-900" value="">
                    -- Selecionar --
                  </option>
                  <option value="Interesado" className="bg-nav-900">
                    Interesado
                  </option>
                  <option value="Esperado" className="bg-nav-900">
                    Esperado
                  </option>
                </select>
              </div> */}
              <button className="bg-btn-400 hover:bg-btn-600 transition-colors duration-150 outline-none p-2 rounded-md mx-auto flex font-semibold">
                Enviar Solicitud
              </button>
            </form>
            {/* FOOTER */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WorkModal;
