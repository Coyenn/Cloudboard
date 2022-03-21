export default async function handler(req, res) {
  const serviceURL = decodeURIComponent(req.query.service);
  let status = "Offline";

  await fetch(serviceURL)
    .then((result) => {
      status = result.status === 200 ? "Online" : "Offline";
    }).catch((e) => {
      status = "Error";
    }).finally(() => {
      res.status(200).json({ status: status });
      res.status(200).end();
    });
}
