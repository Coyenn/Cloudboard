import Time from "react-time";
import moment from "moment";
import { Transition } from "@headlessui/react";
import PingStatus from "../components/ping-status";
import ServiceSettings from "../components/service-settings";
import AddServiceModal from "../components/add-service-modal";
import ServiceInteraction from "../services/_service-interaction";
import React from "react";
import EventEmitter from "../events/_events";

export default class ServicePage extends React.Component {
    async listenForServicesChanged() {
        EventEmitter.on("services-changed", () => {
            this.populateServiceJSX();
        })
    }

    async populateServiceJSX() {
        const services = await ServiceInteraction.getServices();

        if (typeof (services) === "string") {
            this.setState({
                servicesJSX: (
                    <div className="flex flex-col items-center left-0 top-0 w-full absolute">
                        <p1 className="text-white text-center">Could not load services:</p1>
                        <p1 className="text-white text-center">{services}</p1>
                    </div>
                )
            })
        }
        else {
            this.setState({
                servicesJSX: services.map(({ name, imageURL, link, tag, id }) => (
                    <Transition key={link} appear={true} show={true} enter="transform transition duration-[400ms]" enterFrom="opacity-0 scale-50" enterTo="opacity-100 scale-100" leave="transform duration-200 transition ease-in-out" leaveFrom="opacity-100 scale-100 " leaveTo="opacity-0 scale-95 ">
                        <div className="w-100 h-100 transform rounded-md bg-gray-800 border-2 border-gray-600 p-5 transition-all hover:shadow-xl">
                            <a href={link} target="_blank" rel="noreferrer">
                                <div className="flex flex-col sm:flex-row text-center sm:text-left">
                                    <div className="pb-3 sm:pb-0 sm:pr-5 sm:flex sm:flex-col sm:justify-center">
                                        <img className="inline" src={imageURL} alt={name} height="50" width="50" />
                                    </div>
                                    <div>
                                        <div className="mb-1">
                                            <h2 className="text-white font-bold inline">{name}</h2>
                                            <div className="inline p-1 rounded-md ml-1 text-xs bg-transparent text-gray-600 text-white">{tag}</div>
                                        </div>
                                        <p className="text-gray-300">{link}</p>
                                        <PingStatus url={link} />
                                    </div>
                                </div>
                            </a>
                            <div className="absolute top-2 right-0">
                                <ServiceSettings serviceId={id} />
                            </div>
                        </div>
                    </Transition>
                )),
            });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            servicesJSX: <></>,
        };

        this.populateServiceJSX();
        this.listenForServicesChanged();
    }

    render() {
        return (
            <div>
                <h1 className="text-white text-5xl text-center font-bold mb-2">
                   Services
                </h1>
                <AddServiceModal />
                <div className="border-b border-gray-600 mb-10"></div>
                <div className="relative">
                    <div className="mb-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{this.state.servicesJSX}</div>
                </div>
            </div>
        );
    }
}
