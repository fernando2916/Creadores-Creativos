import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import LayoutMain from "../layout/LayoutMain";
import DiseñoGrafico from "../pages//diseño/DiseñoGrafico";
import Fotografia from "../pages/fotografia/Fotografia";
import DiseñoWeb from "../pages/desarrollo/DiseñoWeb";
import Impresion from "../pages/imprenta/Impresion";
import Asesorias from "../pages/asesorias/Asesorias";
import Blog from "../pages/blog/Blog";
import Tienda from "../pages/tienda/Tienda";
import Cursos from "../pages/cursos/Cursos";
import Empresa from "../pages/empresa/Empresa";
import Contacto from "../pages/contacto/Contacto";
import Recursos from "../pages/empresa/Recursos";
import Vacantes from "../pages/empresa/Vacantes";
import Esr from "../pages/empresa/Esr";
import PoliticaComp from "../pages/empresa/PoliticaComp";
import PoliticaRemb from "../pages/empresa/PoliticaRemb";
import PoliticaPriv from "../pages/empresa/PoliticaPriv";
import Terminos from "../pages/empresa/Terminos";
import Envios from "../pages/empresa/Envios";
import Frecuentes from "../pages/empresa/Frecuentes";
import Registro from "../pages/autenticacion/Registro";
import Ingresar from "../pages/autenticacion/Ingresar";
import Activar from "../pages/autenticacion/Activar";
import ActivarCuenta from "../pages/autenticacion/ActivarCuenta";
import ConfirmarContraseña from "../pages/autenticacion/ConfirmarContraseña";
import RecuperarContraseña from "../pages/autenticacion/RecuperarContraseña";
import { InfoPost } from "../pages/blog/InfoPost";
import  Carrito  from "../pages/shop/Carrito";
import { Checkout } from "../pages/shop/Checkout";
// import { Error404 } from "../pages/Error404";
import { InfoProduct } from "../pages/tienda/InfoProduct";
import { PrivacySummary } from "../pages/empresa/components/privacidad/pages/PrivacySummary";
import { ItemDetailView } from "../pages/cursos/Components/ItemDetailView";
import { AuthLayout } from "../layout/AuthLayout";

export const PublicRoutes = () => {
  return (
    <Routes>
      {/* Authenticacion */}
      <Route path="/" element={<AuthLayout/>}>
        <Route path="crear-cuenta" element={<Registro />} />
        <Route path="activar-cuenta" element={<Activar />} />
        <Route path="activar" element={<ActivarCuenta />} />
        <Route path="ingresar" element={<Ingresar />} />
        <Route path="restablecer-contraseña" element={<RecuperarContraseña />} />
        <Route path="nueva-contraseña" element={<ConfirmarContraseña />} />
      </Route>
      <Route path="/" element={<LayoutMain />}>

        {/* Generales */}
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<InfoPost />} />
        <Route path="tienda" element={<Tienda />} />
        <Route path="tienda/:id" element={<InfoProduct />} />
        <Route path="cursos" element={<Cursos />} />
        <Route path="cursos/:id" element={<ItemDetailView />} />
        <Route path="diseño-grafico" element={<DiseñoGrafico />} />
        <Route path="fotografia" element={<Fotografia />} />
        <Route path="diseño-y-desarrollo-web" element={<DiseñoWeb />} />
        <Route path="impresion" element={<Impresion />} />
        <Route path="asesorias" element={<Asesorias />} />
        <Route path="sobre-nosotros" element={<Empresa />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="recursos" element={<Recursos />} />
        <Route path="bolsa-de-trabajo" element={<Vacantes />} />
        <Route path="responsabilidad-social" element={<Esr />} />
        <Route path="envios" element={<Envios />} />
        <Route path="preguntas-frecuentes" element={<Frecuentes />} />
        {/* DATOS */}
        <Route path="politica-de-compras" element={<PoliticaComp />} />
        <Route path="politica-de-reembolso" element={<PoliticaRemb />} />
        <Route path="privacidad" element={<PoliticaPriv />} />
        <Route path="privacidad/*" element={<PrivacySummary />} />
        <Route path="terminos-y-condiciones" element={<Terminos />} />

        {/* Shop */}

        <Route path="carrito" element={<Carrito />} />
        <Route path="pagar" element={<Checkout />} />

        {/* Error404 */}
        {/* <Route path="/*" element={<Error404 />} /> */}
        <Route path="/*" element={<Navigate to='ingresar'/>} />
      </Route>
    </Routes>
  );
}
