import React from "react";

class PingStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("/api/service-online/" + encodeURIComponent(this.props.url))
      .then((res) => res.json())
      .then(
        (result) => {
		  if(result.status === "Online") {
				this.setState({
					isLoaded: true,
				});
		  }
		  else {
			this.setState({
				isLoaded: true,
				error: true,
			});
		  }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: true,
          });
        }
      );
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
