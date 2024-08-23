
import { Outlet } from "react-router-dom";


import { FaAngleUp } from "react-icons/fa6";
import ScrollToTop from "react-scroll-to-top";

import { Header } from "@/components/navegation/Cabecera";
import Footer from "@/components/navegation/Footer";

export default function LayoutMain() {

  return (
    <>
      <Header />


      <ScrollToTop
        smooth
        component={<FaAngleUp/>}
        className="!rounded-full !bg-btn-400 !text-lg !font-semibold !p-3 !right-7 !bottom-7 !shadow-none !z-50 !shadow-transparent !flex"
    />

      
      <Outlet />
      <Footer />
    </>
  );
}
