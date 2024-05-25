import { useEffect } from "react";
import { Header } from "./Header";
import { Nosotros } from "./Nosotros";
import { Services } from "./Services";
import { Portafolio } from "./Portafolio";
import { FormularioCotizacion } from "./FormularioCotizacion";

const DiseñoWeb = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Nosotros />
      <Services />
      <Portafolio />
      <FormularioCotizacion />
    </>
  );
};

export default DiseñoWeb;
