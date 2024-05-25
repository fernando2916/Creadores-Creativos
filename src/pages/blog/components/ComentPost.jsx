
export const ComentPost = () => {
  return (
    <section>
      <div className="grid grid-cols-10 gap-8 w-full max-w-7xl mx-auto">
        <div className="col-span-full lg:col-span-7 shadow-md rounded-lg mt-3 space-y-3 mx-5">
          <h3 className="font-semibold text-xl">
            ¿Que te pareció el artículo?
          </h3>
          <div className="">
            <form>
              <div className=" flex flex-col space-y-2">
                <textarea
                  cols="38"
                  rows="6"
                  className=" bg-transparent border-2 border-link-100 rounded-md p-2 outline-none focus:shadow-md focus:shadow-link-200"
                  placeholder="Escribe una respuesta"
                />
              </div>
              <div className="flex items-center justify-between gap-2 my-3">
                <div className=""></div>
                <button type="button" className=" text-base p-2 bg-btn-400 hover:bg-btn-600 transition-colors duration-150 rounded-lg font-semibold">Publicar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
