import { Link } from "react-router-dom";
import SlideServicios from "./SlideServicios";
import Section from "../Section";
import { ItemServicios } from "./ItemServicios";

export const Servicios = () => {
  return (
    <>
      <Section
        title="Servicios"
        description="Contamos con distintos servicios, todo en un mismo lugar."
        content={
          <>
            <div className=" hidden md:grid md:grid-cols-3 gap-8 md:flex-shrink mx-auto mt-2 lg:max-w-7xl mb-10">
              {ItemServicios.map((item) => (
                <div
                  key={item.nombre}
                  className="shadow-lg hover:shadow-link-500 p-6 border-double border border-cyan-400/40 rounded-lg">
                  <Link key={item.nombre} to={item.href}>
                    <div className="flex place-content-center">
                      <div className="h-16 w-16 bg-btn-900 rounded-full">
                        <span className="flex justify-center items-center text-4xl py-4 text-cyan-400 h-full w-full object-cover">
                          {item.icono}
                        </span>
                      </div>
                    </div>
                    <h2 className="flex justify-center text-xl font-medium py-4">
                      {item.nombre}
                    </h2>
                    <p className="flex text-left items-center text-lg justify-center">
                      {item.text}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
            {/* Mobile */}
            <div className="md:hidden flex mb-10">
              <SlideServicios />
            </div>
          </>
        }
      />
    </>
  );
};
