import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'

export const Search = () => {
 const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

    return (
      <>
        <Button onClick={open} className="outline-none">
          <div>
            <FaSearch className="" />
          </div>
        </Button>

        <Transition appear show={isOpen}>
          <Dialog
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={close}
          >
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 bg-nav-900/70">
                <TransitionChild
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 transform-[scale(95%)]"
                  enterTo="opacity-100 transform-[scale(100%)]"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 transform-[scale(100%)]"
                  leaveTo="opacity-0 transform-[scale(95%)]"
                >
                  <DialogPanel className="w-full max-w-xl rounded-xl bg-nav-900 backdrop-blur-2xl">
                    <DialogTitle
                      as="label"
                      className="text-base/7 font-medium text-white flex justify-between sr-only"
                    >
                      Buscar...
                    </DialogTitle>
                    <input
                      type="text"
                      placeholder="Buscar contenido..."
                      className="p-3 rounded-t-md border-b border-nav-800 w-full bg-transparent outline-none relative px-9 placeholder:text-link-300"
                    />
                    <button
                      type="button"
                      onClick={close}
                      className="absolute left-3 top-4"
                    >
                      <FaSearch />
                    </button>
                    <button
                      type="button"
                      onClick={close}
                      className="absolute right-3 top-3 rounded-sm bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-1"
                    >
                      <div>
                        <FaTimes />
                      </div>
                    </button>

                    <div className="m-5 h-32">
                      <div className="">
                        <h3 className="grid place-content-center place-items-center font-semibold text-2xl">
                          No hay busquedas aún
                        </h3>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
}
