const fs = require("fs");
let services = require("data/services.json");

export default function handler(req, res) {
  res.status(200).json(services);
}
