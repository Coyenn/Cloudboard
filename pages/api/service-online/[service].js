export default function handler(req, res) {
  const serviceURL = decodeURIComponent(req.query.service)

  fetch(serviceURL)
    .then(
      (result) => {
        const status = result.status;

        if(result.status === 200) {
  		    res.status(200).json({ status: "Online" });
        }
        else {
  		    res.status(500).json({ status: "Offline" });
        }
      },
      (error) => {
  		  res.status(500).json({ status: "Offline" });
      }
    );
}
