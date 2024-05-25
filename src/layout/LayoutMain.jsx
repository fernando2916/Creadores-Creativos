// import { useEffect } from "react";

import { Outlet } from "react-router-dom";

import Header from "../components/navegation/Header";
import Footer from "../components/navegation/Footer";

import { FaAngleUp } from "react-icons/fa6";
import ScrollToTop from "react-scroll-to-top";

export default function LayoutMain() {
  // window.onscroll = function () {
  //   if (document.documentElement.scrollTo > 350) {
  //     document.querySelector(".up").classList.remove("hidden");
  //   } else {
  //     document.querySelector(".up").classList.add("hidden");
  //   }
  // };
  // useEffect(() => {
  //   document.querySelector(".up").addEventListener("click", () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   });
  // }, []);

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
