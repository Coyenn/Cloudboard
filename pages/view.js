import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/solid";

export default class ViewPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            serviceUrl: "",
            failed: false,
        };
    }

    componentDidMount() {
        this.getUrl();
        setTimeout(() => {
            this.setState({
                failed: true,
            })
        }, 1000);
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
            <>
                <iframe src={this.state.serviceUrl} frameBorder="0" className="w-full h-screen absolute top-0 left-0 select-none z-10">
                </iframe>
                {this.state.failed === true ? (
                    <div className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center z-0 bg-transparent flex-col">
                        <h1 className="text-gray-700 dark:text-white text-4xl font-semibold pb-2">Oops...</h1>
                        <p className="text-gray-700 dark:text-white text-lg mb-2">Looks like this didn't work.</p>
                        <Link href="/">
                            <p className="text-blue-500 hover:underline cursor-pointer text-md flex hover:bg-gray-100 dark:hover:bg-gray-800 p-2 transition-all duration-100">
                                <ArrowLeftIcon className="w-4 h-4 mt-1 mr-2" />
                                Go back
                            </p>
                        </Link>
                    </div>
                ) : <></>}
            </>
        )
    }
}