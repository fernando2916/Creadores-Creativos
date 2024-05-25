import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";

export const Faqs = () => {
  return (
    <section className="py-5 bg-cont-100">
      <div className="grid grid-col-12 max-w-7xl mx-5 md:mx-auto">
        <div className="col-span-10 -start-2">
          <h2 className=" py-5 text-xl md:text-3xl font-semibold text-center">
            Consultas frecuentes antes de abrir una cuenta en Emprendedores
            Creativos
          </h2>
          <div className="py-5">
            <Accordion allowToggle>
              <AccordionItem border={'none'}>
                <h2>
                  <AccordionButton >
                    <Box as="span" flex="1" textAlign="left" padding={3}>
                      ¿Cómo elimino mis datos personales?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                  <div className="space-y-3 mx-3">
                    <p className="text-justify text-sm">Si decides cancelar tu cuenta, mantendremos tus datos personales durante el tiempo mínimo necesario para cumplir su propósito inicial de recolección o por requerimientos legales, pero luego de esto tus datos serán eliminados de nuestra plataforma.</p>
                  <button type="button" className="flex items-center gap-2 text-sm text-link-100 hover:text-link-300 transition-colors duration-150">Consultar más información <FaAngleRight/></button>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={'none'}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" padding={3}>
                     Si me registro en Mercado Pago, ¿También tendré una cuenta en Mercado Libre?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className="space-y-3 mx-3">

                  <p className=" text-justify text-sm">

                  Cuando te registras en cualquiera de nuestras plataformas, creas un usuario único que te permite ingresar a todas las demás. Sin embargo, este acceso no es automático y te pediremos una activación adicional cuando quieras usar cada uno de los servicios del ecosistema Mercado Libre.
                    </p>
                    <button type="button" className="flex items-center gap-2 text-sm text-link-100 hover:text-link-300 transition-colors duration-150">Términos y condiciones <FaAngleRight/></button>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={'none'}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" padding={3}>
                     ¿Tengo que dar todos mis datos personales para abrir una cuenta?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className="text-justify text-sm mx-3">

                 Dar tus datos personales no es obligatorio, pero sí es un requisito para usar nuestros servicios. Usamos tus datos para ofrecerte una experiencia personalizada y para mejorar nuestros servicios de manera continua.
                  </p>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={'none'}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" padding={3}>
                   Si soy menor de edad, ¿Puedo abrir una cuenta?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className="text-justify text-sm mx-3">

                 En Mercado Libre trabajamos para mantener una comunidad segura, donde los usuarios puedan operar con confianza. Por eso, solo aquellos usuarios que tengan capacidad legal de contratar pueden operar dentro del sitio. Lamentablemente los menores de edad no se encuentran en esta situación ya que de acuerdo a las leyes vigentes no están autorizados para responder por transacciones comerciales.
                  </p>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={'none'}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" padding={3}>
                     Si no tengo una cuenta, ¿Cómo puedo ejercer mis derechos?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className="space-y-3 mx-3">
                    <p className="text-justify text-sm">

                  Cuando no tienes una cuenta, solo guardamos tu información de navegación. Si consideras que tenemos datos personales tuyos, puedes contactarte con nosotros para ejercer tus derechos de privacidad.
                    </p>
                    <button type="button" className="flex items-center gap-2 text-sm text-link-100 hover:text-link-300 transition-colors duration-150">Comunícate con nosotros <FaAngleRight/></button>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
           
          </div>
        </div>
      </div>
    </section>
  );
}
