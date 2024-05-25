import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { RaitingStar } from "./RaitingStar";

export const ModalComent = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        className="p-3 mt-3 bg-btn-400 hover:bg-btn-600 transition-colors duration-150 rounded-md text-xl font-semibold"
      >
        Escribe una reseña
      </button>
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="scale">
        <ModalOverlay />
        <ModalContent mx={3}>
          <ModalBody className="bg-nav-900 pt-5">
            {/* HEADER */}
            <div className=" flex justify-between items-center">
              <h2 className="text-xl font-semibold">Escribe tu reseña</h2>
              <button
                onClick={onClose}
                className=" bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-2 rounded-md outline-none"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            {/* CONTENT */}
            <form className="py-3 space-y-3">
              <div className=" flex items-center space-x-2">
                <RaitingStar />
              </div>
              <div className=" flex flex-col space-y-1">
                <label className="font-medium text-sm md:text-base sr-only">
                  Escribe tu reseña
                </label>
                <textarea
                  placeholder="Escribe tu reseña"
                  className="bg-transparent p-1 md:p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                />
              </div>
              <button className="bg-btn-400 hover:bg-btn-600 transition-colors duration-150 outline-none p-2 rounded-md mx-auto flex font-semibold">
                Publicar reseña
              </button>
            </form>
            {/* FOOTER */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
