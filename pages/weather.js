import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";

export default class WeatherPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            weather: [],
        })

        this.getWeather();
    }

    async getWeather() {
        if (typeof window !== "undefined") {
            const server = window.location.origin;

            await fetch(`${server}/api/weather/get`, {
                method: "POST",
            }).then(async (res) => {
                const jsonResponse = await res.json();

                this.setState({
                    weather: jsonResponse,
                })

                console.log(jsonResponse);
            }).catch((e) => {
                throw ("Could not fetch weather", e);
            });
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-white text-5xl text-center font-bold mb-2">
                    Weather
                </h1>
                <div className="border-b border-gray-600 my-10"></div>
                <div className="mb-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <Transition as={Fragment} appear={true} show={true} enter="transform transition duration-[400ms]" enterFrom="opacity-0 scale-50" enterTo="opacity-100 scale-100" leave="transform duration-200 transition ease-in-out" leaveFrom="opacity-100 scale-100 " leaveTo="opacity-0 scale-95">
                        <div className="inline-flex flex-col items-center rounded-md bg-gray-800 border-2 border-gray-600 p-5">
                            <h1 className="text-white text-3xl flex">
                                <img className={`${this.state?.weather[0]?.current.imageUrl ? '' : 'hidden'}`} src={this.state?.weather[0]?.current.imageUrl} layout="fill" alt="Weather Icon based on current temperature" />
                                {this.state?.weather[0]?.location.name}
                            </h1>
                            <p className="text-white text-5xl font-bold">
                                {this.state?.weather[0]?.current.temperature}°C
                            </p>
                        </div>
                    </Transition>
                    <Transition as={Fragment} appear={true} show={true} enter="transform transition duration-[400ms]" enterFrom="opacity-0 scale-50" enterTo="opacity-100 scale-100" leave="transform duration-200 transition ease-in-out" leaveFrom="opacity-100 scale-100 " leaveTo="opacity-0 scale-95">
                        <div className="inline-flex flex-col items-center rounded-md bg-gray-800 border-2 border-gray-600 p-5">
                            <h1 className="text-white text-3xl flex">
                                Tomorrow
                            </h1>
                            <p className="text-white text-5xl font-bold">
                                {this.state?.weather[0]?.forecast[0].low}°C - 
                                {this.state?.weather[0]?.forecast[0].high}°C
                            </p>
                        </div>
                    </Transition>
                    <Transition as={Fragment} appear={true} show={true} enter="transform transition duration-[400ms]" enterFrom="opacity-0 scale-50" enterTo="opacity-100 scale-100" leave="transform duration-200 transition ease-in-out" leaveFrom="opacity-100 scale-100 " leaveTo="opacity-0 scale-95">
                        <div className="inline-flex flex-col items-center rounded-md bg-gray-800 border-2 border-gray-600 p-5">
                            <h1 className="text-white text-3xl flex">
                                In 2 days
                            </h1>
                            <p className="text-white text-5xl font-bold">
                                {this.state?.weather[0]?.forecast[1].low}°C - 
                                {this.state?.weather[0]?.forecast[1].high}°C
                            </p>
                        </div>
                    </Transition>
                    <Transition as={Fragment} appear={true} show={true} enter="transform transition duration-[400ms]" enterFrom="opacity-0 scale-50" enterTo="opacity-100 scale-100" leave="transform duration-200 transition ease-in-out" leaveFrom="opacity-100 scale-100 " leaveTo="opacity-0 scale-95">
                        <div className="inline-flex flex-col items-center rounded-md bg-gray-800 border-2 border-gray-600 p-5">
                            <h1 className="text-white text-3xl flex">
                                In 3 days
                            </h1>
                            <p className="text-white text-5xl font-bold">
                                {this.state?.weather[0]?.forecast[2].low}°C - 
                                {this.state?.weather[0]?.forecast[2].high}°C
                            </p>
                        </div>
                    </Transition>
                </div>
            </div>
        );
    }
}
