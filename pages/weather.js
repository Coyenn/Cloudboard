import React from "react";
import Weather from "weather-js";

export async function getServerSideProps() {
    function getWeatherInfo() {
        return new Promise(resolve => {
            Weather.find({ search: 'Berlin', degreeType: 'C' }, (err, res) => {
                if (err) {
                    console.log(err);
                    resolve({});
                }

                resolve(res);
            });
        });
    }

    return {
        props: {
            weather: JSON.stringify(await getWeatherInfo(), null, 2),
        }
    }
}

export default class WeatherPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="text-white text-5xl text-center font-bold mb-2">
                    Weather
                </h1>
                <div className="border-b border-gray-600 my-10"></div>
                <div className="mb-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="inline-flex flex-col items-center rounded-md bg-gray-800 border-2 border-gray-600 p-5">
                        <h1 className="text-white text-3xl flex">
                            <img src={JSON.parse(this.props.weather)[0].current.imageUrl} layout="fill" alt="Weather Icon based on current temperature" />
                            {JSON.parse(this.props.weather)[0].location.name}
                        </h1>
                        <p className="text-white text-5xl font-bold">
                            {JSON.parse(this.props.weather)[0].current.temperature}°C
                        </p>
                    </div>
                    <div className="inline-flex flex-col items-center rounded-md bg-gray-800 border-2 border-gray-600 p-5">
                        <h1 className="text-white text-3xl flex">
                            Tomorrow
                        </h1>
                        <p className="text-white text-5xl font-bold">
                            {JSON.parse(this.props.weather)[0].forecast[0].low}°C -
                            {JSON.parse(this.props.weather)[0].forecast[0].high}°C
                        </p>
                    </div>
                    <div className="inline-flex flex-col items-center rounded-md bg-gray-800 border-2 border-gray-600 p-5">
                        <h1 className="text-white text-3xl flex">
                            In 2 days
                        </h1>
                        <p className="text-white text-5xl font-bold">
                            {JSON.parse(this.props.weather)[0].forecast[1].low}°C -
                            {JSON.parse(this.props.weather)[0].forecast[1].high}°C
                        </p>
                    </div>
                    <div className="inline-flex flex-col items-center rounded-md bg-gray-800 border-2 border-gray-600 p-5">
                        <h1 className="text-white text-3xl flex">
                            In 3 days
                        </h1>
                        <p className="text-white text-5xl font-bold">
                            {JSON.parse(this.props.weather)[0].forecast[2].low}°C -
                            {JSON.parse(this.props.weather)[0].forecast[2].high}°C
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
