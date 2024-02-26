import { useEffect } from "react";

import { Outlet } from "react-router-dom";

import Header from "../components/navegation/Header";
import Footer from "../components/navegation/Footer";

import { FaAngleUp } from "react-icons/fa6";

export default function LayoutMain() {
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 350) {
      document.querySelector(".up").classList.remove("hidden");
    } else {
      document.querySelector(".up").classList.add("hidden");
    }
  };
  useEffect(() => {
    document.querySelector(".up").addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <Header />
      <button className="rounded-full bg-btn-600 text-xl p-3 right-7 bottom-7 fixed up hidden">
        <FaAngleUp />
      </button>
      <Outlet />
      <Footer />
    </>
  );
}
