import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ServiceInteraction from "../services/_service-interaction";
import EventEmitter from "../events/_events";

export default function ServiceSettings(props) {
  const deleteService = async () => {
    ServiceInteraction.deleteService(props.service.id)
  }

  const editService = async () => {
    EventEmitter.emit("edit-service", props.service);
  }

  return (
    <Menu as="div" className="text-right">
      <div className="inline-block text-left">
        <div className="mx-4">
          <Menu.Button className="inline-flex justify-center w-full py-2 text-sm font-medium text-gray-500 bg-transparent bg-opacity-20 hover:bg-opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </Menu.Button>
        </div>
        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="z-50 absolute right-0 w-56 mt-2 origin-top-right bg-gray-100 dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600 border border-gray-200 dark:border-gray-600 shadow-lg focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item as={Fragment}>
                <a href={props.service.link} target="_blank" rel="noreferrer" className={"hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 text-gray-700 dark:text-white group flex items-center w-full px-2 py-2 text-sm ring-blue-500 focus:ring-2"}>
                  <ExternalIcon className="w-5 h-5 mr-2 text-violet-400" aria-hidden="true" />
                  Open in new tab
                </a>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <a onClick={editService} className={"hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 text-gray-700 dark:text-white group flex items-center w-full px-2 py-2 text-sm ring-blue-500 focus:ring-2"}>
                  <EditIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  Edit
                </a>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item as={Fragment}>
                <a onClick={deleteService} className={"hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 text-gray-700 dark:text-white group flex items-center w-full px-2 py-2 text-sm ring-blue-500 focus:ring-2"}>
                  <DeleteIcon className="w-5 h-5 mr-2 text-violet-400" aria-hidden="true" />
                  Delete
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
}

function EditIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" stroke="#2d77ef" strokeWidth="2" />
    </svg>
  );
}

function DeleteIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="10" height="10" stroke="#2d77ef" strokeWidth="2" />
      <path d="M3 6H17" stroke="#2d77ef" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#2d77ef" strokeWidth="2" />
    </svg>
  );
}

function ExternalIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2d77ef" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
