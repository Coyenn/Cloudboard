import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ServiceInteraction from "../services/_service-interaction";
import { XIcon } from "@heroicons/react/outline/"
import EventEmitter from "../events/_events";

export default function EditServiceModal() {
    let [isOpen, setIsOpen] = useState(false);
    let [serviceToEdit, setServiceToEdit] = useState(undefined);
    let serviceData = undefined;

    async function listenForOpenEvent() {
        EventEmitter.on("edit-service", (service) => {
            openModal();
            setServiceToEdit(service);

            return;
        })
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const editService = event => {
        event.preventDefault()
        const target = event.target

        ServiceInteraction.editService(serviceToEdit.id, target.serviceName.value || serviceToEdit.name, target.serviceImageURL.value || serviceToEdit.imageURL, target.serviceLink.value || serviceToEdit.link, target.serviceTag.value || serviceToEdit.tag);
        closeModal();
    }

    listenForOpenEvent();

    return (
        <Transition show={isOpen} as="div">
            <Dialog as="div" className="inset-0 z-50 overflow-y-auto fixed opacity-100" onClose={closeModal}>
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child as="div" enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="bg-black absolute top-0 left-0 w-screen h-screen opacity-50"></div>
                        <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-100" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 shadow-2xl">
                            <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-gray-700 dark:text-white text-center">
                                Edit Service
                            </Dialog.Title>

                            <a className="w-10 h-10 absolute right-0 top-0 m-4 p-2 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 focus:border-blue-600 focus:bg-gray-100 dark:focus:bg-gray-700 cursor-pointer" onClick={closeModal}>
                                <XIcon />
                            </a>
                            <form onSubmit={editService} autoComplete="off">
                                <div className="my-10">
                                    <label htmlFor="serviceName" className="text-gray-700 dark:text-white">
                                        Service Name
                                    </label>
                                    <div className="mt-2">
                                        <input placeholder={serviceToEdit?.name} type="text" className="min-w-full mb-3 border-2 border-gray-200 dark:border-gray-600 bg-transparent text-gray-700 dark:text-white" name="serviceName" id="serviceName" />
                                    </div>
                                    <label htmlFor="serviceLink" className="text-gray-700 dark:text-white">
                                        Link (with protocol)
                                    </label>
                                    <div className="mt-2">
                                        <input placeholder={serviceToEdit?.link} type="text" className="min-w-full mb-3 border-2 border-gray-200 dark:border-gray-600 bg-transparent text-gray-700 dark:text-white" name="serviceLink" id="serviceLink" />
                                    </div>
                                    <label htmlFor="serviceImageURL" className="text-gray-700 dark:text-white">
                                        Image URL
                                    </label>
                                    <div className="mt-2">
                                        <input placeholder={serviceToEdit?.imageURL} type="text" className="min-w-full mb-3 border-2 border-gray-200 dark:border-gray-600 bg-transparent text-gray-700 dark:text-white" name="serviceImageURL" id="serviceImageURL" />
                                    </div>
                                    <label htmlFor="serviceTag" className="text-gray-700 dark:text-white">
                                        Tag
                                    </label>
                                    <div className="mt-2">
                                        <input placeholder={serviceToEdit?.tag} type="text" className="min-w-full mb-3 border-2 border-gray-200 dark:border-gray-600 bg-transparent text-gray-700 dark:text-white" name="serviceTag" id="serviceTag" />
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button type="button" className="mr-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500" onClick={closeModal}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                        Edit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}
