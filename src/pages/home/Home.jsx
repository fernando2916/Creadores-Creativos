import { useEffect } from "react";

// import { InfoSeccionEmpresa } from "./components/home/InfoSeccionEmpresa";
import { InfoSeccionServicios } from "./InfoSeccionServicios";
import { InfoBlog } from "../blog/InfoBlog";
import { SuscripBoletin } from "../contacto/SuscripBoletin";
import { InfoTestimoniales } from "../empresa/InfoTestimoniales";
import { InfoEquipo } from "../empresa/InfoEquipo";
import { Header } from "./Header";
import { InfoMarcas } from "../empresa/InfoMarcas";
import { InfoTienda } from "../tienda/InfoTienda";
import { Recomended } from "../cursos/Components/Recomended";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[4rem]">
      <Header />
      <main>
        {/* <InfoSeccionEmpresa /> */}
        <InfoSeccionServicios />
        <InfoBlog />
        <Recomended/>
        <InfoMarcas />
        <InfoTienda/>
        <SuscripBoletin />
        <InfoEquipo />
        <InfoTestimoniales />
      </main>
    </div>
  );
};

export default Home;
