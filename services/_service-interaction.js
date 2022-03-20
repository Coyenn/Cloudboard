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
    const res = await fetch(`${server}/api/service-online/` + url).then((res) => res.json());

    return res.status === "Online" ? true : false;
  }

  async getServices() {
    let returnValue = "";

    await fetch(`${server}/api/service/get`, {
      method: "POST",
    }).then((res) => {
      returnValue = res.json();
    }).catch((e) => {
      returnValue = e.toString();
    });

    return returnValue;
  }

  async createService(name, imageURL, link, tag) {
    const res = await fetch(`${server}/api/service/create`, {
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
    });

    this.servicesChanged();
    return res;
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
