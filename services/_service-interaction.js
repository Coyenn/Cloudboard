import EventEmitter from "../events/_events";
let server = "";

if (typeof window !== "undefined") {
   server = window.location.origin;
}

class ServiceInteraction {
  async servicesChanged() {
    EventEmitter.emit("services-changed");
  }

  async serviceOnline(url) {
    const res = await fetch(`${server}/api/service/online/` + url).then((res) => res.json());

    return res.status === "Online" ? true : false;
  }

  async getServices() {
    let result = fetch(`${server}/api/service/get`, {
      method: "GET",
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    }).catch((error) => {
      return error.toString();
    });

    return result;
  }

  createService(name, imageURL, link, tag) {
    let result = fetch(`${server}/api/service/create`, {
      body: JSON.stringify({
        name: name,
        imageURL: imageURL,
        link: link,
        tag: tag,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    }).catch((error) => {
      return error.toString();
    });

    this.servicesChanged();
    return result;
  }

  async deleteService(serviceId) {
    const res = await fetch(`${server}/api/service/delete`, {
      body: JSON.stringify({
        id: serviceId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    this.servicesChanged();
    return res;
  }
}

export default new ServiceInteraction();
