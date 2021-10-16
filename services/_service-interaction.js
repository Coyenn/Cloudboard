import EventEmitter from "events/_events";

class ServiceInteraction {
  async servicesChanged() {
    EventEmitter.emit("services-changed");
  }

  async serviceOnline(url) {
    const res = await fetch("/api/service-online/" + url).then((res) => res.json());
    
    return res.status === "Online" ? true : false;
  }

  async getServices() {
    const res = await fetch("/api/service/get", {
      method: "POST",
    });

    return res.json();
  }

  async createService(name, imageURL, link, tag) {
    const res = await fetch("/api/service/create", {
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

  async deleteService(serviceName) {
    const res = await fetch(server + "/api/service/delete", {
      body: JSON.stringify({
        name: serviceName,
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
