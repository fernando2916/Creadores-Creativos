import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

const PoliticasModal = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="text-link-100 font-semibold mx-1"
      >
        Aviso de Privacidad
      </button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="scale"
        size="sm"
      >
        <ModalOverlay />
        <ModalContent mx={5} onFocus={() => null}>
          <ModalBody className="bg-nav-900 relative">
            {/* HEADER */}
            <div className=" flex justify-center py-7 items-center">
              <h2 className="text-lg lg:text-2xl font-bold">
                Aviso de Privacidad
              </h2>
              <button
                onClick={onClose}
                className=" bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-2 rounded-md outline-none absolute right-3 top-3"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            {/* CONTENT */}
            <div className="overflow-y-scroll h-[30rem]">
              <p className="text-justify">
                De conformidad con lo previsto en la Ley Federal de Datos
                Personales de Posesión de los Particulares (en lo sucesivo
                denominada como “La Ley”), nos permitimos solicitarle leer
                cuidadosamente los Términos y Condiciones contenidos en el
                texto, que la simple aportación que haga de sus datos Personales
                constituye la aceptación de Términos u Condiciones: <br />
              </p>
              <p className="font-semibold mt-2">
                Creadores Creativos, S.A de C.V.
              </p>
              <div className="mt-2">
                <p>Será la “Responsable” de su información personal.</p>
                <ul className="space-y-3 mt-2">
                  <li className="text-justify">
                    <strong className="font-extrabold">1.-</strong> El domicilio
                    de dicha sociedad mercantil es: Calle. Nicolas Bravo #107,
                    Br. Sn Miguel Ótlica. Tultepec. Estado de México. C.P.
                    54964.
                  </li>
                  <li className="text-justify">
                    <strong className="font-extrabold">2.-</strong> Los Términos
                    “Datos Personales” Tendrán el significado que se les
                    atribuye en el artículo 3 de la Ley.
                  </li>
                  <li className="text-justify">
                    <strong className="font-extrabold">3.-</strong> Los Términos
                    datos Personales que usted pueda proporcionar al Responsable
                    tendrán el uso que en forma enunciativa, pero no limitativa
                    se describe a continuación:
                    <p className="mt-2">
                      Para identificarle, ubicarle, comunicarle, contactarle,
                      enviarle información y/o mercancía, así como su
                      transmisión a terceros relacionados con la interacción
                      comercial que tiene con{" "}
                      <strong>Creadores Creativos, S.A de C.V.</strong>, por
                      cualquier medio que permita la ley. La temporalidad del
                      manejo de los Datos Personales será indefinida a partir de
                      la fecha en que usted los proporcionó al responsable,
                      desde luego podrá oponerse en cualquier momento que lo
                      considera oportuno dando aviso al responsable de su
                      oposición.
                    </p>
                  </li>
                  <li className="text-justify">
                    <strong className="font-extrabold">4.-</strong> Una vez que
                    usted entregue al Responsable sus Datos Personales, le
                    manifestaremos que estos serán conservados en diferentes
                    medios seguros que la tecnología permita, cuyo acceso estará
                    limitado solamente a las personas físicas y/o morales con la
                    que el Responsable tenga alguna relación. El Responsable
                    contará con las medidas de seguridad que considere adecuadas
                    para proteger el uso de sus Datos Personales por parte de
                    los terceros no autorizados. En caso de requerimiento de
                    alguna autoridad, los datos Personales podrán ponerse a
                    disposición de éstas, dentro del estricto cumplimiento de la
                    Ley.
                  </li>
                  <li className="text-justify">
                    <strong className="font-extrabold">5.-</strong> El
                    tratamiento de sus Datos Personales, que se han puesto a
                    disposición del Responsable bajo cualquier forma o
                    circunstancia, podrá ser efectuado por el Responsable de
                    conformidad con los presentes términos y condiciones, por lo
                    que desde este momento se entiende que usted autoriza
                    expresamente al Responsable para tal efecto, hasta que tanto
                    usted manifieste su oposición mediante alguno de los medios
                    que indica la Ley.
                  </li>
                  <li className="text-justify">
                    <strong className="font-extrabold">6.-</strong> Usted tendrá
                    en todo momento el acceso a sus Datos Personales, ya sea
                    para solicitar su rectificación, cancelación u oposición de
                    conformidad con lo dispuesto en la Ley en forma escrita o
                    electrónica, dirigiendo su mensaje a <strong>Creadores Creativos, S.A de C.V.</strong>, al domicilio antes mencionado o en la siguiente
                    dirección de correo electrónico, recepcion@ayguey.com Para
                    lo anterior, deberá hacernos saber fehacientemente los Datos
                    Personales que usted desea sean rectificados, cancelados o
                    revisados.
                  </li>
                  <li className="text-justify">
                    <strong className="font-extrabold">7.-</strong> En el caso
                    de que el Responsable requiera usar sus Datos Personales con
                    fines diferentes a los señalados en el presente Aviso de
                    Privacidad, previamente contactará con usted ya sea en forma
                    escrita, telefónica, electrónica o por cualquier medio
                    óptico, sonoro visual otro que la tecnología permita ahora o
                    en el futuro y le explicará los nuevos usos que pretenda
                    darle a dicha información a fin de recabar su autorización o
                    rechazo.
                    <p className="mt-2">
                      Al aportar sus datos, manifiesta no estar inscrito(a) en
                      el Registro Público de Consumidores, por lo que no hay
                      restricción para tener una interacción comercial con el
                      Responsable.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* FOOTER */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PoliticasModal;