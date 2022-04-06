import Weather from "weather-js";

export default async function handler(req, res) {
    function getWeatherInfo() {
        return new Promise(resolve => {
            Weather.find({ search: 'Berlin', degreeType: 'C' }, (err, weatherRes) => {
                if (err) {
                    console.log(err);
                    resolve({});
                }

                resolve(weatherRes);
            });
        }).catch((e) => {
            return ("Failed to get weather information", e);
        });
    }

    getWeatherInfo().then((info) => {
        res.status(200).json(JSON.stringify(info, null, 2));
    });

    res.status(500);
}