import React from "react";
import ServiceInteraction from "../services/_service-interaction";

class PingStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      isLoaded: false,
    };
  }

  async componentDidMount() {
    const serviceStatus = await ServiceInteraction.serviceOnline(encodeURIComponent(this.props.url));
    
    this.setState({
      isLoaded: true,
      error: !serviceStatus,
    });
  }

  render() {
    const { error, isLoaded } = this.state;

    if (error === true) {
      return <p className="text-red-500">Offline</p>;
    } else if (!isLoaded) {
      return <p className="text-yellow-500">Checking</p>;
    } else {
      return <p className="text-green-500">Online</p>;
    }
  }
}

export default PingStatus;
