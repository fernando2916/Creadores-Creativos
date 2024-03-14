import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LayoutMain from "../layout/LayoutMain";
import DiseñoGrafico from "../pages/DiseñoGrafico";
import Fotografia from "../pages/Fotografia";
import DiseñoWeb from "../pages/DiseñoWeb";
import Impresion from "../pages/Impresion";
import Asesorias from "../pages/Asesorias";
import Blog from "../pages/Blog";
import Tienda from "../pages/Tienda";
import Cursos from "../pages/Cursos";
import Empresa from "../pages/Empresa";
import Contacto from "../pages/Contacto";
import Recursos from "../pages/Recursos";
import Vacantes from "../pages/Vacantes";
import Esr from "../pages/Esr";
import Facturacion from "../pages/Facturacion";
import PoliticaComp from "../pages/PoliticaComp";
import PoliticaRemb from "../pages/PoliticaRemb";
import PoliticaPriv from "../pages/PoliticaPriv";
import Terminos from "../pages/Terminos";
import Envios from "../pages/Envios";
import Frecuentes from "../pages/Frecuentes";
import Registro from "../components/auth/Registro";
import Ingresar from "../components/auth/Ingresar";
import Activar from "../components/auth/Activar";
import ActivarCuenta from "../components/auth/ActivarCuenta";
import ConfirmarContraseña from "../components/auth/ConfirmarContraseña";
import RecuperarContraseña from "../components/auth/RecuperarContraseña";
import { Error404 } from "../pages/Error404";
import Carrito from "../pages/Carrito";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        {/* Authenticacion */}
        <Route path="/crear-cuenta" element={<Registro />} />
        <Route path="/activar-cuenta" element={<Activar />} />
        <Route path="/activate/:ui/:token" element={<ActivarCuenta />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/reset" element={<RecuperarContraseña />} />
        <Route path="/nueva-contraseña" element={<ConfirmarContraseña />} />

        {/* Generales */}
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="tienda" element={<Tienda />} />
        <Route path="cursos" element={<Cursos />} />
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
        <Route path="facturacion" element={<Facturacion />} />
        <Route path="politica-de-compras" element={<PoliticaComp />} />
        <Route path="politica-de-reembolso" element={<PoliticaRemb />} />
        <Route path="aviso-de-privacidad" element={<PoliticaPriv />} />
        <Route path="terminos-y-condiciones" element={<Terminos />} />
        <Route path="envios" element={<Envios />} />
        <Route path="preguntas-frecuentes" element={<Frecuentes />} />
        <Route path="carrito" element={<Carrito />} />

        {/* Error404 */}
        <Route path="/*" element={<Error404 />} />
      </Route>

      {/* Privadas */}
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="tienda" element={<Tienda />} />
        <Route path="cursos" element={<Cursos />} />
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
        <Route path="facturacion" element={<Facturacion />} />
        <Route path="politica-de-compras" element={<PoliticaComp />} />
        <Route path="politica-de-reembolso" element={<PoliticaRemb />} />
        <Route path="aviso-de-privacidad" element={<PoliticaPriv />} />
        <Route path="terminos-y-condiciones" element={<Terminos />} />
        <Route path="envios" element={<Envios />} />
        <Route path="preguntas-frecuentes" element={<Frecuentes />} />
        <Route path="carrito" element={<Carrito />} />

        {/* Error404 */}
        <Route path="/*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
