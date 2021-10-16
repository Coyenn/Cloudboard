class ServiceInteraction {
  async getServices() {
    const res = await fetch("/api/service/get", {
      method: "POST",
    })

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
    })

    return res;
  }

  async deleteService(serviceName) {
    const res = await fetch("/api/service/delete", {
      body: JSON.stringify({
        name: serviceName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    return res;
  }
}

export default new ServiceInteraction();
