
export const Buscador = () => {
  return (
      <aside className="bg-nav-900 p-5 rounded-lg">
      <div className="">
        <h2>Buscador</h2>
        <form>
          <div className="">
            <label className="sr-only">Bucar</label>
            <input type="text" className="bg-transparent outline-none border-2 border-link-300 rounded-md pl-2 p-3 w-full" placeholder="Buscar..."/>
            <button type="button" className="bg-btn-400 hover:bg-btn-600 transition-colors duration-150 rounded-md p-3 w-full mx-auto mt-3 font-semibold text-lg">Buscar</button>
          </div>
        </form>
      </div>    
    </aside>
  )
}
