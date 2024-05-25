import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaCircle, FaTimes } from "react-icons/fa";

const TerminosModal = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="text-link-100 font-semibold mr-1">
        Términos Y Condiciones
      </button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="scale"
        size={'sm'}
        >
        <ModalOverlay />
        <ModalContent mx={5} onFocus={() => null}>
          <ModalBody className="bg-nav-900 p-5 relative">
            {/* HEADER */}
            <div className=" flex justify-center py-7 items-center">
              <h2 className="text-2xl md:text-3xl pr-10 font-semibold">
            Términos y condiciones de uso del Sitio
          </h2>
              <button
                onClick={onClose}
                className=" bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-2 rounded-md outline-none absolute right-3 top-3">
                <FaTimes className="text-xl" />
              </button>
            </div>
            {/* CONTENT */}
            <div className="overflow-y-scroll h-[30rem]">
             <span className="text-gray-400 font-light">
              Versión vigente: 24 de noviembre, 2023
            </span>
            {/* resumen */}
            <div>
              <h3 className="font-semibold text-base md:text-xl mt-3">
                Resumen de términos y condiciones
              </h3>
              <p className=" text-justify text-sm md:text-lg pt-2">
                Emprendedores Creativos es una compañía de tecnología que ofrece
                servicios vinculados principalmente al comercio electrónico y a
                los pagos digitales.
              </p>
              <div className="my-3">
                <ul className="space-y-5">
                  <li className="flex gap-3">
                    <div>
                    <FaCircle className="mt-1.5 text-xs" />
                    </div>
                    <p className=" text-justify ">
                      {" "}
                      El Marketplace es una plataforma de comercio electrónico
                      donde las Personas Usuarias pueden vender y comprar
                      productos usando distintas soluciones de pago y envío.{" "}
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div>
                    <FaCircle className="mt-1.5 text-xs" />
                    </div>
                    <p className=" text-justify ">
                      {" "}
                      En Marketplace VIS, conectamos a las personas interesadas
                      en realizar transacciones con vehículos, inmuebles y
                      servicios con posibles vendedores.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div>
                    <FaCircle className="mt-1.5 text-xs" />
                    </div>
                    <p className=" text-justify">
                      {" "}
                      Mercado Pago es una plataforma de pagos y cobros que puede
                      ser usada tanto para operaciones realizadas dentro del
                      Marketplace como fuera de él, en el entendido de que las
                      Personas Usuarias están de acuerdo en recibir el dinero
                      resultante de sus ventas en la plataforma de Mercado Pago
                      o en cualquier sociedad dentro de su grupo económico,
                      indistintamente
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div>
                    <FaCircle className="mt-1.5 text-xs" />
                    </div>
                    <p className=" text-justify ">
                      {" "}
                      Mercado Envíos es la herramienta tecnológica que ofrecemos
                      para que las Personas Usuarias puedan enviar y recibir sus
                      compras hechas en sitios o aplicaciones que utilicen la
                      tecnología de Mercado Libre.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div>
                    <FaCircle className="mt-1.5 text-xs" />
                    </div>
                    <p className=" text-justify ">
                      {" "}
                      También ofrecemos otros servicios como Mercado Shops,
                      Mercado Ads, Mercado Créditos, entre muchos otros, todos
                      con el mismo fin: democratizar el comercio y los servicios
                      financieros en la región.{" "}
                    </p>
                  </li>
                </ul>
              </div>
              <p className="pt-3 text-justify">Para poder operar en la plataforma todas las Personas Usuarias deberán aceptar los Términos y Condiciones, los anexos y la Declaración de Privacidad.</p>
              <p className="pt-3 text-justify">Cada Persona Usuaria es responsable de los datos personales que brinda al momento de registrarse y se obliga a mantenerlos actualizados. Además, es el único responsable del uso y resguardo de su contraseña. </p>
              <p className="pt-3 text-justify">En algunos casos, podremos cobrar una tarifa por el uso de los servicios que integran el ecosistema de Mercado Libre, que la Persona Usuaria se compromete a pagar.</p>
            </div>
            {/* Emprendedores Creativos */}
            <div className="mt-5">
              <h3 className="text-xl md:text-3xl font-semibold">1- Emprendedores Creativos</h3>
              <div className="mt-5 space-y-3">
                <p className="text-justify ml-6 md:ml-9">Mercado Libre es una compañía de tecnología que ofrece servicios vinculados principalmente al comercio electrónico y a los pagos digitales.</p>
                <p className="text-justify ml-6 md:ml-9">Los servicios que ofrece Mercado Libre en los sitios www.mercadolibre.com.mx y sus aplicaciones móviles (de ahora en más: “Sitio”) están diseñados para formar un ecosistema que permita a las personas vender, comprar, pagar, enviar productos y realizar otras actividades comerciales con tecnología aplicada (de ahora en más:“Ecosistema MELI”).</p>
              </div>
            </div>
            {/* Términos y condiciones */}
            <div className="mt-5">
              <h3 className="text-xl md:text-3xl font-semibold">2- Términos y Condiciones</h3>
              <div className="space-y-3 mt-5">
                <p className="text-justify ml-6 md:ml-9">Estos términos y condiciones y los anexos que explican los servicios del Ecosistema MELI (de ahora en más: “Términos y Condiciones”) regulan la relación entre Mercado Libre y las  personas que usan sus servicios (“Personas Usuarias”). </p>
                <p className="text-justify ml-6 md:ml-9">Las Personas Usuarias aceptan estos Términos y Condiciones desde el momento en que se registran en el Sitio y usan el Ecosistema MELI.</p>
                <p className="text-justify ml-6 md:ml-9">Cuando debamos hacer cambios importantes en nuestros servicios, publicaremos las modificaciones con 10 días corridos de anticipación para que las Personas Usuarias puedan revisarlas y seguir usando el Ecosistema MELI. En ningún caso afectarán las operaciones que ya hayan finalizado.</p>
                <p className="text-justify ml-6 md:ml-9">Las Personas Usuarias que no tengan obligaciones pendientes con Mercado Libre o con otras Personas Usuarias, podrán finalizar la relación con Mercado Libre cancelando su cuenta.</p>
              </div>
            </div>
            {/* Capacidad */}
            <div className="mt-5">
              <h3 className="text-xl md:text-3xl font-semibold">3- Capacidad</h3>
              <div className="mt-5 space-y-3">
                <p className="text-justify ml-6 md:ml-9">Podrán usar nuestros servicios las personas mayores de edad que tengan capacidad legal para contratar. </p>
                <p className="text-justify ml-6 md:ml-9">Quien use el Ecosistema MELI en representación de una empresa deberá tener capacidad para contratar a nombre de ella. Además, para poder usar la cuenta, la Persona Usuaria debe encontrarse activa. </p>
              </div>
            </div>
            {/* Registro y cuenta */}
            <div className="mt-5">
              <h3 className="text-xl md:text-3xl font-semibold">4-  Registro y Cuenta</h3>
              <div className="mt-5 space-y-3">
                <p className="text-justify ml-6 md:ml-9">Quien quiera usar nuestros servicios, deberá completar el formulario de registro con los datos que le sean requeridos. Al completarlo, se compromete a hacerlo de manera exacta, precisa y verdadera y a mantener sus datos siempre actualizados. La Persona Usuaria será la única responsable de la certeza de sus datos de registro. Sin perjuicio de la información brindada en el formulario, podremos solicitar y/o consultar información adicional para corroborar la identidad de la Persona Usuaria. </p>
                <p className="text-justify ml-6 md:ml-9">La cuenta es personal, única e intransferible, es decir que bajo ningún concepto se podrá vender o ceder a otra persona. Se accede a ella con la clave personal de seguridad que haya elegido y que deberá mantener bajo estricta confidencialidad. La Persona Usuaria podrá crear Cuentas Colaboradoras y definir sus permisos de acceso. En cualquier caso, la Persona Usuaria será la única responsable por las operaciones que se realicen en su cuenta. En caso de detectar un uso no autorizado de su cuenta, deberá notificar de forma inmediata y fehaciente a Mercado Libre.</p>
                <p className="text-justify ml-6 md:ml-9">Podremos rechazar una solicitud de registro o bien cancelar un registro ya aceptado, sin que esto genere derecho a un resarcimiento. No podrán registrarse nuevamente en el Sitio las Personas Usuarias que hayan sido inhabilitadas previamente. Tampoco podrán registrarse quienes estén incluidos o relacionados a personas incluidas en listas nacionales o internacionales de sanciones. Conoce más. </p>
                <p className="text-justify ml-6 md:ml-9">Además, en caso de detectar el uso de más de una cuenta, podremos aplicar retenciones, débitos y/o cualquier otra medida si consideramos que ese accionar puede perjudicar al resto de las personas que usan el Sitio o a Mercado Libre, más allá de las sanciones que pudieran corresponder. </p>
              </div>
            </div>
            {/* Privacidad de datos */}
            <div className="mt-5">
              <h3 className="text-xl md:text-3xl font-semibold">5- Privacidad de datos</h3>
              <div className="mt-5">
                <p className="text-justify ml-6 md:ml-9">
                  En Mercado Libre hacemos un uso responsable de la información personal, protegiendo la privacidad de las Personas Usuarias que nos confiaron sus datos y tomando las medidas necesarias para garantizar la seguridad en nuestro Ecosistema MELI. Conoce más sobre nuestra Declaración de Privacidad.
                </p>
              </div>
            </div>
            {/* Acceso a otra informacion comercial */}
            <div className="mt-5">
              <h3 className="text-xl md:text-3xl font-semibold">6- Acceso a Otra Información Comercial</h3>
              <div className="mt-5">
                <p className="text-justify ml-6 md:ml-9">Además de lo previsto en las secciones anteriores, Mercado Libre proporciona herramientas, aplicaciones y servicios basados en otra información comercial provista por las Personas Usuarias y/o generada al utilizar los servicios del Ecosistema MELI, para ayudar a los Vendedores a optimizar sus ventas, aumentar su volumen y gestionar su negocio. También podremos usarla para ofrecer a las Personas Usuarias promociones, productos y servicios de otras empresas o de marca compartida, también podrá utilizarse en programas de prevención de fraude y otras medidas destinadas a aumentar la seguridad del Marketplace, de las Personas Usuarias y el cumplimiento de los Términos y Condiciones. Conoce más sobre nuestra política de Acceso a Información.</p>
              </div>
            </div>
            {/* Sanciones */}
            <div className="mt-5">
              <h3 className="text-xl md:text-3xl font-semibold">7- Sanciones</h3>
              <div className="mt-5">
                <p className="text-justify ml-6 md:ml-9">En caso que la Persona Usuaria incumpliera una ley o los Términos y Condiciones, podremos advertir, suspender, restringir o inhabilitar temporal o definitivamente su cuenta, sin perjuicio de otras sanciones que se establezcan en las reglas de uso particulares de los servicios de Mercado Libre. </p>
              </div>
            </div>
            {/* Responsabilidad */}
            <div className="mt-5">
              <h3 className="text-xl md:text-3xl font-semibold">8- Responsabilidad</h3>
              <div className="mt-5">
                <p className="text-justify ml-6 md:ml-9">Mercado Libre será responsable por cualquier defecto en la prestación de su servicio, en la medida en que le sea imputable y con el alcance previsto en las leyes vigentes. </p>
              </div>
            </div>
            {/* Tarifas */}
            <div className="mt-5">
              <h3 className="text-xl md:text-3xl font-semibold">9- Tarifas</h3>
              <div className="mt-5 space-y-3">
                <p className="text-justify ml-6 md:ml-9">Mercado Libre podrá cobrar por sus servicios y la Persona Usuaria se compromete a pagarlos a tiempo. </p>
                <p className="text-justify ml-6 md:ml-9">Podremos modificar o eliminar las tarifas en cualquier momento con el debido preaviso establecido en la cláusula 2 de estos Términos y Condiciones. De la misma manera, podremos modificar las tarifas temporalmente por promociones en favor de las Personas Usuarias. </p>
                <p className="text-justify ml-6 md:ml-9">La Persona Usuaria autoriza a Mercado Libre a retener y/o debitar los fondos existentes y/o futuros de su cuenta de Mercado Pago y/o de las cuentas bancarias que haya registrado en ella, para saldar las tarifas impagas o cualquier otra deuda que pudiera tener. </p>
                <p className="text-justify ml-6 md:ml-9">Para conocer el detalle de las tarifas de cada servicio, las Personas Usuarias deberán consultar los términos y condiciones correspondientes. </p>
                <p className="text-justify ml-6 md:ml-9">En todos los casos se emitirá la factura de conformidad con los datos fiscales que las personas tengan cargados en su cuenta. </p>
              </div>
            </div>
            {/* Propiedad Intelectual */}
            <div className="mt-5">
              <h3 className="text-xl md:text-3xl font-semibold">10- Propiedad Intelectual</h3>
              <div className="mt-5 space-y-3">
                <p className="text-justify ml-6 md:ml-9">Mercado Libre y/o sus sociedades relacionadas son propietarias de todos los derechos de propiedad intelectual sobre sus sitios, todo su contenido, servicios, productos, marcas, nombres comerciales, logos, diseños, imágenes, frases publicitarias, derechos de autor, dominios, programas de computación, códigos, desarrollos, software, bases de datos, información, tecnología, patentes y modelos de utilidad, diseños y modelos industriales, secretos comerciales, entre otros (“Propiedad Intelectual”) y se encuentran protegidos por leyes nacionales e internacionales.</p>
                <p className="text-justify ml-6 md:ml-9">Aunque Mercado Libre otorga permiso para usar sus productos y servicios conforme a lo previsto en los Términos y Condiciones, esto no implica una autorización para usar su  Propiedad Intelectual, excepto consentimiento previo y expreso de Mercado Libre y/o sus sociedades vinculadas. En cualquier caso, los usuarios vendedores que usen dichos productos y servicios no podrán utilizar la Propiedad Intelectual de Mercado Libre de una manera que cause confusión en el público y deberán llevar a cabo su actividad comercial bajo una marca o nombre comercial propio y distintivo, que no resulte confundible con la marca Mercado Libre y su familia de marcas “Mercado”, siguiendo con los lineamientos del Legal Brandbook.</p>
                <p className="text-justify ml-6 md:ml-9">Está prohibido usar nuestros productos o servicios para fines ilegales, realizar cualquier tipo de ingeniería inversa u obras derivadas, utilizar herramientas de búsqueda o de extracción de datos y contenidos de nuestra plataforma para su reutilización y/o crear bases de datos propias que incluyan en todo o en parte nuestro contenido sin nuestra expresa autorización. Está también prohibido el uso indebido, sin autorización y/o contrario a la normativa vigente y/o que genere confusión o implique uso denigratorio y/o que le cause perjuicio, daños o pérdidas a Mercado Libre y/o a sus sociedades relacionadas. La utilización de los productos y servicios de Mercado Libre tampoco implica la autorización para usar propiedad intelectual de terceros que pueda estar involucrada, cuyo uso quedará bajo exclusiva responsabilidad del usuario. 
                En caso que una Persona Usuaria o cualquier publicación infrinja la Propiedad Intelectual de Mercado Libre o de terceros, Mercado Libre podrá remover dicha publicación total o parcialmente), sancionar al usuario conforme a lo previsto en estos Términos y Condiciones y ejercer las acciones extrajudiciales y/o judiciales correspondientes.</p>
              </div>
            </div>
            {/* Indemnidad */}
            <div className="mt-5">
              <h3 className="text-xl md:text-3xl font-semibold">11- Indemnidad</h3>
              <div className="mt-5">
                <p className="text-justify ml-6 md:ml-9">La Persona Usuaria mantendrá indemne a Mercado Libre y sus sociedades relacionadas, así como a quienes la dirigen, suceden, administran, representan y/o trabajan en ellas, por cualquier reclamo administrativo o judicial iniciado por otras Personas Usuarias, terceros o por cualquier Organismo, relacionado con sus actividades en el Ecosistema MELI.
                En virtud de esa responsabilidad, podrán realizar compensaciones, retenciones u otras medidas necesarias para la reparación de pérdidas, daños y perjuicios, cualquiera sea su naturaleza.</p>
              </div>
            </div>
            {/* Anexos */}
            <div className="mt-5">
              <h3 className="text-xl md:text-3xl font-semibold">12- Anexos</h3>
              <div className="mt-5">
                <p className="text-justify ml-6 md:ml-9">Además de estos Términos y Condiciones, cada servicio del Ecosistema MELI tiene sus propias reglas de uso:  </p>
                <ul className="ml-6 md:ml-9 space-y-3 mt-5">
                  <li className="flex gap-2">
                    <div>
                    <FaCircle className="mt-2.5 text-[7px]" />
                    </div>
                    <h3 className="text-lg text-link-100 hover:text-link-300 duration-150 transition-colors">
                      Emprendedores Foto
                    </h3>
                  </li>
                  <li className="flex gap-2">
                    <div>
                    <FaCircle className="mt-2.5 text-[7px]" />
                    </div>
                    <h3 className="text-lg text-link-100 hover:text-link-300 duration-150 transition-colors">
                     Emprendedores Impresión                      
                    </h3>
                  </li>
                  <li className="flex gap-2">
                    <div>
                    <FaCircle className="mt-2.5 text-[7px]" />
                    </div>
                    <h3 className="text-lg text-link-100 hover:text-link-300 duration-150 transition-colors">
                    Emprendedores Publicidad
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
            {/* Jurisdicción y Ley Aplicable */}
            <div className="mt-5">
              <h3 className="text-xl md:text-3xl font-semibold">13- Jurisdicción y Ley Aplicable</h3>
              <div className="mt-5">
                <p className="text-justify ml-6 md:ml-9">Estos Términos y Condiciones se rigen por la ley local. Toda controversia derivada de su aplicación, interpretación, ejecución o validez será resuelta por los tribunales nacionales ordinarios competentes, con asiento en la capital, salvo disposición específica de normas de orden público, como por ejemplo, legislación relativa al Consumidor. Para todos los efectos relacionados con estos Términos y Condiciones y con el uso del sitio, DeRemate.com de Mexico S. de R.L. de C.V. con RFC DCM991109KR2, establece como domicilio Blvd. Miguel de Cervantes Saavedra 161, Pisos 14 y 15, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX, México.</p>
              </div>
            </div>
            </div>
            {/* FOOTER */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TerminosModal;