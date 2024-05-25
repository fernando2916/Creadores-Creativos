import { Route, Routes } from "react-router-dom"
import LayoutMain from "../layout/LayoutMain"
import Home from "../pages/home/Home"
import Blog from "../pages/blog/Blog"
import { InfoPost } from "../pages/blog/InfoPost"
import Tienda from "../pages/tienda/Tienda"
import { InfoProduct } from "../pages/tienda/InfoProduct"
import Cursos from "../pages/cursos/Cursos"
import DiseñoGrafico from "../pages/diseño/DiseñoGrafico"
import Fotografia from "../pages/fotografia/Fotografia"
import DiseñoWeb from "../pages/desarrollo/DiseñoWeb"
import Impresion from "../pages/imprenta/Impresion"
import Asesorias from "../pages/asesorias/Asesorias"
import Empresa from "../pages/empresa/Empresa"
import Contacto from "../pages/contacto/Contacto"
import Recursos from "../pages/empresa/Recursos"
import Vacantes from "../pages/empresa/Vacantes"
import Esr from "../pages/empresa/Esr"
import Facturacion from "../pages/empresa/Facturacion"
import PoliticaComp from "../pages/empresa/PoliticaComp"
import PoliticaRemb from "../pages/empresa/PoliticaRemb"
import PoliticaPriv from "../pages/empresa/PoliticaPriv"
import Terminos from "../pages/empresa/Terminos"
import Envios from "../pages/empresa/Envios"
import Frecuentes from "../pages/empresa/Frecuentes"
import Carrito from "../pages/shop/Carrito"
import { Checkout } from "../pages/shop/Checkout"
import { Error404 } from "../pages/Error404"
import { PrivacySummary } from "../pages/empresa/components/privacidad/pages/PrivacySummary"
import { ItemDetailView } from "../pages/cursos/Components/ItemDetailView"



export const PrivateRoutes = () => {
    return (
      <Routes>
            
    <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<InfoPost />} />
          <Route path="tienda" element={<Tienda />} />
          <Route path="tienda/:id" element={<InfoProduct/>} />
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
          
          {/* DATOS */}
          <Route path="facturacion" element={<Facturacion />} />
          <Route path="politica-de-compras" element={<PoliticaComp />} />
          <Route path="politica-de-reembolso" element={<PoliticaRemb />} />
          <Route path="privacidad" element={<PoliticaPriv />}/>
          <Route path="privacidad/*" element={<PrivacySummary />}/>
          <Route path="terminos-y-condiciones" element={<Terminos />} />
          <Route path="envios" element={<Envios />} />
          <Route path="preguntas-frecuentes" element={<Frecuentes />} />
          {/* Shop */}
          <Route path="carrito" element={<Carrito />} />
          <Route path="pagar" element={<Checkout />} />

          {/* Error404 */}
          <Route path="/*" element={<Error404 />} />
        
        </Route>
      </Routes>
            
  )
}
