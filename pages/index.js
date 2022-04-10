import Time from "react-time";
import moment from "moment";
import { Transition } from "@headlessui/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ServicesPreviewPicture from "../public/ServicesPreviewPicture.png";
import WeatherPreviewPicture from "../public/WeatherPreviewPicture.png";
import { ArrowRightIcon } from "@heroicons/react/solid";


export default class IndexPage extends React.Component {
  generateGreetings() {
    let currentHour = moment().format("HH");
    let time = "Error";

    if (currentHour >= 3 && currentHour < 12) {
      time = "Morning";
    } else if (currentHour >= 12 && currentHour < 15) {
      time = "Afternoon";
    } else if (currentHour >= 15 && currentHour < 20) {
      time = "Evening";
    } else if (currentHour >= 20 && currentHour < 3) {
      time = "Night";
    } else {
      time = "Night";
    }

    this.setState({
      time: time,
    })
  }

  constructor(props) {
    super(props);

    this.state = {
      time: "Loading",
    };
  }

  componentDidMount() {
    this.generateGreetings();
  }

  render() {
    return (
      <div>
        <div className="mb-10">
          <h1 className="text-gray-900 dark:text-white text-5xl text-center font-bold mb-2">
            Good <span className="text-blue-500">{this.state?.time}</span>
          </h1>
          <h3 className="text-gray-900 dark:text-white text-lg text-center font-bold">
            <Time value={new Date()} format="DD.MM.YYYY HH:mm" />
          </h3>
          <div className="border-b border-gray-200 dark:border-gray-600 my-10"></div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Transition appear={true} show={true} enter="transform transition duration-[400ms]" enterFrom="opacity-0 scale-50" enterTo="opacity-100 scale-100" leave="transform duration-200 transition ease-in-out" leaveFrom="opacity-100 scale-100 " leaveTo="opacity-0 scale-95 ">
              <Link href="/services" passHref={true}>
                <div className="w-100 h-100 transform bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 p-5 transition-all hover:shadow-xl cursor-pointer">
                  <div className="flex flex-col sm:flex-row text-center sm:text-left">
                    <div className="pb-3 sm:pb-0 sm:flex sm:flex-col sm:justify-center">
                    </div>
                    <div>
                      <div className="hover:scale-105 transition-all duration-300">
                        <Image src={ServicesPreviewPicture} alt="Services Preview Picture" />
                      </div>
                      <div className="mt-2 flex flex-col justify-center">
                        <h2 className="text-gray-900 dark:text-white text-2xl font-bold flex mb-2">
                          Services
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">Manage microservices and websites.</p>
                        <div className="mt-4">
                          <button className="flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                            View
                            <ArrowRightIcon className="w-3 h-3 mt-1 ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Transition>
            <Transition appear={true} show={true} enter="transform transition duration-[400ms]" enterFrom="opacity-0 scale-50" enterTo="opacity-100 scale-100" leave="transform duration-200 transition ease-in-out" leaveFrom="opacity-100 scale-100 " leaveTo="opacity-0 scale-95 ">
              <Link href="/weather" passHref={true}>
                <div className="w-100 h-100 transform bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 p-5 transition-all hover:shadow-xl cursor-pointer">
                  <div className="flex flex-col sm:flex-row text-center sm:text-left">
                    <div className="pb-3 sm:pb-0 sm:flex sm:flex-col sm:justify-center">
                    </div>
                    <div>
                      <div className="hover:scale-105 transition-all duration-300">
                        <Image src={WeatherPreviewPicture} alt="Services Preview Picture" />
                      </div>
                      <div className="mt-2 flex flex-col justify-center">
                        <h2 className="text-gray-900 dark:text-white text-2xl font-bold flex mb-2">
                          Weather
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">View the current weather in your area.</p>
                        <div className="mt-4">
                          <button className="flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500">
                            View
                            <ArrowRightIcon className="w-3 h-3 mt-1 ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Transition>
          </div>
        </div>
      </div>
    );
  }
}
