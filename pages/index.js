import Image from "next/image";
import services from "config/services";
import Time from "react-time";
import moment from "moment";
import { Transition } from "@headlessui/react";

function generateGreetings() {
  var currentHour = moment().format("HH");

  if (currentHour >= 3 && currentHour < 12) {
    return "Morning";
  } else if (currentHour >= 12 && currentHour < 15) {
    return "Afternoon";
  } else if (currentHour >= 15 && currentHour < 20) {
    return "Evening";
  } else if (currentHour >= 20 && currentHour < 3) {
    return "Night";
  } else {
    return "Night";
  }
}

export default function IndexPage() {
  const servicesJSX = services.map(({ name, imageURL, link }) => (
    <a key={link} href={link} target="_blank" rel="noreferrer" className="transform rounded-md bg-gray-800 border-2 border-gray-600 p-5 transition-all hover:shadow-xl hover:scale-105">
      <div className="flex flex-col sm:flex-row text-center sm:text-left">
        <div className="pb-3 sm:pb-0 sm:pr-5">
          <img className="inline" src={imageURL} alt={name} height="50" width="50" />
        </div>
        <div>
          <div className="mb-1">
            <h2 className="text-white font-bold inline">{name}</h2>
            <div className="inline p-1 rounded-md ml-1 text-xs bg-transparent text-gray-600 text-white">Credential Management</div>
          </div>
          <p className="text-gray-300">{link}</p>
        </div>
      </div>
    </a>
  ));

  return (
    <div>
      <div className="mb-10">
        <Transition appear={true} show={true} enter="transform transition duration-[400ms]" enterFrom="opacity-0 scale-50" enterTo="opacity-100 scale-100" leave="transform duration-200 transition ease-in-out" leaveFrom="opacity-100 scale-100 " leaveTo="opacity-0 scale-95 ">
          <h1 className="text-white text-3xl text-center font-bold mb-2">
            Good {generateGreetings()},<span className="text-blue-500">Tim</span>
          </h1>
        </Transition>
        <h3 className="text-white text-lg text-center font-bold">{<Time value={new Date()} format="DD.MM.YYYY HH:mm" />}</h3>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{servicesJSX}</div>
    </div>
  );
}
