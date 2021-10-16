const fs = require("fs");
let services = require("data/services.json")

function saveData() {
  fs.writeFileSync("data/services.json", JSON.stringify(services, null, 4));
}

export default function handler(req, res) {
	services.push(req.body)
	saveData()

	console.log(req.body, services)
	res.status(200).end();
}