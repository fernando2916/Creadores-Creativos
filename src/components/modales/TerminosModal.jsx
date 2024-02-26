import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
// import { FaTimes } from "react-icons/fa";

const TerminosModal = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="text-link-100 font-semibold mr-2">
        Términos y Condiciones
      </button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="scale"
        size="sm">
        <ModalOverlay />
        <ModalContent mx={5}>
          <ModalBody className="bg-nav-900 p-5">
            {/* HEADER */}
            <div className=" flex justify-center py-5 items-center">
              <h2 className="text-2xl font-bold">Términos y Condiciones</h2>
              {/* <button
                onClick={onClose}
                className=" bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-2 rounded-md outline-none">
                <FaTimes className="text-xl" />
              </button> */}
            </div>
            {/* CONTENT */}
            <div className="overflow-scroll h-[30rem]">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, harum magnam, eveniet dignissimos placeat minima
                aliquam, obcaecati nisi repellat molestias eaque excepturi magni
                nobis incidunt ad consequuntur veniam! Totam, quaerat.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, harum magnam, eveniet dignissimos placeat minima
                aliquam, obcaecati nisi repellat molestias eaque excepturi magni
                nobis incidunt ad consequuntur veniam! Totam, quaerat.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, harum magnam, eveniet dignissimos placeat minima
                aliquam, obcaecati nisi repellat molestias eaque excepturi magni
                nobis incidunt ad consequuntur veniam! Totam, quaerat.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, harum magnam, eveniet dignissimos placeat minima
                aliquam, obcaecati nisi repellat molestias eaque excepturi magni
                nobis incidunt ad consequuntur veniam! Totam, quaerat.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, harum magnam, eveniet dignissimos placeat minima
                aliquam, obcaecati nisi repellat molestias eaque excepturi magni
                nobis incidunt ad consequuntur veniam! Totam, quaerat.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, harum magnam, eveniet dignissimos placeat minima
                aliquam, obcaecati nisi repellat molestias eaque excepturi magni
                nobis incidunt ad consequuntur veniam! Totam, quaerat.
              </p>
            </div>
            {/* FOOTER */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TerminosModal;
