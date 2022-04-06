import React from "react";

export default class ViewPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            serviceUrl: "",
        };
    }

    componentDidMount() {
        this.getUrl();
    }

    async getUrl() {
        if (window.location) {
            this.setState({
                serviceUrl: window.location.toString().split('#')[1],
            })
        }
        else {
            setTimeout(() => { this.getUrl() }, 500);
        }
    }

    render() {
        return (
            <iframe src={this.state.serviceUrl} frameBorder="0" className="w-full h-screen absolute top-0 left-0 select-none"></iframe>
        )
    }
}