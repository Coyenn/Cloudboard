export default function handler(req, res) {
  const serviceURL = decodeURIComponent(req.query.service);
  let serviceStatus = "Offline";

  fetch(serviceURL)
    .then((result) => {
      if (result.status === 200) {
        serviceStatus = "Online";
      }
    })
    .then(() => {
      res.status(200).json({ status: serviceStatus });
    });
}
