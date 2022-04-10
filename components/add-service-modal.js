import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ServiceInteraction from "../services/_service-interaction";

export default function AddServiceModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const createService = async event => {
    event.preventDefault()
    const target = event.target

    ServiceInteraction.createService(target.serviceName.value, target.serviceImageURL.value, target.serviceLink.value, target.serviceTag.value);
  }

  return (
    <>
      <div className="inset-0 flex items-center">
        <button type="button" onClick={openModal} className="p-1 mb-3 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:border-blue-600 focus:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      <Transition show={isOpen} as="div">
        <Dialog as="div" className="inset-0 z-50 overflow-y-auto fixed opacity-100" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child as="div" enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <div className="bg-black absolute top-0 left-0 w-screen h-screen opacity-50"></div>
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 shadow-2xl">
                <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-gray-900 dark:text-white text-center">
                  New Service
                </Dialog.Title>
                <form onSubmit={createService} autoComplete="off">
                  <div className="my-10">
                    <label htmlFor="serviceName" className="text-gray-900 dark:text-white">
                      Service Name
                    </label>
                    <div className="mt-2">
                      <input required type="text" className="min-w-full mb-3 border-2 border-gray-200 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white" name="serviceName" id="serviceName" />
                    </div>
                    <label htmlFor="serviceLink" className="text-gray-900 dark:text-white">
                      Link (with protocol)
                    </label>
                    <div className="mt-2">
                      <input required type="text" className="min-w-full mb-3 border-2 border-gray-200 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white" name="serviceLink" id="serviceLink" />
                    </div>
                    <label htmlFor="serviceImageURL" className="text-gray-900 dark:text-white">
                      Image URL
                    </label>
                    <div className="mt-2">
                      <input required type="text" className="min-w-full mb-3 border-2 border-gray-200 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white" name="serviceImageURL" id="serviceImageURL" />
                    </div>
                    <label htmlFor="serviceTag" className="text-gray-900 dark:text-white">
                      Tag
                    </label>
                    <div className="mt-2">
                      <input required type="text" className="min-w-full mb-3 border-2 border-gray-200 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white" name="serviceTag" id="serviceTag" />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button type="button" className="mr-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500" onClick={closeModal}>
                      Cancel
                    </button>
                    <button type="submit" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={closeModal}>
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
