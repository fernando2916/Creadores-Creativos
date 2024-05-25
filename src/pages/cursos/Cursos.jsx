import { useEffect } from "react";
import { Header } from "./Components/Header";
import { Content } from "./Components/Content";

const Cursos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main>
        <Content/>
      </main>
    </>
  );
};

export default Cursos;
