import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { FaEye, FaTimes } from "react-icons/fa";

export const WorkInfo = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
    
  return (
    <div>
      <button
      onClick={onOpen}
        type="button"

        className="bg-btn-400 hover:bg-btn-600 p-2 flex text-lg font-semibold mx-auto rounded-md outline-none items-center gap-1"
      >
        <FaEye/>
        Ver vacante
      </button>
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="scale">
        <ModalOverlay />
        <ModalContent mx={3}>
          <ModalBody className="bg-nav-900 pt-5 ">
            {/* HEADER */}
            <div className=" flex justify-between items-center">
              <h2 className="text-md font-semibold">
                Puesto:{" "}
                <span className="text-lg font-semibold text-btn-50">
                  Diseñador UI/UX
                </span>
              </h2>
              <button
                onClick={onClose}
                className=" bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-2 rounded-md outline-none"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            {/* CONTENT */}
                <div className="overflow-y-scroll">
                    <div className="mt-5">
                        Datos generales
                    </div>
                    <div className="mt-5">
                        Descripcion del puesto
                    </div>
                    <div className="mt-5">
                        Requisitos del puesto
                    </div>
                </div>
            {/* FOOTER */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
