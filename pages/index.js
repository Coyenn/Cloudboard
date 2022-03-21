import Time from "react-time";
import moment from "moment";
import { Transition } from "@headlessui/react";
import PingStatus from "../components/ping-status";
import ServiceSettings from "../components/service-settings";
import AddServiceModal from "../components/add-service-modal";
import ServiceInteraction from "../services/_service-interaction";
import React from "react";
import EventEmitter from "../events/_events";

function generateGreetings() {
  var currentHour = moment().format("HH");

  if (currentHour >= 3 && currentHour < 12) {
    return "Morning";
  } else if (currentHour >= 12 && currentHour < 15) {
    return "Afternoon";
  } else if (currentHour >= 15 && currentHour < 20) {
    return "Evening";
  } else if (currentHour >= 20 && currentHour < 3) {
    return "Night";
  } else {
    return "Night";
  }
}

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="mb-10">
          <h1 className="text-white text-5xl text-center font-bold mb-2">
            Good <span className="text-blue-500">{generateGreetings()}</span>
          </h1>
          <h3 className="text-white text-lg text-center font-bold">{<Time value={new Date()} format="DD.MM.YYYY HH:mm" />}</h3>
          <div className="border-b border-gray-600 my-10"></div>
        </div>
      </div>
    );
  }
}
