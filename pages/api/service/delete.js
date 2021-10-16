const fs = require("fs");
let services = require("data/services.json");

function saveData() {
  fs.writeFileSync("data/services.json", JSON.stringify(services, null, 4));
}

export default function handler(req, res) {
  services.forEach((service) => {
    if (service.name === req.body.name) {
		services.splice(services.indexOf(service), 1)
    }
  });

  saveData();
  res.status(200).end();
}
