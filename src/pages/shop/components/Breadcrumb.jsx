import { Link } from "react-router-dom"

export const Breadcrumb = ({pageTitle}) => {
  return (
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-semibold">
              {pageTitle}
          </h2>
          <nav>
              <ol className="flex items-center gap-2">
                  <li>
                      <Link className="font-semibold" to='/'>
                          Datos /  
                      </Link>
                  </li>
                  <li>
                      <Link className="font-semibold" to='/'>
                          Envio /  
                      </Link>
                  </li>
                  <li>
                      <Link className="font-semibold" to='/'>
                          Pago 
                      </Link>
                  </li>
                  <li className="font-medium text-link-100">{ pageTitle }</li>
              </ol>
          </nav>
    </div>
  )
}
