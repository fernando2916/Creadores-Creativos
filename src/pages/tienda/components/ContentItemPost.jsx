import { FaCircle } from "react-icons/fa"

export const ContentItemPost = () => {
  return (
    <section>
      <div className="grid md:grid-cols-12 gap-3 mx-3 md:mx-auto max-w-7xl justify-center px-5">
        <div className="col-span-6">
           <div>
            <h2 className="text-lg font-semibold underline underline-offset-8">
              Descripción
          </h2>
          <p className=" text-justify mx-2 mt-2">
            Diseño inspirado en el emblemático jaguar su belleza y estilo
            decorado a la ¡Ay Güey! con sus bordados de pespunte y color,
            inyectándolo de frescura y diversión
          </p>
          </div>
          
          <div className=" pt-3">
            <p className="text-lg font-semibold underline underline-offset-8 ">
              Caracteristicas del producto
            </p>
            <ul className="ml-2 pt-3 space-y-2">
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>Playera UNISEX</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>Cuello redondo</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>Manga Corta</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>Tacto suave</p>
              </li>
            </ul>
          </div>
         
        </div>
        <div className="col-span-6">
          <p className=" text-lg font-semibold col-span-full grid grid-cols-1 underline underline-offset-8">
            Composición:
          </p>
            <p className="text-base mt-2 ml-2">
              Cuerpo- 92% Viscosa - 8% Elastano
            </p>
          <div className=" pt-3">
            <p className="text-lg font-semibold underline underline-offset-8">
              Cuidados de la Ropa
            </p>
            <ul className="ml-2 pt-3 space-y-2">
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>Lavar a maquina a menos de 30° o mano</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>Lavar la prenda por el revés</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>No usar secadora</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>No usar cloro</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>No lavar en seco</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>No planchar sobre la aplicación</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
