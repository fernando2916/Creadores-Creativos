import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaTimes, FaToolbox } from "react-icons/fa";
import { Link } from "react-router-dom";

const WorkModal = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  return (
    <>
      <button
        onClick={onOpen}
        className="bg-btn-400 hover:bg-btn-600 p-2 flex text-lg font-semibold mx-auto rounded-md outline-none items-center gap-1">
        <FaToolbox/>
        Postularme
      </button>
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="scale">
        <ModalOverlay />
        <ModalContent mx={3}>
          <ModalBody className="bg-nav-900 pt-5">
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
                <label className="font-medium text-sm md:text-base">Nombre Completo</label>
                <input
                  type="text"
                  placeholder="Ingresa tu Nombre Completo"
                  className="bg-transparent p-1 md:p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                />
              </div>
              <div className=" flex flex-col space-y-1">
                <label className="font-medium text-sm md:text-base">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  placeholder="Ingresa tu Correo Electrónico"
                  className="bg-transparent p-1 md:p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                />

              </div>
              <div className="">
                <label className="font-medium text-base">
                  Sube tu CV y Portafólio
                </label>
                <input type="file" name="" id="" />
              </div>
              <div className=" text-sm md:text-base">
                <p>Tus datos estan protegidos, puedes encontrar más información en nuestro {' '} 
                  <span className="text-link-100 font-semibold">
                    <Link to='/aviso-de-privacidad'>Aviso de Privacidad</Link>
                  </span>
                </p>
              </div>
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
