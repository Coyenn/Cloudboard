import { Transition } from "@headlessui/react";
import PingStatus from "../components/ping-status";
import ServiceSettings from "../components/service-settings";
import AddServiceModal from "../components/add-service-modal";
import EditServiceModal from "../components/edit-service-modal";
import ServiceInteraction from "../services/_service-interaction";
import React from "react";
import EventEmitter from "../events/_events";
import {
    SortableContainer,
    SortableElement,
    SortableHandle
} from "react-sortable-hoc";

const Handle = SortableHandle((props) => (
    <>{props.children}</>
));

const SortableItem = SortableElement(props => {
    const { value: item } = props;
    return (
        <Transition className="relative" key={item.link} appear={true} show={true} enter="transform transition duration-[400ms]" enterFrom="opacity-0 scale-50" enterTo="opacity-100 scale-100" leave="transform duration-200 transition ease-in-out" leaveFrom="opacity-100 scale-100 " leaveTo="opacity-0 scale-95 ">
            <Handle>
                <a href={"view/#" + item.link} className="block w-100 h-100 transform bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 p-5 transition-all hover:shadow-xl focus:border-blue-500 focus:border-2">
                    <div className="flex flex-col sm:flex-row text-center sm:text-left">
                        <div className="pb-3 sm:pb-0 sm:pr-5 sm:flex sm:flex-col sm:justify-center">
                            <img className="inline" src={item.imageURL} alt={item.name} height="50" width="50" />
                        </div>
                        <div>
                            <div className="mb-1">
                                <h2 className="text-gray-700 dark:text-white font-bold inline">{item.name}</h2>
                                <div className="inline p-1 ml-1 text-xs bg-transparent text-gray-500 dark:text-gray-400">{item.tag}</div>
                            </div>
                            <p className="text-gray-500 dark:text-gray-300">{item.link}</p>
                            <PingStatus url={item.link} />
                        </div>
                    </div>
                </a>
                <div className="absolute top-2 right-0">
                    <ServiceSettings service={item} />
                </div>
            </Handle>
        </Transition>
    );
});

const SortableList = SortableContainer(props => {
    const { items, ...restProps } = props;
    return (
        <div className="mb-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item, index) => (
                <SortableItem
                    key={`item-${item.id}`}
                    index={index}
                    value={item}
                    {...restProps}
                />
            ))}
        </div>
    );
});

export default class ServicePage extends React.Component {
    async listenForServicesChanged() {
        EventEmitter.on("services-changed", () => {
            this.populateServiceJSX();
        })
    }

    sortServices(services) {
        if (typeof window !== 'undefined') {
            let newOrder = localStorage.getItem("cloudboard-service-order");

            if (newOrder !== null) {
                let newServices = services;
                newServices.sort((a, b) => newOrder.indexOf(a.id) - newOrder.indexOf(b.id));

                return newServices;
            }

            return services;
        }
    }

    saveServicesOrder() {
        if (typeof window !== 'undefined') {
            const orderToSave = this.state.services.map((item) => {
                return item.id;
            })

            localStorage.setItem("cloudboard-service-order", orderToSave);
        }
    }

    onSortEnd({ oldIndex, newIndex }) {
        let newServices = this.state.services;
        let saveOldIndex = newServices[oldIndex]

        newServices[oldIndex] = newServices[newIndex];
        newServices[newIndex] = saveOldIndex;

        this.setState({
            services: newServices
        })

        this.saveServicesOrder();
    };

    async populateServiceJSX() {
        const result = await ServiceInteraction.getServices();

        if (typeof (result) === "object") {
            const services = result;

            this.setState({
                services: this.sortServices(services),
            })
        }
        else {
            this.setState({
                servicesJSX: (
                    <div className="absolute w-full">
                        <p className="text-gray-700 dark:text-white text-center">Could not load services:</p>
                        <p className="text-gray-700 dark:text-white text-center">{result}</p>
                    </div>
                )
            })
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            services: [],
        };

        this.populateServiceJSX();
        this.listenForServicesChanged();
    }

    render() {
        return (
            <div>
                <h1 className="text-gray-700 dark:text-white text-5xl text-center font-bold mb-2">
                    Services
                </h1>
                <AddServiceModal />
                <EditServiceModal />
                <div className="border-b border-gray-200 dark:border-gray-600 mb-10"></div>
                <div className="relative">
                    {this.state.services?.length > 0 ? (
                        <SortableList
                            useDragHandle
                            axis="xy"
                            items={this.state.services}
                            onSortEnd={(args) => this.onSortEnd(args)}
                        />
                    ) : <></>}
                </div>
            </div>
        );
    }
}
